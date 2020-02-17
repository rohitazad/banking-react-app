import React from "react";

import {
    FacebookShareButton,
    FacebookShareCount,
    FacebookIcon,

    TwitterIcon,
    TwitterShareButton,

    TelegramShareButton,
    TelegramIcon,

    WhatsappIcon,
    WhatsappShareButton,

    LinkedinShareButton,
    LinkedinIcon,

    PinterestShareButton,
    PinterestIcon,
    PinterestShareCount
} from "react-share";

// https://www.npmjs.com/package/react-share


function ShareCommonCom() {
    const shareUrl = 'https://rohitazad.github.io/banking-react-app/#/';

    return <>

        <ul className="allPageShareUrl">
            <li>
                <span>
                    <FacebookShareButton url={shareUrl}>
                        <FacebookIcon size={42} round={true} />
                    </FacebookShareButton>
                </span>
                <span>
                    <FacebookShareCount url={shareUrl} />
                </span>
            </li>
            <li>
                <span>
                    <TwitterShareButton url={shareUrl}>
                        <TwitterIcon size={42} round={true} />
                    </TwitterShareButton>
                </span>
            </li>
            <li>
                <span>
                    <TelegramShareButton url={shareUrl}>
                        <TelegramIcon size={42} round={true} />
                    </TelegramShareButton>
                </span>
            </li>
            <li>
                <span>
                    <WhatsappShareButton url={shareUrl}>
                        <WhatsappIcon size={42} round={true} />
                    </WhatsappShareButton>
                </span>
            </li>
            <li>
                <span>
                    <LinkedinShareButton url={shareUrl}>
                        <LinkedinIcon size={42} round={true} />
                    </LinkedinShareButton>
                </span>
            </li>
            <li>
                <span>
                    <PinterestShareButton url={shareUrl}>
                        <PinterestIcon size={42} round={true} />
                    </PinterestShareButton>
                </span>
                <span>
                    <PinterestShareCount url={shareUrl} />
                </span>
            </li>
        </ul>
        {/* <ul className="shareItem">
            <li className="share-text">Share Us</li>
            <li>
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={42} round={true} />
                </FacebookShareButton>
                <FacebookShareCount url={shareUrl}>
                    {shareCount => (
                        <span className="myShareCountWrapper">{shareCount}</span>
                    )}
                </FacebookShareCount>
            </li>
            <li>
                <TwitterShareButton url={shareUrl}>
                    <TwitterIcon size={42} round={true} />
                </TwitterShareButton>
            </li>
            <li>
                <GooglePlusShareButton url={shareUrl}>
                    <GooglePlusIcon size={42} round={true} />
                </GooglePlusShareButton>
                <GooglePlusShareCount url={shareUrl}>
                    {shareCount => (
                        <span className="myShareCountWrapper">{shareCount}</span>
                    )}
                </GooglePlusShareCount>
            </li>
            <li>
                <LinkedinShareButton url={shareUrl}>
                    <LinkedinIcon size={42} round={true} />
                </LinkedinShareButton>
                <LinkedinShareCount url={shareUrl}>
                    {shareCount => (
                        <span className="myShareCountWrapper">{shareCount}</span>
                    )}
                </LinkedinShareCount>
            </li>
            <li>
                <WhatsappShareButton url={shareUrl}>
                    <WhatsappIcon size={42} round={true} />
                </WhatsappShareButton>
            </li>
        </ul> */}
    </>
}

export default ShareCommonCom;