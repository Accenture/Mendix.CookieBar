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

    render() {
        const location = this.props.location === "top" ? { top: 0 + "px" } : { bottom: 0 + "px" };
        return (
            <div className={"cookiebar-widget " + this.props.class} style={Object.assign(location, this.props.style)}>
                <CookieConsent
                    //General
                    location={"none"}
                    overlay={this.props.overlay}
                    //Buttons
                    buttonId={this.fixEmptyString(this.props.buttonId)}
                    buttonText={this.fixEmptyString(this.props.buttonText)}
                    onAccept={this.props.onAccept !== undefined ? this.props.onAccept.execute : undefined}
                    declineButtonId={this.fixEmptyString(this.props.declineButtonId)}
                    declineButtonText={this.fixEmptyString(this.props.declineButtonText)}
                    onDecline={this.props.onDecline !== undefined ? this.props.onDecline.execute : undefined}
                    enableDeclineButton={this.props.enableDeclineButton}
                    flipButtons={this.props.flipButtons}
                    //Classes
                    //style={this.props.style}
                    containerClasses="cookiebar-wrapper"
                    buttonClasses="btn btn-primary btn-accept"
                    declineButtonClasses="btn btn-default btn-decline"
                    buttonWrapperClasses="btn-wrapper"
                    contentClasses="cookiebar-content"
                    overlayClasses="cookiebar-overlay"
                    disableStyles={true}
                    disableButtonStyles={true}
                    //Settings
                    hideOnAccept={this.props.hideOnAccept}
                    acceptOnScroll={this.props.acceptOnScroll}
                    acceptOnScrollPercentage={this.props.acceptOnScrollPercentage}
                    cookieName={this.fixEmptyString(this.props.cookieName)}
                    cookieValue={this.fixEmptyString(this.props.cookieValue)}
                    declineCookieValue={this.fixEmptyString(this.props.declineCookieValue)}
                    setDeclineCookie={this.props.setDeclineCookie}
                    debug={this.props.debug}
                    expires={this.props.expires}
                    sameSite={this.props.sameSite}
                    cookieSecurity={this.props.cookieSecurity}
                >
                    {Parser(this.state.message)}
                    {this.props.useCookiesPolicy ? (
                        <button
                            className="btn-link mx-link btn-policy"
                            onClick={
                                this.props.onPolicyClick !== undefined ? this.props.onPolicyClick.execute : undefined
                            }
                        >
                            {this.props.policyLinkText}
                        </button>
                    ) : (
                        ""
                    )}
                </CookieConsent>
            </div>
        );
    }
}
