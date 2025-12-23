## 1. Overview

Checkbox controls are used to represent the switching selection of two states. Users switch the state of corresponding functions by checking or unchecking, supporting independent selection of single or multiple options.

![Image Description](../../images/控件照片/复选框/1.png)

## 2. Usage Scenarios

Checkbox controls are used in the following scenarios:

### 1. Multiple Selection Operation Scenarios

- When users need to enable or disable an independent function
- When users need to independently select any number of items from multiple options
- Multi-condition combination selection in data filtering

## 3. Quick Start

1. Drag the checkbox control to the canvas and adjust position and size
2. Set the description text displayed by the control in the text property
3. Configure the "Selected" property to set the default selected state
4. Adjust style properties such as fill color and border color
5. Set font style and alignment to optimize display effects
6. Configure "Action" to define interactive behavior when state changes

**Example:**

### 1. Multiple Selection Operation Scenario:

1.1 Multiple Selection Operation Scenario Example

This example is a data export option. Set multiple checkboxes for users to select the data fields that need to be exported, such as "Export Basic Information", "Export Operation Log", "Export Statistical Report", etc., to achieve flexible export content customization. As shown in Figure 1-1.

![Image Description](../../images/控件照片/复选框/2.gif)

Figure 1-1

1.2 Actual Configuration Tutorial:

1. Drag the checkbox control to the canvas and adjust position and size
2. You can set the text information filled in the checkbox
3. You can bind the selection property to change the values of other variables (optional), then save and run

## 4. Property Details

| Name   | Description                                                                                                                                         |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name   | The name of this control.                                                                                                                           |
| X      | The distance from the left side of the control to the left side of the canvas, in px.                                                               |
| Y      | The distance from the top of the control to the top of the canvas, in px.                                                                           |
| W      | The width of the control, in px.                                                                                                                   |
| H      | The height of the control, in px.                                                                                                                  |
| Angle  | The rotation angle of the control                                                                                                                   |
| Opacity | The opacity of the control                                                                                                                          |
| Selected | The selected state of the control.                                                                                                                 |
| Fill   | The fill color of the control.<br />![Image Description](../../images/控件照片/复选框/3.png)<br />The text content displayed by the control.<br />![Image Description](../../images/控件照片/复选框/4.png) |
| Border Color | The border color of the control.<br />![Image Description](../../images/控件照片/复选框/5.png)                                                      |
| Font   | Set the font of the text content. Includes font type, font size, font color, bold, italic, underline, horizontal alignment, vertical alignment.      |
| Permission | Set the permissions of the control, control display/hide or enable/disable                                                                        |
