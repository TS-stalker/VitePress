## 1. Overview

Actions are the core mechanism for building interactive applications. By configuring actions, you can define the operations or programs that the system should execute when specific events occur, thereby achieving responsive interactions, automated business processes, and data-driven logic.

In DipuOne, you can find the **"Actions"** section in the property panel at either the **screen level** or **control level** and make specific settings there.



## 2. Types of Events That Trigger Actions

Action execution requires a clear "trigger". DipuOne supports multiple event types to trigger actions.

### 1. Mouse Events

Mouse events are the basic interactive trigger method based on user mouse operations, **supported by all controls**.

| Event Type | Trigger Timing |
| ---------- | -------------- |
| Click | A complete operation of quickly pressing and releasing the left mouse button when the mouse pointer is on the control. This is the most commonly used trigger action for confirming selections, executing commands, etc. |
| Mouse Enter | Triggered instantly when the mouse pointer moves from outside the control into the control's visible area. Commonly used to implement hover tips, highlighting effects, and other instant visual feedback. |
| Mouse Leave | Triggered instantly when the mouse pointer moves from inside the control out of the control's visible area. Usually used to end hover states and restore the control's default style. |
| Right Click | The operation of pressing and releasing the right mouse button when the mouse pointer is on the control. Usually used to trigger right-click-specific auxiliary functions. |



## 3. Control-Specific Event Descriptions

**Important Note**: In addition to the general events mentioned above, some controls also support their own unique special events to provide more precise and feature-specific interactive capabilities. For detailed descriptions and usage of these specific events (such as "button click", "value change", etc.), **please refer to the dedicated chapters in the control's product manual**, which are not elaborated upon in this document.



## 4. Action Execution Examples

Regardless of the event that triggers it, the final task executed (the action) is the core. In DipuOne, you can mainly configure the following two basic and powerful types of actions:

1. **Navigation Jump**: Jump to another screen or popup.

2. **Variable Operation**: Modify the value of a variable (write value)

By flexibly combining different **"trigger events"** (such as click, value change) with the above **"execution actions"** (navigation, write value), you can build rich, intelligent, and responsive user interaction experiences.

**Note**: For detailed configuration methods and advanced features of "Navigation Jump" and "Variable Operation" actions, please refer to the dedicated chapters that follow.





###