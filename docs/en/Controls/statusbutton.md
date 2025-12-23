## 1. Overview

Status button controls are used to dynamically display corresponding button styles based on data status, supporting multi-status configuration and visual feedback. They achieve intelligent interface display through the mapping relationship between status values and button styles.

![Image Description](../../images/控件照片/状态按钮/1.png)

## 2. Usage Scenarios

Status button controls are used in the following scenarios:

### 1. Multi-status Control Scenarios

- When users must select one from multiple mutually exclusive options
- Configuration item selection that requires uniqueness
- Single selection filter settings for filtering conditions

## 3. Quick Start

1. Drag the status button control to the canvas and adjust position and size
2. Add different status data in "Status" and configure corresponding styles, and set styles for selected and unselected states for each status
3. Set "Current Value" to define the initial state of the control
4. Select "Display" method (single button or display all status buttons)
5. Configure "Direction" and "Spacing" to adjust button layout
6. Set overall style properties such as border and corner radius
7. Configure corresponding interactive actions for each status button

**Example:**

### 1. Multi-status Control Scenario:

1.1 Multi-status Control Scenario Example

**This example simulates device signal light control.** Create "Red Light" and "Green Light" two states through status buttons. When clicking different buttons, the signal light display area will switch to display the corresponding light status and color, achieving intuitive status control and feedback. As shown in Figure 1-1.

![Image Description](../../images/控件照片/状态按钮/2.gif)

Figure 1-1

1.2 Actual Configuration Tutorial:

1. **Drag the status button control to the canvas and adjust position and size.**
2. **Set Initial Status**: Set the default value in the "Current Value" property. You can also bind this value to a variable or screen property to achieve dynamic control.
3. **Add and Configure Status**: In the "Status" property, configure each button status that needs to be displayed:

   1. **Status Value**: Define the data value corresponding to this status.
   2. **Status Text**: Set the text displayed on this status button.
   3. **Style Definition**: Set the **background color, border color, and text color** for this status in **default, mouse hover, pressed** three interaction states respectively.
4. **Select Display Mode**:

   1. **When "Display Single" is selected**: The system only displays a single button corresponding to the status that matches the "Current Value". You only need to configure multiple alternative statuses according to step 3.
   2. **When "Display Multiple" is selected**: All added statuses will be displayed side by side in the form of multiple buttons. You need to configure styles in two modes for each status:

      1. **Selected Style**: When this status matches the "Current Value" (i.e., selected), the background, border, and text colors in **default, hover, pressed** states.
      2. **Unselected Style**: When this status is not selected, the background, border, and text colors in **default, hover, pressed** states.
5. **Adjust Layout (only effective in "Display Multiple" mode)**: Through "Direction" and "Spacing" properties, set whether multiple status buttons are arranged horizontally or vertically, and the spacing between buttons.
6. **Bind Interactive Events (Optional)**: You can configure independent **"Actions"** for buttons of different statuses, such as triggering variable write values or screen jumps when clicking a certain status button.

## 4. Special Events

| Button Click |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| Description  | When a user clicks a button in the status button, the corresponding event will be triggered.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                |
| Input Parameter | Status value in status data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                |
| Operation Type | Navigation                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | After clicking a status button, navigate to the specified screen or popup window.   |
|              | Variable Write Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | After clicking a status button, write a preset value to the specified variable. |
| Configuration Process | In a status button group displaying three statuses "Start", "Stop", "Reset":<br />           1. Click the **"Start"** button, execute **Variable Write Value** action, write control command 1 to the device start variable.<br />           2. Click the **"Stop"** button, execute **Variable Write Value** action, write control command 0 to the device start variable.<br />           3. Click the **"Reset"** button, execute **Navigation** action, jump to the device reset parameter setting popup window.<br />By configuring status-specific actions for the "Button Click" event, you can build an intuitive and functionally focused device control panel.<br />Configuration Example: As shown in Figure 1-2, in the "Action" settings, select "Button Click" as the trigger event, then configure the exclusive "Navigation" or "Variable Write Value" action for each status in the list.![Image Description](../../images/控件照片/状态按钮/3.gif)Figure 1-2 |                                                |

## 5. Property Details

| Name | Description                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name | The name of this control.                                                                                                                                                                                                                                                                                                                                                                                                             |
| X    | The distance from the left side of the control to the left side of the canvas, in px.                                                                                                                                                                                                                                                                                                                                                                                         |
| Y    | The distance from the top of the control to the top of the canvas, in px.                                                                                                                                                                                                                                                                                                                                                                                         |
| W    | The width of the control, in px.                                                                                                                                                                                                                                                                                                                                                                                                       |
| H    | The height of the control, in px.                                                                                                                                                                                                                                                                                                                                                                                                       |
| Angle | The rotation angle of the control                                                                                                                                                                                                                                                                                                                                                                                                             |
| Corner Radius | The corner radius of the button's four corners.                                                                                                                                                                                                                                                                                                                                                                                                     |
| Data | Current Value<br />Can change the current value of the status button control to achieve different displays                                                                                                                                                                                                                                                                                                                                                                     |
| Border | The line width of the control's border                                                                                                                                                                                                                                                                                                                                                                                                           |
| Button | Status<br />Add styles for different statuses of buttons, including background, border, text when selected and background, border, text when unselected. Note that this status has a default status<br />![Image Description](../../images/控件照片/状态按钮/4.png)<br />Display<br />You can choose to display a single button or display multiple buttons. If multiple buttons, display as many as the number of statuses added in Status<br />Direction<br />Set the horizontal and vertical direction spacing of buttons<br />Spacing between buttons<br /><br />![Image Description](../../images/控件照片/状态按钮/5.png) |
| Font | Set the font of the text content. Includes font type, font size, font color, bold, italic, underline.                                                                                                                                                                                                                                                                                                                                                 |
| Permission | Set the permissions of the control, control display/hide or enable/disable                                                                                                                                                                                                                                                                                                                                                                                      |
