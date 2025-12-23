## 1. Overview

Modal controls are used to pop up specified popup screens when specific conditions are triggered. Through interruptive interaction, they guide users to focus on handling current tasks, supporting custom open positions and property passing.

![Image Description](../../images/控件照片/模态框/1.png)

## 2. Usage Scenarios

Modal controls are used in the following scenarios:

### 1. Information Display Scenarios

- When detailed information or alarm information needs to be highlighted
- Data detail viewing, report display, help instructions, etc.
- When users need to confirm important operations or input key information

## 3. Quick Start

1. Drag the modal control to the canvas and adjust position and size
2. Select the popup screen to be displayed in the "Screen" property
3. Set "Title" to define the display title of the popup
4. Configure "Open Position" to determine the display position of the popup on the screen
5. Control the display and hide state of the popup through the "Display" property
6. Set trigger conditions and actions to implement automatic popup logic

**Example:**

### 1. Information Display Scenario:

1.1 Information Display Scenario Example

This example implements the device alarm popup function. When a certain condition is triggered, the modal is triggered to display a confirmation popup containing alarm information. As shown in Figure 1-1.

![Image Description](../../images/控件照片/模态框/2.gif)

Figure 1-1

1.2 Actual Configuration Tutorial:

1. Drag the modal control to the canvas and adjust position and size
2. Enter the popup title, select the required popup in Screen, and use Display to choose whether to display or hide the popup
3. Bind Display to a variable, and when the trigger condition is met, the popup will appear

## 4. Property Details

| Name   | Description                                                                                                                                                                                                                                                                                                        |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name   | The name of this control.                                                                                                                                                                                                                                                                                              |
| X      | The distance from the left side of the control to the left side of the canvas, in px.                                                                                                                                                                                                                                                                          |
| Y      | The distance from the top of the control to the top of the canvas, in px.                                                                                                                                                                                                                                                                          |
| W      | The width of the control, in px.                                                                                                                                                                                                                                                                                        |
| H      | The height of the control, in px.                                                                                                                                                                                                                                                                                        |
| Modal  | Display<br />Display/hide the popup screen bound to the modal<br />Title<br />The title of the bound popup screen<br />Screen<br />Bind a popup screen to the control. If the selected screen has custom properties set, the custom properties of the selected screen will be displayed, and you can modify the values of custom properties.<br />![Image Description](../../images/控件照片/模态框/3.png)<br />Open Position<br />The open position of the bound popup screen on the screen |
