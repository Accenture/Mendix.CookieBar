## Cookie Bar widget

Mendix widget that will display customizable cookie consent banner in your mendix application.

## Description

Settings of this widget will allow you to show/hide accept and decline button and redirect to specified location
containing your Cookie Policy. You can use this widget for you hybrid or web applictaion. This is a pluggeable widget
based on NPM module (https://www.npmjs.com/package/react-cookie-consent).

## Usage

To use this widget simply place it on your layout and configure it correctly.

The configuration is divided into 4 sections: General Buttons Advanced Styling Advanced Settings

The general section has the most important settings including banner content.
Buttons section allows to manage content of "Accept" and "Decline" buttons.
Advanced styling section allows to disable default styling and/or apply your own classes to contents of the bar.
Advanced settings contain number of useful customization options.

## Properties

| Prop | Type | Default value | Description |
| ---- | :--: | ------------- | ----------- |
| Message expression | expression | | Required. Message you want to appear on cookie consent request. This message can be in HTML format or as a plain text. | 
| Location | enumeration, "top", "bottom" or "none" | "bottom" | Required. Syntactic sugar to easily enable you to place the bar at the top or the bottom of the browser window. Use "none" to disable. | 
| Overlay | boolean | false | Required. Whether to show a page obscuring overlay or not. | 
| Use cookies policy page | boolean | false | Required. Select if you want to add link to your policy page. | 
| Policy button action | action | Do nothing | Action that redirects to cookies policy. |
| Policy button text | string | See more | Text to appear on a policy redirection button. | 
| Accept button text | string | Accept | Text to appear on the accept button. | 
| Accept button Id | string | | Id to apply to the accept button. | 
| On Accept | action | | Action to be triggered on accept button click. |
| Enable decline button | boolean | false | If enabled the decline button will be rendered. |
| Decline button text | string | Decline | Text to appear on the decline button. |
| Decline button Id | string | | Id to apply to the decline button. |
| On Decline | action | | Action to be triggered on decline button click. |
| Flip buttons | boolean | false | Required. If enabled the accept and decline buttons will be flipped. |
| Hide on accept | boolean | true | Required. If disabled the component will not hide it self after the accept button has been clicked. You will need to hide it yourself. |
| Accept on scroll | boolean | false | Defines whether "accept" should be fired after the user scrolls a certain distance (see Accept on scroll percentage). |
| Accept on scroll percentage | decimal | 25 | Required. Percentage of the page height the user has to scroll to trigger the accept function if acceptOnScroll is enabled. |
| Cookie name | string | | Name of the cookie used to track whether the user has agreed. | 
| Cookie value | string | | Value to be saved under the cookieName. | 
| Decline cookie value | string | | Value to be saved under the cookieName when declined. |
| Set decline cookie | boolean | true | Required. Whether to set a cookie when the user clicks "decline". | 
| Debug mode | boolean | false | Required. Bar will be drawn regardless of cookie for debugging purposes. | 
| Expires | integer | 365 | Required. Number of days before the cookie expires. |
| Same site | enumeration, "strict", "lax" or "none" | "lax" | Cookies sameSite attribute value. Use "none" only with Cookie security set to true. |
| Cookie security | boolean | true | Cookie security attribute. Use true only when running on https. |

## Known issues

The cookie consent will not be stored in hybrid mobile applications. This feature is considered as a future improvement.

## Planned improvements

- [Hybrid mobile] Adding a possibility to select local storage as a directory to store the cookie. (Consent cannot be stored in a cookie when using hybrid mobile build. Although cookies consent is not necessary in most cases in mobile applications, it would be good to have a possibility to store it anyway.)
