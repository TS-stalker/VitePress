## 1. Concept

Property binding is a key function for realizing intelligent linkage between controls. It allows you to directly associate one control's property value with another control's property. Through this binding relationship, automatic synchronization mechanisms for data or status can be established between controls.

Property binding binds one control's property to another control. When that property changes, the new value will be pushed to the property that has the binding set.

## 2. Core Principles

### 1. Unidirectional Data Flow

- **Driver and Driven**: When a specific property value of one control (source control) changes, this new value will be automatically pushed to the corresponding property of another bound control (target control).
- **Real-time Synchronization**: Achieves real-time transmission and synchronization of control property values without writing additional logic code.

### 2. Selective Binding

- **Not All Properties Are Supported**: Due to design specifications and performance considerations, **not all control properties have binding functionality enabled**. Usually, properties that directly affect visual presentation, interaction status, or core data (such as text, value, visibility, enabled status, color, etc.) support binding.
- **Identifier Description**: In the property panel, **properties that support binding usually display a special binding icon (chain link, as shown in Fig 1-1 below)** to prompt users that this property can establish linkage relationships.

![Image Description](../../images/Controls/attributebind/9.png)

Fig 1-1

## 3. Operation Process

1. **Select Target Property**: In the property panel of the control that needs to receive data (target control), find and click the binding icon next to the property that supports binding.
2. **Select Binding Source**: In the binding settings window that pops up, select another control as the data source and its specific property.
3. **Confirm Binding**: After completing the settings, a unidirectional data channel between the two is established. Any changes to the source property will automatically update the target property.

**Note**: Property binding usually establishes a **unidirectional** data flow (from source to target). If bidirectional synchronization is needed, configuration should be done according to the specific control's characteristics or use other data management methods.

**Example:**

![Image Description](../../images/Controls/attributebind/10.gif)

Fig 1-2