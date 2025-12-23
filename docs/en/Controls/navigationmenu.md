## 1. Overview

Navigation menu controls are used to provide a clear page navigation structure, supporting two-level menu hierarchy, making it convenient for users to quickly locate and access system functional modules, improving operational efficiency and user experience.

![Image Description](../../images/控件照片/导航菜单/1.png)

## 2. Usage Scenarios

Navigation menu controls are used in the following scenarios:

### 1. System Navigation Scenarios

- When applications contain multiple functional modules that need unified navigation management
- Functional classification and page jump control of large systems
- Structured menu display of multi-level business systems
- Flexible switching of sidebar and top navigation

## 3. Quick Start

1. Drag the navigation menu control to the canvas and adjust position and size
2. Select horizontal or vertical arrangement in "Layout"
3. Edit the names and corresponding values of each level of menus in "Data"
4. Configure the size, font, and status colors of first-level menus
5. Set the display style and interactive effects of second-level menus
6. Adjust overall menu background, border, and corner radius styles
7. Set "Action" to define jump behavior after menu item clicks

**Example:**

### 1. System Navigation Scenario:

1.1 System Navigation Scenario Example

This example is building an enterprise management system navigation. First-level menus are set to ["Production Management", "Device Monitoring", "System Settings"]. Each first-level menu has corresponding second-level menu items configured, such as "Production Management" containing ["Production Plan", "Progress Tracking", "Production Statistics"]. As shown in Figure 1-1.

**Note**: If you want to achieve navigation item click jumping, the navigation item name must correspond one-to-one with existing screen names.

![Image Description](../../images/控件照片/导航菜单/2.gif)

Figure 1-1

1.2 Actual Configuration Tutorial:

1. Drag the navigation menu control to the canvas and adjust position and size
2. You can set the styles of first-level menus and second-level menus separately, including the corresponding background color, border, text in different states
3. Find the Data column, click Edit Menu Data, and edit the displayed menu names here. Note: If you want to achieve the function of clicking menu items to jump to screens, the menu name must be the name of an existing screen and must correspond one-to-one.
4. Click Action, enable special events, and you can achieve the function of clicking menu items to jump

## 4. Special Events

| Click Item   |                                                                                                                                                                                                                                                                                                                                                                                       |                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Description  | Triggered immediately when a user clicks a specific item in the menu list.                                                                                                                                                                                                                                                                                                                                          |                                                                      |
| Input Parameter | Value in menu data                                                                                                                                                                                                                                                                                                                                                                        |                                                                      |
| Operation Type | Navigation (jump to screen or popup)                                                                                                                                                                                                                                                                                                                                                              | The "value" in menu data must exactly match the name of the target screen or popup, otherwise correct jumping cannot be achieved. |
|              |                                                                                                                                                                                                                                                                                                                                                                                       |                                                                      |
| Configuration Process | 1. In the control's "Action" settings, select **"Click Item"** as the trigger event<br />2. Select **"Navigation"** as the execution action type<br />3. Set the target screen or popup<br />4. Configure the open location (replace current window/open in new tab)<br />5. Save the configuration to complete precise navigation settings<br />By configuring actions for the "Click Item" event, you can build a flexible, efficient navigation system that conforms to user operation habits, achieving differentiated jump behaviors after clicking different menu items.![Image Description](../../images/控件照片/导航菜单/3.gif)Figure 1-2 |                                                                      |

## 5. Property Details

| Name     | Description                                                                                                                                                                                                                                                                                                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name     | The name of this control.                                                                                                                                                                                                                                                                                                                                                                 |
| X        | The distance from the left side of the control to the left side of the canvas, in px.                                                                                                                                                                                                                                                                                                                                             |
| Y        | The distance from the top of the control to the top of the canvas, in px.                                                                                                                                                                                                                                                                                                                                             |
| W        | The width of the control, in px.                                                                                                                                                                                                                                                                                                                                                           |
| H        | The height of the control, in px.                                                                                                                                                                                                                                                                                                                                                           |
| Angle    | The rotation angle of the control                                                                                                                                                                                                                                                                                                                                                                 |
| Opacity  | The opacity of the control                                                                                                                                                                                                                                                                                                                                                                   |
| Layout   | Set the overall layout method of the menu. Includes horizontal, vertical, menu item spacing                                                                                                                                                                                                                                                                                                                             |
| Menu     | You can set background, border, line width, corner radius, etc.                                                                                                                                                                                                                                                                                                                                               |
| First-level Menu | Set the display style of first-level menus.<br />W<br />The width of first-level menus, in px.<br />H<br />The height of first-level menus, in px.<br />Font<br />Set the font of first-level menus. Includes font type, font size, bold, italic, horizontal alignment, vertical alignment.<br />You can set color effects for menus under different operation states. States include: default, hover, selected.<br />You can set background color and font color for each state.<br />![Image Description](../../images/控件照片/导航菜单/4.png) |
| Secondary Menu | Set the display style of second-level menus<br />W<br />The width of second-level menus, in px.<br />H<br />The height of second-level menus, in px.<br />Font<br />Set the font of second-level menus. Includes font type, font size, bold, italic, horizontal alignment, vertical alignment.<br />You can set color effects for menus under different operation states. States include: default, hover, selected.<br />You can set background color and font color for each state.<br />![Image Description](../../images/控件照片/导航菜单/5.png)   |
| Data     | Edit the data of each level of menus, menu names and menu values                                                                                                                                                                                                                                                                                                                                         |
| Permission | Set the permissions of the control, control display/hide or enable/disable                                                                                                                                                                                                                                                                                                                                          |
