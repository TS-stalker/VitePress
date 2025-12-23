## 1. Overview

Iframe controls are used to embed and display external website web content in the current screen, achieving seamless integration of multi-system integration and third-party applications, supporting dynamic parameter concatenation and custom style settings.

![Image Description](../../images/控件照片/内嵌网页/1.png)

## 2. Usage Scenarios

Iframe controls are used in the following scenarios:

### 1. System Integration Scenarios

- When third-party systems or external websites need to be integrated into the current application
- Direct embedding and use of external services or tools
- When real-time data dashboards or monitoring video screens need to be displayed

## 3. Quick Start

1. Drag the iframe control to the canvas and adjust position and size
2. Enter the URL address of the webpage to be embedded in the "Address" property, which can be bound for dynamic updates.
3. Set URL parameters that need to be concatenated in "Parameters" (optional)
4. Configure border styles (color, thickness, corner radius) to define display effects
5. Set permissions to control webpage access and display conditions

**Example:**

### 1. System Integration Scenario:

1.1 System Integration Scenario Example

This example is directly embedding a webpage in the screen. You can embed Baidu webpage to provide users with network query functionality. As shown in Figure 1-1.

![Image Description](../../images/控件照片/内嵌网页/2.gif)

Figure 1-1

1.2 Actual Configuration Tutorial:

1. Drag the iframe control to the canvas and adjust position and size
2. Enter the webpage IP address in Address or dynamically change the IP address through binding
3. You can add parameters, which will be automatically added after the address by default, forming a new IP address

## 4. Property Details

| Name     | Description                                                                                                                                                                                               |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name     | The name of this control.                                                                                                                                                                                 |
| X        | The distance from the left side of the control to the left side of the canvas, in px.                                                                                                                     |
| Y        | The distance from the top of the control to the top of the canvas, in px.                                                                                                                               |
| W        | The width of the control, in px.                                                                                                                                                                           |
| H        | The height of the control, in px.                                                                                                                                                                         |
| Angle    | The rotation angle of the control                                                                                                                                                                          |
| Corner Radius | The corner radius of the button's four corners.                                                                                                                                                            |
| Border   | Set the border of the embedded webpage, supporting border color and border thickness settings.                                                                                                             |
| Iframe   | Address<br />Enter the webpage IP address to display the corresponding webpage<br />![Image Description](../../images/控件照片/内嵌网页/3.png)<br />Parameters<br />You can customize the parameters after the IP address in the address bar, which will be automatically concatenated after the IP address in the address bar to form a new IP address |
| Permission | Set the permissions of the control, control display/hide or enable/disable                                                                                                                                                              |
