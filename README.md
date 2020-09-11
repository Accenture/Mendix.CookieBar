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

## Props

| Prop | Type | Default value | Description |
| ---- | :--: | ------------- | ----------- |


| Message | expression | | Message you want to appear on cookie consent request. | Location | string, "top", "bottom" or
"none" | "bottom" | Required. Syntactic sugar to easily enable you to place the bar at the top or the bottom of the
browser window. Use "none" to disable. | Overlay | boolean | No | Required. Whether to show a page obscuring overlay or
not.  
| Use Cookies Policy Page | boolean | No | Required. Select if you want to add link to your policy page. | Policy button
action | action | Do nothing | Action Link to your cookies policy info page e.g. "p/cookies" | Policy button text |
string | See more | Text to appear to a link to policy page | Accept button text | string | Accept | Text to appear on
the accept button | Accept button Id | string | | Id to apply to the accept button | Enable decline button | boolean |
No | If enabled the decline button will be rendered | Decline button text | string | Decline | Text to appear on the
decline button | Decline button Id | string | | Id to apply to the decline button | Flip buttons | boolean | No |
Required. If enabled the accept and decline buttons will be flipped | Container classes | string | | CSS classes to
apply to the surrounding container | Accept button classes | string | | CSS classes to apply to the accept button |
Accept button classes | string | | CSS classes to apply to the accept button | Button wrapper classes | string | | CSS
classes to apply to the div wrapping the buttons | Decline button classes | string | | CSS classes to apply to the
decline button | Content classes | string | | CSS classes to apply to the content | Overlay classes | string | | CSS
classes to apply to the surrounding overlay | Policy button classes | string | | CSS classes to apply to the Policy
button classes | Disable styles | boolean | No | If enabled the component will have no default style | Hide on accept |
boolean | Yes | Required. If disabled the component will not hide it self after the accept button has been clicked. You
will need to hide yourself | Accept on scroll | boolean | No | Defines whether "accept" should be fired after the user
scrolls a certain distance (see Accept on scroll percentage) | Accept on scroll percentage | decimal | 25 | Required.
Percentage of the page height the user has to scroll to trigger the accept function if acceptOnScroll is enabled |
Cookie name | string | | Name of the cookie used to track whether the user has agreed | Cookie value | string | | Value
to be saved under the cookieName | Decline cookie value | string | | Value to be saved under the cookieName when
declined | Set decline cookie | boolean | Yes | Required. Whether to set a cookie when the user clicks "decline" | Debug
mode | boolean | No | Required. Bar will be drawn regardless of cookie for debugging purposes | Expires | integer | 365
| Required. Number of days before the cookie expires | Same site | string | | Cookies sameSite attribute value | Cookie
security | boolean | Yes | Cookie security level. Defaults to true unless running on http
