export const Commafy = num => {
  var str = num.toString().split(".");
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }
  return str.join(".");
};

var a_InWord = [
  "",
  "one ",
  "two ",
  "three ",
  "four ",
  "five ",
  "six ",
  "seven ",
  "eight ",
  "nine ",
  "ten ",
  "eleven ",
  "twelve ",
  "thirteen ",
  "fourteen ",
  "fifteen ",
  "sixteen ",
  "seventeen ",
  "eighteen ",
  "nineteen "
];
var b_InWord = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];

export const InWord = num => {
  if ((num = num.toString()).length > 9) return "overflow";
  let n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  let str = "";
  str +=
    n[1] !== 0
      ? (a_InWord[Number(n[1])] ||
          b_InWord[n[1][0]] + " " + a_InWord[n[1][1]]) + "crore "
      : "";
  str +=
    n[2] !== 0
      ? (a_InWord[Number(n[2])] ||
          b_InWord[n[2][0]] + " " + a_InWord[n[2][1]]) + "lakh "
      : "";
  str +=
    n[3] !== 0
      ? (a_InWord[Number(n[3])] ||
          b_InWord[n[3][0]] + " " + a_InWord[n[3][1]]) + "thousand "
      : "";
  str +=
    n[4] !== 0
      ? (a_InWord[Number(n[4])] ||
          b_InWord[n[4][0]] + " " + a_InWord[n[4][1]]) + "hundred "
      : "";
  str +=
    n[5] !== 0
      ? (str !== "" ? "and " : "") +
        (a_InWord[Number(n[5])] ||
          b_InWord[n[5][0]] + " " + a_InWord[n[5][1]]) +
        "only "
      : "";
  return str;
};
