## 1. Overview

A symbol is a highly reusable interface component that can encapsulate various interface elements such as images, controls, and text into an independent functional unit. As a **whole for operation and management**, the core value of symbols lies in **"design once, use everywhere; modify once, sync globally"**, greatly simplifying interface development and maintenance work.



## 2. Core Features

### 1. **Efficient Reuse and Centralized Maintenance**

- **Avoid Repetitive Work**: For standard interface elements that need to appear frequently in the project (such as device status cards, standard button groups, general instruments, etc.), you only need to design once and create it as a symbol.

- **Global Synchronous Updates**: When you modify the symbol's **template**, all **instances** using the symbol in the project will automatically sync and update, ensuring consistency in interface style and functionality while significantly reducing maintenance costs.

### 2. **Support for Nested Construction of Complex Modules**

- **Like "Building Blocks"**: One symbol can be embedded as a sub-component into another symbol, achieving multi-level nesting. This allows you to build complex user interfaces in a modular, hierarchical manner.

- **Typical Applications**: For example, first create a basic **pressure gauge** symbol. Then, when designing more complex device symbols such as **oil tanks**, **motors**, **compressors**, etc., you only need to embed the **pressure gauge** symbol. This way, all pressure gauges in all devices remain unified, and only one design source needs to be maintained.



## 3. Symbol Properties Details

Symbols achieve instance-level personalized configuration while ensuring reusability through their property system.

| Property Category | Name | Description, Purpose and Binding Rules |
| ----------------- | ---- | ------------------------------------- |
| Internal Properties | Background | Function: Only used as visual layout reference during symbol editing. Visibility and Binding Rules: |
| Core Properties | Custom Properties | Function: The key to symbol differentiated configuration. Define configurable parameters for symbols so that each instance can bind different data or have different behaviors. Example: A "Motor" symbol can define a MotorNumber (motor number) custom property. When using the symbol in different places, different numbers can be specified for each instance. Visibility and Binding Rules: |

