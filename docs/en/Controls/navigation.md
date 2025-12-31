## 1. Overview

Navigation actions are the core interactive functions for building multi-screen applications, allowing you to automatically jump to specified target screens or pop up modal dialogs when specific conditions are met or in response to user operations.

## 2. Navigation Target Types and Configuration

### 1. Navigate to Screen

- **Function Description**: Select a regular screen from the project screen list as the jump target.
- **Configurable Items**:

  - **Target Screen**: Select the regular screen to open from the list.
  - **Open Position**: Set how the target screen opens in the application (such as new tab, current page replacement).
  - **Screen Title**: Specify a custom title for this opening action.
- **Application Scenarios**: Main menu switching, step flow jumping, viewing detailed information pages, etc.

**Example:**

![Image Description](../images/控件照片/动作/1.gif)

Figure 1-1

### 2. Navigate to Popup

- **Function Description**: Select a specially designed popup screen from the project screen list as the popup target.
- **Configurable Items**:

  - **Target Popup**: Select the popup screen to display from the list.
  - **Open Position**: Set the display position of the popup on the screen (centered, following, custom).
  - **Popup Title**: Specify the title text of the popup.
  - **Custom Property Binding**: **Core Function**. Bind data to "custom properties" defined in the popup to pass parameters or dynamic content to the popup. For example, pass different device IDs to a "Device Details" popup.
  - **Prefix Replacement**: **Efficient Reuse Function**. By replacing prefixes of data sources within the popup (such as variable names, label ID prefixes), different data sets can be displayed without rebuilding the popup. For example, a general "Parameter Settings" popup can be used to set parameters for Device A and Device B by replacing the prefix.
- **Application Scenarios**: Pop up detailed information dialogs, perform parameter settings, display confirmation or message prompt boxes, and other interactions that require interrupting the current process.

**Example:**

![Image Description](../images/控件照片/动作/2.png)

Figure 1-2

## 3. Usage Process

1. In the control or event **"Actions"** configuration, select **"Navigation"** type.
2. Select the navigation target type: **Screen** or **Popup**.
3. According to the selected type, select the specific target screen/popup from the list.
4. Configure corresponding open position, title and other parameters.
5. (**Popup specific**) Perform **custom property binding** or configure **prefix replacement** to achieve dynamic data transfer and flexible popup reuse.
6. Set conditions to trigger the navigation action (such as button clicks, data changes, etc.).
