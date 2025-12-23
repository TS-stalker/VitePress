## 1. Overview

Digital input box controls are used to accurately display and input numerical data, supporting numerical range limits, decimal precision control, and safety boundary checks to ensure the accuracy and validity of numerical input.

![Image Description](../../images/控件照片/数字输入框/1.png)

## 2. Usage Scenarios

Digital input box controls are used in the following scenarios:

### 1. Precise Numerical Input Scenarios

- Bind variables to the input box to display values from other controls
- Bind device variables or internal variables to this input box to display their values

## 3. Quick Start

1. Drag the digital input box control to the canvas and adjust position and size
2. Set the "Value" property to define the default display value
3. Configure "Decimal Places" to determine numerical display precision
4. Enable "Boundary Value" and set minimum and maximum value ranges
5. Configure "Out-of-Range Prompt" to define out-of-bounds warning messages
6. Adjust style properties (fill color, border, font, etc.)
7. Set "Action" to define interactive behavior when values change

**Example:**

Numerical Input Scenario:

This example simulates a temperature control system. Set the boundary value range to 0-100℃. Users can only input temperature values within this range. When the input value exceeds the range, the system displays an out-of-range prompt and refuses to accept the input. As shown in Figure 1-1.

![Image Description](../../images/控件照片/数字输入框/2.gif)

Figure 1-1

This example mainly simulates binding variables to digital input boxes for data display. As shown in Figure 1-2.

![Image Description](../../images/控件照片/数字输入框/3.gif)

Figure 1-2

## 4. Property Details

| Name     | Description                                                                                                                                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name     | The name of this control.                                                                                                                                                                                                                       |
| X        | The distance from the left side of the control to the left side of the canvas, in px.                                                                                                                                                                                                   |
| Y        | The distance from the top of the control to the top of the canvas, in px.                                                                                                                                                                                                   |
| W        | The width of the control, in px.                                                                                                                                                                                                                 |
| H        | The height of the control, in px.                                                                                                                                                                                                                 |
| Angle    | The rotation angle of the control                                                                                                                                                                                                                       |
| Opacity  | The opacity of the control                                                                                                                                                                                                                         |
| Value    | The value displayed in the digital input box.                                                                                                                                                                                                               |
| Decimal Places | Used to set the number of decimal places for values displayed and entered in the digital input box. Insufficient digits will be automatically padded with 0.                                                                                                                                                                      |
| Boundary Value | Set whether to enable boundaries. When enabled, the control can only input values between the maximum and minimum values.<br />Minimum Value<br />Set the minimum value allowed to be entered on the control<br />Maximum Value<br />Set the maximum value allowed to be entered on the control                                                                         |
| Out-of-Range Prompt | Set whether to enable out-of-range prompts. When enabled, you can set the out-of-range prompt content.<br />![Image Description](../../images/控件照片/数字输入框/4.png)<br />Error Prompt Effect:<br />![Image Description](../../images/控件照片/数字输入框/5.png)<br />Note: Out-of-range prompts only take effect when boundary values are enabled. |
| Fill     | The background color of the digital input box.<br />![Image Description](../../images/控件照片/数字输入框/6.png)                                                                                                                                                           |
| Border Color | The border color of the digital input box.                                                                                                                                                                                                               |
| Border Thickness | The border thickness of the digital input box.                                                                                                                                                                                                               |
| Font     | Set the font of the control. Includes font type, font size, font color, bold, italic, and horizontal alignment.                                                                                                                                                     |
| Permission | Set the permissions of the control, control display/hide or enable/disable                                                                                                                                                                                                |
