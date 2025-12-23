## 1. Overview

Text label controls are used to display text content. They support both static text display and dynamic data sources through property binding, enabling real-time content updates and dynamic display.

![Image Description](../../images/控件照片/文本标签/1.png)

## 2. Usage Scenarios

Text label controls are used in the following scenarios:

### 1. Static Information Display Scenarios

- When fixed titles, descriptions, or prompt information need to be displayed
- Fixed text content such as column names and data item identifiers in the interface
- Clicking the text label text to implement screen jumps or popup display switching

### 2. Dynamic Data Display Scenarios

- When real-time display of changing information such as device status and system parameters is needed

## 3. Quick Start

1. Drag the text label control to the canvas and adjust position and size
2. Enter static content or bind dynamic variables in the "Text" property
3. Set the "Overflow" property to define how to handle text overflow
4. Configure style properties (fill color, border, font alignment, etc.)
5. Set "Action" to define text interactive behavior (such as click events)

**Example:**

### 1. Static Information Display Scenario:

1.1 Static Information Display Scenario Example

This example simulates the panel title of a liquid cooling interface. Use a text label to display "Liquid Cooling Control System" as the page title, set appropriate font size and color to form a clear visual hierarchy, and clicking the text can pop up a dialog box. As shown in Figure 1-1.

![Image Description](../../images/控件照片/文本标签/2.gif)

Figure 1-1

1.2 Actual Configuration Tutorial:

1. Drag the text label control to the canvas and adjust position and size
2. Enter the fixed display information you want to display in Text
3. In the Panel Action module, select Click in Mouse Events
4. Select Navigation as the operation type, you can choose to jump to a screen or jump to a popup, enter the title name, and click Save

### 2. Dynamic Data Display Scenario

2.1 Dynamic Data Display Example

This example mainly simulates binding variables to text display values for real-time data display. As shown in Figure 1-2.

![Image Description](../../images/控件照片/文本标签/3.gif)

Figure 1-2

2.2 Actual Configuration Tutorial:

1. Click the binding icon after Text
2. You can select variables to bind, or select properties of other controls to bind. After selection, click Save

## 4. Property Details

| Name     | Description                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Name     | The name of this control.                                                                                     |
| X        | The distance from the left side of the control to the left side of the canvas, in px.                       |
| Y        | The distance from the top of the control to the top of the canvas, in px.                                     |
| W        | The width of the control, in px.                                                                              |
| H        | The height of the control, in px.                                                                            |
| Angle    | The rotation angle of the control                                                                             |
| Opacity  | The opacity of the control                                                                                    |
| Text     | The content displayed by the control.                                                                         |
| Overflow | How to handle text overflow: Hide, Wrap, Ellipsis (3 options available)                                       |
| Fill     | The background color of the control.<br />![Image Description](../../images/控件照片/文本标签/4.png)        |
| Border   | The border color of the control.<br />![Image Description](../../images/控件照片/文本标签/5.png)              |
| Border Thickness | The border thickness of the control.                                                                          |
| Font     | Set the font of the text content. Includes font type, font size, font color, bold, italic, underline, horizontal alignment, vertical alignment. |
| Permission | Set the permissions of the control, control display/hide or enable/disable                                  |
