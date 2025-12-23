## 1. Overview

Event list controls are used to dynamically display event information that occurs in the system, supporting real-time refresh, data export, column customization, and data filtering. They clearly present event details in table form, making it convenient for users to keep track of system dynamics in a timely manner.

![Image Description](../../images/控件照片/事件列表/1.png)

## 2. Usage Scenarios

Real-time event controls are used in the following scenarios:

### 1. System Monitoring Scenarios

- When real-time tracking of dynamic events such as system operations and status changes is needed
- Real-time monitoring of user operation logs, device status changes, data modification records, etc.
- Event tracking in multi-user collaborative work environments

## 3. Quick Start

1. Drag the event list control to the canvas and adjust position and size
2. Set "Auto Refresh" to define the data update interval
3. Configure the event columns that need to be displayed in "Column Settings"
4. Configure border styles and table line thickness and color
5. Set the style and font of "Header" and "Body"
6. Set display colors for different event types in "Event Color"
7. Set the maximum number of events to display in "Others" (maximum 2000)

**Example:**

### 1. System Monitoring Scenario:

1.1 System Monitoring Scenario Example

This example is production line operation event monitoring. Set the refresh frequency to 2 seconds. Display columns include "Date", "Operator", "Machine Name", "Machine IP", "Event Type", "Result". Different colors are used to distinguish normal operations and abnormal events, monitoring production line operations in real-time. As shown in Figure 1-1.

![Image Description](../../images/控件照片/事件列表/2.gif)

Figure 1-1

1.2 Actual Configuration Tutorial:

1. Drag the real-time event control to the canvas and adjust position and size
2. You can set the list data items of real-time events in Column Settings
3. You can set different colors for different events
4. You can set the event refresh frequency. After all settings are complete, save and run

## 4. Property Details

| Name                              | Description                                                         |
| --------------------------------- | ------------------------------------------------------------------- |
| Name                              | The name of this control.                                           |
| X                                 | The distance from the left side of the control to the left side of the canvas, in px. |
| Y                                 | The distance from the top of the control to the top of the canvas, in px. |
| W                                 | The width of the control, in px.                                   |
| H                                 | The height of the control, in px.                                   |
| ![Image Description](../../images/透明度.png) | The opacity of the control                                         |
| Refresh Frequency                 | Set the refresh frequency                                           |
| Border Color                      | Set the color of the outer border and table lines of the control.   |
| Border Thickness                 | Set the thickness of the outer border and table lines of the control. |
| Header                           | Set the background color, font type, font size, bold, italic, font color of the header. |
| Body                             | Set the background color, font type, font size, bold, italic, font color of the body. |
| Color                            | Set the color displayed on the control for each event type.         |
| Button Style                     | Set the style of buttons used on the control. Click the button style setting button to set. |
| Filter Panel                     | Set header background color, body background color                 |
| Column Settings                  | Set the column names that need to be displayed on the control.     |
| Others                           | Set the maximum number of alarms to display                         |
| Permission                       | Set the permissions of the control, control display/hide or enable/disable |
