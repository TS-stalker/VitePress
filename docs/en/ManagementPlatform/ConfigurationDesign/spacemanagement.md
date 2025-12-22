## 1. Overview

The Space Management module is used for digital modeling and quantitative management of physical buildings or areas. It clearly displays the hierarchical relationships and attribute information of all spaces in a tree structure and provides complete space data maintenance functions.

## 2. Space List and Operations

### 1. Space Attribute Display

The system displays detailed information of each space in tabular form, with main fields including:

- **Space Name**: The unique identifier of the space.
- **Display Name**: The friendly name displayed in the interface.
- **Parent Path**: The direct parent path of this space in the tree structure.
- **Full Path**: The complete hierarchical path from the root node to this space.
- **Category**: The type classification of the space (such as: Floor, Room, Area, etc.).
- **Comments**: Additional descriptions or notes for this space.
- **Last Modified Time**: Records the most recent update time of this space information.

![Image Description](../../../../images/ManagementPlatform/空间管理1.png)

### 2. Space Navigation and Search

- **Tree Navigation**: Users can intuitively browse and select specific spaces through the **Space Tree** on the left. Clicking on any space node will automatically filter and display the list of **that space and all its sub-spaces** in the right table.
- **Global Search**: Supports quick search and location of **all spaces** through key information such as space name, display name, etc.

![Image Description](../../../../images/ManagementPlatform/空间管理2.png)

### 3. Data Maintenance Functions

The space table supports comprehensive data maintenance operations:

- **Edit**: Modify attribute information of any space entry.
- **Delete**: Delete a single space entry (use with caution).
- **Batch Operations**: Supports batch editing or deletion of multiple selected space entries to improve management efficiency.

## 3. Space Data Construction

The system provides two modes to synchronize or update space data from source systems (such as BIM, CAD, or space databases):

| Construction Mode | Function and Purpose                                                                                                                                                     |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Full Construction | Reload and construct all space data. This operation uses the latest source data to completely overwrite and rebuild the entire existing space tree. Suitable for first-time import or scenarios requiring complete data updates. |
| Incremental Construction | Only load and synchronize changed space data. This operation checks differences between source data and existing data, updating only the added, modified, or deleted parts. Suitable for daily maintenance, significantly improving synchronization efficiency and reducing unnecessary system load. |
