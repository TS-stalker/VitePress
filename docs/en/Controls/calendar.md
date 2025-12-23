## 1. Overview

Calendar controls are used to provide intuitive date selection functionality, supporting multiple date formatting and display methods, making it convenient for users to quickly set and select date and time information.

![Image Description](../../images/控件照片/日历/1.png)

## 2. Usage Scenarios

Calendar controls are used in the following scenarios:

### 1. Date Selection Scenarios

- When users need to select a specific date or date range
- Time condition settings in data filtering
- Time parameter settings for report generation

## 3. Quick Start

1. Drag the calendar control to the canvas and adjust position and size
2. Set the "Picker Type" (Date or Datetime)
3. Configure the "Date" property to set the default display date
4. Select or customize the date display format in "Format"
5. Adjust style properties (background color, border, font, etc.)
6. Set "Action" to define interactive behavior after date selection

**Example:**

Date Selection Scenario:

This example simulates users selecting time filtering in data filtering. Users click the calendar control to select start time and end time, and the system filters corresponding data based on time, as shown in Figure 1-1.

![Image Description](../../images/控件照片/日历/2.gif)

Figure 1-1

## 4. Property Details

|            |                                                                                                                                                                                                                                      |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name       | Description                                                                                                                                                                                                                                 |
| Name       | The name of this control.                                                                                                                                                                                                                       |
| X          | The distance from the left side of the control to the left side of the canvas, in px.                                                                                                                                                                                                   |
| Y          | The distance from the top of the control to the top of the canvas, in px.                                                                                                                                                                                                   |
| W          | The width of the control, in px.                                                                                                                                                                                                                 |
| H          | The height of the control, in px.                                                                                                                                                                                                                 |
| Angle      | The rotation angle of the control                                                                                                                                                                                                                       |
| Opacity    | The opacity of the control                                                                                                                                                                                                                         |
| Corner Radius | The corner radius of the button's four corners.                                                                                                                                                                                                               |
| Date       | Set the default date displayed on the control.                                                                                                                                                                                                           |
| Picker Type | Set the content format displayed by the calendar, including Datetime and Date.<br />When Datetime is selected, the control can select year, month, day, hour, minute, and second;<br />![Image Description](../../images/控件照片/日历/3.png)<br />When Date is selected, only year, month, and day can be selected.<br />![Image Description](../../images/控件照片/日历/4.png) |
| Format     | Format the date. You can select preset formats from the dropdown or enter your own.<br />Click to pop up the format window, and double-click to select the format in the popup.                                                                                                                                 |
| Background | The background color of the control.<br />![Image Description](../../images/控件照片/日历/5.png)                                                                                                                                                                       |
| Picker Background | The background color of the calendar window that pops up from the control.<br />![Image Description](../../images/控件照片/日历/6.png)                                                                                                                                                           |
| Border Color | The border color of the control.                                                                                                                                                                                                                     |
| Border Thickness | The border thickness of the control.                                                                                                                                                                                                                     |
| Font       | Set the font of the control. Includes font type, font size, font color, bold, italic.                                                                                                                                                                       |
| Permission | Set the permissions of the control, control display/hide or enable/disable                                                                                                                                                                                                |
