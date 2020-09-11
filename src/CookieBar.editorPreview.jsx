import { Component, createElement } from "react";

export class preview extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText.value} />;
    }
}

export function getPreviewCss() {
    return require("./ui/CookieBar.css");
}
