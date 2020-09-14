import CookieConsent from "react-cookie-consent";
import Parser from "html-react-parser";
import { Component, createElement } from "react";

import "./ui/CookieBar.css";

export default class CookieBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };
    }

    componentDidMount() {
        const interval = setInterval(() => {
            if (this.props.caption.status === "available") {
                this.setState({ message: this.props.caption.value });
                clearInterval(interval);
            }
        }, 50);
    }

    fixEmptyString(value) {
        if (value === "") return undefined;
        else return value;
    }

    hideConditionally() {
        return this.props.useCookiesPolicy ? {} : { display: "none" };
    }

    render() {
        return (
            <div id="cookiebar-container" style={this.props.style} className={this.props.class}>
                <CookieConsent
                    location={this.fixEmptyString(this.props.location)}
                    disableStyles={this.props.disableStyles}
                    hideOnAccept={this.props.hideOnAccept}
                    buttonText={this.fixEmptyString(this.props.buttonText)}
                    declineButtonText={this.fixEmptyString(this.props.declineButtonText)}
                    cookieName={this.fixEmptyString(this.props.cookieName)}
                    cookieValue={this.fixEmptyString(this.props.cookieValue)}
                    declineCookieValue={this.fixEmptyString(this.props.declineCookieValue)}
                    setDeclineCookie={this.props.setDeclineCookie}
                    debug={this.props.debug}
                    expires={this.props.expires}
                    overlay={this.props.overlay}
                    containerClasses={this.fixEmptyString(this.props.containerClasses)}
                    buttonClasses={this.fixEmptyString(this.props.buttonClasses)}
                    buttonWrapperClasses={this.fixEmptyString(this.props.buttonWrapperClasses)}
                    declineButtonClasses={this.fixEmptyString(this.props.declineButtonClasses)}
                    buttonId={this.fixEmptyString(this.props.buttonId)}
                    declineButtonId={this.fixEmptyString(this.props.declineButtonId)}
                    contentClasses={this.fixEmptyString(this.props.contentClasses)}
                    overlayClasses={this.fixEmptyString(this.props.overlayClasses)}
                    disableButtonStyles={this.props.disableButtonStyles}
                    enableDeclineButton={this.props.enableDeclineButton}
                    flipButtons={this.props.flipButtons}
                    sameSite={this.props.sameSite}
                    cookieSecurity={this.props.cookieSecurity}
                >
                    {Parser(this.state.message)}
                    <button
                        className={this.props.policyClasses}
                        style={this.hideConditionally()}
                        onClick={this.props.link !== undefined ? this.props.link.execute : undefined}
                    >
                        {this.props.linkText}
                    </button>
                </CookieConsent>
            </div>
        );
    }
}
