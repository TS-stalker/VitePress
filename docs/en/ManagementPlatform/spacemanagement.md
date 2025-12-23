## 1. Overview

The Space Management module is used for digital modeling and quantitative management of physical buildings or areas. It clearly displays the hierarchical relationships and attribute information of all spaces in a tree structure and provides complete space data maintenance functions.

## 2. Space List and Operations

### 1. Space Attribute Display

The system displays detailed information of each space in tabular form. The main fields include:

- **Space Name**: The unique identifier of the space.
- **Display Name**: The friendly name displayed in the interface.
- **Parent Path**: The direct parent path of this space in the tree structure.
- **Full Path**: The complete hierarchical path from the root node to this space.
- **Category**: The type classification of the space (such as: floor, room, area, etc.).
- **Comments**: Additional descriptions or notes for this space.
- **Last Modified Time**: Records the last update time of this space information.

![Image Description](../../images/ManagementPlatform/空间管理1.png)

### 2. Space Navigation and Search

- **Tree Navigation**: Users can browse and select specific spaces intuitively through the **Space Tree** on the left. Clicking any space node will automatically filter and display the list of **this space and all its sub-spaces** in the right table.
- **Global Search**: Supports quick search and location of **all spaces** through key information such as space name and display name.

![Image Description](../../images/ManagementPlatform/空间管理2.png)

### 3. Data Maintenance Functions

The space table supports comprehensive data maintenance operations:

- **Edit**: Modify the attribute information of any space entry.
- **Delete**: Delete a single space entry (operate with caution).
- **Batch Operations**: Supports batch editing or deletion of multiple selected space entries, improving management efficiency.

## 3. Space Data Construction

The system provides two modes to synchronize or update space data from source systems (such as BIM, CAD, or space databases):

| Construction Mode | Function and Purpose                                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Full Construction | Reload and construct all space data. This operation will use the latest source data to completely overwrite and rebuild the entire existing space tree. Suitable for scenarios such as first-time import or when all data needs to be completely updated. |
| Incremental Construction | Only load and synchronize changed space data. This operation will check the differences between source data and existing data, only updating new, modified, or deleted parts. Suitable for daily maintenance, which can greatly improve synchronization efficiency and reduce unnecessary system load. |
