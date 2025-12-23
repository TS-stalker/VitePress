## 1. Overview

Variable list controls are used to centrally display the names and current values of multiple variables, supporting real-time data updates and numerical formatting, providing an intuitive data monitoring interface, making it convenient for users to view and manage multiple related variables simultaneously.

![Image Description](../../images/控件照片/变量列表/1.png)

## 2. Usage Scenarios

Variable list controls are used in the following scenarios:

### 1. Parameter Management Scenarios

- When centralized viewing and comparison of multiple configuration parameters is needed
- System configuration parameter lists, device setting parameter groups, process control parameter sets
- Quick checking and adjustment reference for batch parameters

## 3. Quick Start

1. Drag the variable list control to the canvas and adjust position and size
2. Click the bind button in "Data" to select variables that need to be monitored
3. Set the number of decimal places to display for numerical variables
4. Configure display options such as header, grid lines, trend popup in "Display"
5. Set "Border" color and thickness to define control appearance
6. Configure the style, color, and interactive effects of "Header" and "Body"
7. Set zebra striping, selected row background, etc. to enhance readability

**Example:**

### 1. Parameter Management Scenario:

1.1 Parameter Management Scenario Example

This example is a device parameter setting list. Display all configurable parameters of the device and their current values, such as "DC Column Header Cabinet Power (kW)", "AC Column Header Cabinet Power (kW)", etc., making it convenient for operators to quickly check and adjust. As shown in Figure 1-1.

![Image Description](../../images/控件照片/变量列表/2.gif)

Figure 1-1

1.2 Actual Configuration Tutorial:

1. Drag the variable list control to the canvas and adjust position and size
2. You can customize table data items and body in the table data in Data, and bind variables to data items
3. You can set whether to display the header and whether to enable the trend popup in Display
4. You can set the row height, background, font, etc. of the header and body. After all settings are complete, save and run

## 4. Property Details

| Name                                | Description                                                                                                                                                 |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name                                | The name of this control.                                                                                                                                       |
| X                                   | The distance from the left side of the control to the left side of the canvas, in px.                                                                                                                   |
| Y                                   | The distance from the top of the control to the top of the canvas, in px.                                                                                                                   |
| W                                   | The width of the control, in px.                                                                                                                                 |
| H                                   | The height of the control, in px.                                                                                                                                 |
| ![Image Description](../../images/旋转角度.png) | The rotation angle of the control                                                                                                                                       |
| ![Image Description](../../images/透明度.png)   | The opacity of the control                                                                                                                                         |
| Data                                | Click the bind button to bind data to the control. Double-click variables in the variable selection window to bind. After binding variables, if the data type of the bound variable is numerical, you can click the settings button to set the number of decimal places displayed for that variable. |
| Display                             | Set the header, row grid, column grid, trend popup, time range, sampling method, etc. of this control.                                                                                     |
| Border                              | Set border color and border thickness.                                                                                                                               |
| Header                              | Set the background color, font type, font size, bold, italic, font color of the header.                                                                                         |
| Body                                | Set the row height, background color, font type, font size, bold, italic, font color, selected font color, hover font color, zebra striping, selected row background, hover row background of the body.                       |
| Permission                          | Set the permissions of the control, control display/hide or enable/disable                                                                                                                |
