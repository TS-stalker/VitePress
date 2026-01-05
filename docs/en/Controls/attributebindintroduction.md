## 1. Overview

Attribute binding is the core mechanism for dynamically linking interface control properties with data sources. Through binding, the display or behavior of controls is no longer fixed, but dynamically driven by the connected data, thereby achieving real-time synchronization and interaction between data and interface.

## 2. Binding Type Details

| Binding Type | Description and Principle | Typical Applications |
| ------------ | ------------------------- | -------------------- |
| Variable Binding | Link to core data source values: Bind control properties directly to data variables (Tags). When the variable value changes, the new value is automatically pushed to the bound control property. | Real-time display of sensor readings; control device on/off status through buttons (bound to boolean variables) |
| Property Binding | Link to interface elements: Bind one control's property to the current screen's custom properties or another control's property in the current screen. When the source property value changes, the target property automatically updates. | Multiple text labels display the same content; panel visibility controlled by checkbox selection status. |
| Script Binding | Link to dynamic calculation logic: Use scripts to perform complex data processing (such as calculation, formatting, conditional judgment, etc.), and bind the script's calculation results to control properties. | Real-time calculation and display of sum based on multiple input values; dynamically return different color codes based on status values. |

**Note**: For detailed configuration methods and advanced features of "Variable Binding", "Property Binding", and "Script Binding", please refer to the subsequent dedicated chapters.

## 3. How to Set Binding

### 1. Identify Bindable Properties

- Each control has many properties that control its appearance and behavior.
- In the property editor, **properties that support binding will display a binding icon on the right**.
- **Icon Status**:

  - **Gray Icon**: Indicates the property is **not bound**.
  - **Blue Icon**: Indicates the property is **already bound**.

Example:

1. When the property is not bound, the icon is gray.

![Image Description](../../images/Controls/attributebind/1.png)

2. After binding, the icon turns blue.

![Image Description](../../images/Controls/attributebind/2.png)

### 2. Execute Binding Operation

To perform attribute binding, simply click the binding icon to the right of the target property, then select the binding type (variable, property, script) as needed and configure the specific data source or script logic.

### 3. Data Type Matching Principle

- **Key Constraint**: The bound parties (control properties and data sources) must have **compatible data types**.
- **Example**: A "height" property that requires input of Number type can only be bound to other properties or variables that are also Number type. If you try to bind to String type, the binding cannot be completed.

## 4. Copy Behavior Description

**Convenient Feature**: When you copy a control that has already set attribute binding and scripts on the screen, **all binding relationships and scripts will be copied along with the control**. This greatly improves the efficiency of creating similar functional controls.

By flexibly using these three binding methods, you can make static controls "come alive" and build highly dynamic, data-driven, and responsive industrial application interfaces.