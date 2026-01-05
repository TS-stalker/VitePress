## 1. Overview

Variables are the core of the configuration system's data-driven functionality, divided into **structured variables**, **unstructured variables**, and **internal variables**. This case will guide you to fully master the creation methods of these three types of variables.

## 2. Operation Steps

### **Path 1: Create Structured Variables (Based on Device Type)**

This path is suitable for batch creating standardized variable groups for devices of the same model.

1. **Create Device Type and Point Table**

   1. Enter the **Device Management** -> **Device Type** page.
   2. Click "New", enter the device type name (such as `Device4`).
   3. Select the appropriate **point table specification (usually defaults to "General"**).
   4. Edit the **device point table** to define standard data points for this type of device (such as: temperature, pressure, status, etc.). These points will become variable templates.
2. **Configure Communication Connection**

   1. Enter the **Connection Management** page.
   2. Click "Connection", select communication protocol (such as `Modbus TCP`), create a specific connection.
   3. Configure necessary parameters such as IP, port, etc. and save.
3. **Create Specific Device (Instantiation)**

   1. Return to the **Device Management** page, select a device type, here click to select the `Device4` created in step 1.
   2. Click "Device", enter specific device information.
   3. In the connection properties of the "Device", select the configured `Modbus TCP` connection.
   4. Save the device.
4. **View Automatically Generated Structured Variables**

   1. Enter the **Device Variables** page.
   2. The system will automatically generate a set of **structured variables** for this specific device based on the device type's point table. These variables have standard names and structures.

![Image Description](../../images/Example/case3/1.gif)

Fig 1-1

### **Path 2: Create Unstructured Variables (Device-Specific Variables)**

This path is suitable for adding unique variables to specific devices that are not in the standard point table.

1. **Enter Variable Management**

   1. Under the **Connection Management** page, find and click the **Variables** subpage.
2. **Create Unstructured Variables**

   1. Click "New" to create a new variable.
   2. Name this variable and set its data type.
   3. **Key Step**: In the variable properties **"Connection/Device"** option, **select the specific device this variable belongs to** (such as the device created in the previous step).
   4. **Key Step**: In the **"Driver"** option, **select the communication driver corresponding to this device** (such as `Modbus TCP`).
   5. Configure parameters such as the specific address, read/write method, etc. of this variable under the driver and save.
   6. Such variables are called **unstructured variables**, they belong to specific devices but are not inherited from the device type's standard point table.

![Image Description](../../images/Example/case3/2.gif)

Fig 1-2

### **Path 3: Create Internal Variables**

This path is used to create system-internal variables that do not depend on any external devices.

1. **Enter Internal Variable Management**

   1. Under the **Connection Management** page, switch to the **Variables** subpage.
2. **Create Internal Variables**

   1. Click "New", fill in the variable's **name, data type, initial value**, etc.
   2. After saving, this variable can be used in the project to store intermediate results, global flags, or configuration parameters.

![Image Description](../../images/Example/case3/3.gif)

Fig 1-3