## 1. Overview

Dataset is the core hub in DipuCore that connects raw data with final report display. It provides users with the ability to **design custom datasets** and **define report data sources**. The main function of this module is to **filter and combine specific data sets from historical archived data**, providing clear and structured data sources for subsequent visual display in the "Report Design" module.

## 2. Dataset List (Menu List Area)

All created datasets are centrally managed in this list. The main fields are as follows:

| Field      | Description and Function                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------- |
| Code       | The unique code identifier of the dataset.                                                    |
| Name       | The display name of the dataset.                                                               |
| Type       | The data source type of the dataset. Currently only "Archived Data" is supported, which extracts data from historical variables that have been configured for archiving. |
| Description | Basic description of the data characteristics and purpose contained in this dataset.           |
| Information | Displays the number of data tags (variables) contained in this dataset.                      |
| Created Time | The creation time of this dataset.                                                             |
| Updated Time | The last modification time of this dataset.                                                    |
| Operations | Provides "Modify" and "Delete" operation buttons for this dataset.                            |

The dataset management page is shown in Figure 1-1.

![Image Description](../../images/ManagementPlatform/数据集1.png) Figure 1-1

## 3. Function Operation Area

### 1. Add Dataset

Click the **"Add"** button to open the creation form.

- **Required Parameters**: `Code` (code), `Name`, `Type`.
- **Process**: After filling in the basic information and saving, the system will create an empty dataset container, and you need to further add specific data items to it. As shown in Figure 1-2.

![Image Description](../../images/ManagementPlatform/数据集2.png) Figure 1-2

### 2. Modify (Configure Data Items)

Click the **"Modify"** operation button in any dataset row in the list to enter the dataset detailed configuration page.

- **Core Functions**: On this page, you can:
  - **Add/Remove Data**: Select specific variables from the available archived variable pool that need to be included in this dataset.
  - **Configure Data Sampling Methods**: Set data statistics and sampling rules (such as: average value, maximum value, original value, etc.) for each variable in the dataset. As shown in Figure 1-3.

![Image Description](../../images/ManagementPlatform/数据集3.png)

Figure 1-3

### 3. Delete

Click the **"Delete"** operation button to **permanently remove datasets that are no longer needed**.

- **Important Note**: This operation is irreversible. Deleting a dataset will affect all reports that reference this dataset. Please operate with caution.

Through the Dataset module, you can flexibly combine archived data from different devices to form data views for specific analysis topics (such as "Production Line A Energy Consumption Analysis", "Core Equipment Operating Efficiency"), laying the foundation for generating targeted reports.
