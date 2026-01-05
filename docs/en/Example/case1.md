## 1. Overview

Popups (modal dialogs) are important interactive components used to display detailed information, set parameters, or complete specific operations without leaving the current screen. This case will detail the complete process of creating and using a popup in DipuOne.

## 2. Operation Steps

### Step 1: Enter the Configuration Design Interface

1. In the project management interface, find and click the **"Configuration Design"** module.
2. After entering, select **"Screen Configuration"** to open the configuration design editor.

![Image Description](../../images/Example/case1/1.png)

Fig 1-1

### Step 2: Create New Popup

You can create a new popup through one of the following two methods:

- **Method 1**: In the canvas, select **"New Popup"**.
- **Method 2**: Right-click on the "Screen" list in the left "Project" window and select **"New Popup"**.

![Image Description](../../images/Example/case1/2.png)

Fig 1-2

### Step 3: Configure Popup Properties

In the popup "New Popup" configuration window, make the following settings:

1. **Select Size**: Choose from preset sizes, or customize the popup's width and height.
2. **Fill Name**: Enter a clear name for the popup (such as "Device Detail Settings").
3. **Select Template (Optional)**: If there are predefined screen templates in the project, you can select one to quickly apply a unified style.
4. Click **"Save"** to complete popup creation.

![Image Description](../../images/Example/case1/3.png)

Fig 1-3

### Step 4: Design Popup Content

The new popup will open as an independent design window. In this window, you can design like a normal screen:

- Drag required controls from the **"Controls"** panel (such as input boxes, buttons, dropdown lists).
- Drag images from the **"Image Library"** as background or decoration.
- Drag reusable components from the **"Symbol"** library.
- Free layout to design the popup style and functionality you expect.

![Image Description](../../images/Example/case1/4.png)

Fig 1-4

### Step 5: Trigger Popup in Main Screen

1. Return or switch to the **main screen** that needs to trigger the popup.
2. Select the control used to trigger the popup (such as a **button**).
3. In the right **"Actions"** property panel, click "Add Action".
4. Configure the action:

   1. **Trigger Event**: Select **"Click"**.
   2. **Execute Action**: Select **"Navigation"** -> **"Popup"**.
   3. **Target Popup**: Select the popup you created in **Step 3** from the list.
5. Further configure the popup's opening position, title, or custom attribute binding as needed.
6. Click **"Save"** to complete the main screen settings.

![Image Description](../../images/Example/case1/5.png)

Fig 1-5

### Step 6: Run and Test

1. Click the editor's **"Preview"** or project list's **"Run"** button to enter run mode.
2. In the running main screen, **click** the button you set the action for.
3. At this time, the previously designed popup will pop up as preset, and you can test its interactive functions.

![Image Description](../../images/Example/case1/6.gif)

Fig 1-6
