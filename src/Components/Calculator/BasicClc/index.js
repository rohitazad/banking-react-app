import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import ButtonCom from "./ButtonCom";

const clcObj = {
  formclcValueExpression: false,
  completePattern: new RegExp("[0-9-+*/.()]"),
  numbersPattern: new RegExp("^[0-9]+$"),
  parenthesisFlag: 0
};

class BasicClcIndexCom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expressionResult: "=",
      formclcValue: "0",
      clVal: "AC"
    };
  }

  // ==== CLC Code here
  // Handles all calculator buttons except "AC".
  clcBtnPress = inputValue => {
    if (
      this.state.formclcValue === "Error" ||
      this.state.formclcValue === "NaN"
    )
      this.setState({
        formclcValue: ""
      });
    if (this.validateInput(inputValue)) {
      if ("/*-+".indexOf(inputValue) === -1 && !clcObj.formclcValueExpression) {
        this.setState({
          formclcValue: inputValue
        });
      } else if (clcObj.completePattern.test(inputValue)) {
        let newVal = this.state.formclcValue;
        this.setState({
          formclcValue: (newVal += inputValue)
        });
      } else if (inputValue === "=") {
        this.clcBtnCalculate();
        return;
      }
      this.flipACButton(true);
    } else {
      this.flashLCD();
    }
  };
  handleKeyboardEvents = keyPress => {
    let key = keyPress.key;
    switch (key) {
      case "0":
        this.clcBtnPress(key);
        break;
      case "1":
        this.clcBtnPress(key);
        break;
      case "2":
        this.clcBtnPress(key);
        break;
      case "3":
        this.clcBtnPress(key);
        break;
      case "4":
        this.clcBtnPress(key);
        break;
      case "5":
        this.clcBtnPress(key);
        break;
      case "6":
        this.clcBtnPress(key);
        break;
      case "7":
        this.clcBtnPress(key);
        break;
      case "8":
        this.clcBtnPress(key);
        break;
      case "9":
        this.clcBtnPress(key);
        break;
      case "+":
        this.clcBtnPress(key);
        break;
      case "-":
        this.clcBtnPress(key);
        break;
      case "*":
        this.clcBtnPress(key);
        break;
      case "/":
        this.clcBtnPress(key);
        break;
      case "(":
        this.clcBtnPress(key);
        break;
      case ")":
        this.clcBtnPress(key);
        break;
      case ".":
        this.clcBtnPress(key);
        break;
      case "=":
        this.clcBtnPress(key);
        break;
      case "Enter":
        this.clcBtnPress("=");
        break;
      default:
        alert("tst case failed contact to administrator");
    }
  };

  // Return true if the next input matches something that makes sense
  validateInput = input => {
    let lastValue = this.state.formclcValue.substr(
      this.state.formclcValue.length - 1,
      1
    );
    this.editParenthesisFlag(input, true);
    if (!lastValue || "(/*+.".indexOf(lastValue) > -1) {
      if (")*/".indexOf(input) > -1) {
        this.editParenthesisFlag(input, false);
        return false;
      }
      if (lastValue === "." && ")(-+".indexOf(input) > -1) {
        this.editParenthesisFlag(input, false);
        return false;
      }
    }
    if (clcObj.numbersPattern.test(lastValue) && clcObj.parenthesisFlag) {
      if (")".indexOf(input) > -1) {
        this.editParenthesisFlag(input, false);
        return false;
      }
    }
    return true;
  };

  // For every open parenthesis, we must have a closed parenthesis
  // We use this for input validation before we clcBtnCalculate
  editParenthesisFlag = (input, add) => {
    if (add) {
      if ("(".indexOf(input) > -1) clcObj.parenthesisFlag += 1;
      if (")".indexOf(input) > -1) clcObj.parenthesisFlag -= 1;
    } else {
      if ("(".indexOf(input) > -1) clcObj.parenthesisFlag -= 1;
      if (")".indexOf(input) > -1) clcObj.parenthesisFlag += 1;
    }
  };

  // In case of anticipated input error: flash the lcd red
  flashLCD = () => {
    let currentformclcValue = this.state.formclcValue;
    this.setState({
      formclcValue: "Input Error"
    });
    this.formclcBg = "#a02626";
    setTimeout(() => {
      this.formclcBg = "#424242";
      this.setState({
        formclcValue: currentformclcValue
      });
    }, 500);
  };

  // If the LCD contains an expression -> clear the last entry (backspace)
  // If the LCD contains a result -> clear the entire value
  clcBtnClear = () => {
    if (clcObj.formclcValueExpression) {
      let valueToRemove = this.state.formclcValue.substring(
        this.state.formclcValue.length,
        this.state.formclcValue.length - 1
      );
      if ("()".indexOf(valueToRemove) > -1) {
        this.editParenthesisFlag(valueToRemove, false);
      }
      let sliceValue = this.state.formclcValue.slice(0, -1);
      this.setState({
        formclcValue: sliceValue
      });
      if (!this.state.formclcValue) this.flipACButton(false);
      else this.flipACButton(true);
    } else {
      this.setState({
        formclcValue: "",
        expressionResult: "="
      });

      clcObj.parenthesisFlag = 0;
      this.flipACButton(false);
    }
  };

  // Change the string value for the CE button
  // CE = Clear Entry (backspace)
  // AC = All Clear (remove entire value)
  flipACButton = input => {
    clcObj.formclcValueExpression = input;
    this.setState({
      clVal: clcObj.formclcValueExpression ? "CE" : "AC"
    });
  };

  // Helperfunction used by standardizeString()
  replaceBy = (target, find, replace) => {
    return target.split(find).join(replace);
  };

  // To round results such as:
  // 0.1 + 0.2 = 0.300000000000004 -> 0.3
  // 0.1 * 0.2 = 0.020000000000000004 -> 0.02
  roundValue = input => {
    const dotLocation = input.toString().indexOf(".");
    let flagDigit = false;

    if (dotLocation > -1 && input.length > 15) {
      const afterDotString = input.substring(dotLocation, input.length);
      for (let i = 0; i < afterDotString.length; i++) {
        if (parseInt(afterDotString[i]) > 0) flagDigit = true;
        if (afterDotString[i] === "0" && flagDigit) {
          return input.substring(0, dotLocation + i);
        }
      }
    }
    return input;
  };

  clcBtnCalculate = () => {
    let valueToEvaluate = this.state.formclcValue;
    let polishNotation = "";
    let solution = "";

    if (
      clcObj.completePattern.test(valueToEvaluate) &&
      !clcObj.parenthesisFlag
    ) {
      polishNotation = this.convertToPolishNotation(valueToEvaluate);
      solution = this.solvePolishNotation(polishNotation);

      this.setState({
        formclcValue: this.roundValue(solution),
        expressionResult: this.state.formclcValue + " ="
      });
    } else {
      this.setState({
        formclcValue: "Error",
        expressionResult: "Cannot resolve: " + this.state.formclcValue
      });
      clcObj.parenthesisFlag = 0;
    }
    this.flipACButton(false);
  };

  convertToPolishNotation = input => {
    let output = "";
    let operatorStack = [];
    const operators = {
      "/": { weight: 3 },
      "*": { weight: 3 },
      "+": { weight: 2 },
      "-": { weight: 2 }
    };

    input = this.standardizeString(input);
    input = input.replace(/\s+/g, "");
    input = input.split(/([\+\-\*\/\^\(\)])/); // eslint-disable-line
    input = this.cleanArray(input);

    for (let i = 0; i < input.length; i++) {
      let token = input[i];
      if ("(/*".indexOf(input[i - 1]) > -1 && token === "-") {
        token += input[i + 1];
        i += 1;
      }
      if (this.isNumeric(token)) {
        output += token + " ";
      } else if ("*/+-".indexOf(token) !== -1) {
        let r1 = token;
        let r2 = operatorStack[operatorStack.length - 1];
        while (
          "*/+-".indexOf(r2) !== -1 &&
          operators[r1].weight <= operators[r2].weight
        ) {
          output += operatorStack.pop() + " ";
          r2 = operatorStack[operatorStack.length - 1];
        }
        operatorStack.push(r1);
      } else if (token === "(") {
        operatorStack.push(token);
      } else if (token === ")") {
        while (operatorStack[operatorStack.length - 1] !== "(") {
          output += operatorStack.pop() + " ";
        }
        operatorStack.pop();
      }
    }
    while (operatorStack.length > 0) {
      output += operatorStack.pop() + " ";
    }
    return output;
  };

  solvePolishNotation = polish => {
    let results = [];
    polish = polish.split(" ");
    polish = this.cleanArray(polish);
    for (let i = 0; i < polish.length; i++) {
      if (this.isNumeric(polish[i])) {
        results.push(polish[i]);
      } else {
        let a = results.pop();
        let b = results.pop();
        if (polish[i] === "+") {
          results.push(parseFloat(a) + parseFloat(b));
        } else if (polish[i] === "-") {
          results.push(parseFloat(b) - parseFloat(a));
        } else if (polish[i] === "*") {
          results.push(parseFloat(a) * parseFloat(b));
        } else if (polish[i] === "/") {
          results.push(parseFloat(b) / parseFloat(a));
        }
      }
    }
    if (results.length > 1) {
      return "Error";
    } else {
      return results.pop().toString();
    }
  };

  // We turn the string into something our convertToPolishNotation() can read
  standardizeString = input => {
    while (input.charAt(0) === "+") input = input.substr(1);
    input = this.replaceBy(input, " ", "");
    input = this.replaceBy(input, "x", "*");
    input = this.replaceBy(input, "-(", "-1*(");
    input = this.replaceBy(input, ")(", ")*(");
    input = this.replaceBy(input, "--", "+");
    input = this.replaceBy(input, "+-", "-");
    input = this.replaceBy(input, "-+", "-");
    input = this.replaceBy(input, "++", "+");
    input = this.replaceBy(input, "(+", "(");
    for (let i = 0; i < 10; i++) {
      input = this.replaceBy(input, `${i}(`, `${i}*(`);
    }
    return input;
  };

  // Remove empty values from Array
  cleanArray = input => {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "") input.splice(i, 1);
    }
    return input;
  };

  // Return true if input is numeric
  isNumeric = input => {
    return !isNaN(parseFloat(input));
  };
  // ==== CLC Code here end
  formClcValFn = e => {
    console.log(e.target.value);
    let formclcValue = e.target.value;
    this.setState({
      formclcValue
    });
  };
  // clcBtnPress = e => {
  //   console.log("ClcBtnPress", e);
  // };
  // clcBtnClear = e => {
  //   console.log("clear btn ATC", e);
  // };
  // clcBtnCalculate = e => {
  //   console.log("=== btn ATC", e);
  // };

  render() {
    const buttons = [
      { symbol: "(", cols: 1, action: this.clcBtnPress },
      { symbol: ")", cols: 1, action: this.clcBtnPress },
      { symbol: this.state.clVal, cols: 2, action: this.clcBtnClear },
      { symbol: "7", cols: 1, action: this.clcBtnPress },
      { symbol: "8", cols: 1, action: this.clcBtnPress },
      { symbol: "9", cols: 1, action: this.clcBtnPress },
      { symbol: "/", cols: 1, action: this.clcBtnPress },
      { symbol: "4", cols: 1, action: this.clcBtnPress },
      { symbol: "5", cols: 1, action: this.clcBtnPress },
      { symbol: "6", cols: 1, action: this.clcBtnPress },
      { symbol: "*", cols: 1, action: this.clcBtnPress },
      { symbol: "1", cols: 1, action: this.clcBtnPress },
      { symbol: "2", cols: 1, action: this.clcBtnPress },
      { symbol: "3", cols: 1, action: this.clcBtnPress },
      { symbol: "-", cols: 1, action: this.clcBtnPress },
      { symbol: "0", cols: 1, action: this.clcBtnPress },
      { symbol: ".", cols: 1, action: this.clcBtnPress },
      { symbol: "=", cols: 1, action: this.clcBtnCalculate },
      { symbol: "+", cols: 1, action: this.clcBtnPress }
    ];
    return (
      <>
        <Container>
          <Card className="mT20">
            <Card.Header>Basic Calculation Calculator</Card.Header>
            <Card.Body>
              <Card.Title>
                <h1>This is only just basic calculator not expert.</h1>
              </Card.Title>

              <Row>
                <Col sm={6}>
                  <div className="clc-sec">
                    <div className="result">{this.state.expressionResult}</div>
                    <input
                      type="text"
                      className="text-res"
                      maxLength="256"
                      placeholder="0"
                      pattern="[0-9-+*/.()]"
                      value={this.state.formclcValue}
                      onChange={this.formClcValFn}
                    />
                    <div>
                      {buttons.map((item, index) => {
                        return <ButtonCom key={index} btnVal={item} />;
                      })}
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <h3>This is demo  calculator.</h3>

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default BasicClcIndexCom;
