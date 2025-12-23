## 1. Overview

DipuCore provides a role-based access control system with three built-in standard roles, and supports custom permissions and flexible user authorization to meet system management needs at different levels.

## 2. Built-in Roles

The system predefines three core roles, with permissions from high to low as follows:

| Role              | Permission Description                                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Admin (Super Administrator) | Has all permissions of the system and is the highest permission role. Usually used for initial system configuration and global management. |
| Administrator     | Can manage one or more projects (such as creating, editing, deleting projects) and can manage users. The only difference from Admin is: when creating or assigning users, cannot set other users' roles to Admin. |
| Regular User      | Most restricted permissions, usually can only view the running screens of authorized projects and related device data, and does not have any management functions. |

![Image Description](../../images/ManagementPlatform/权限管理1.png)

## 3. User Management

By default, use the **Admin** account to log in for the first time. The following operations can be performed in the user management interface:

### 1. Create User

- **Path**: Enter **"Permission Management"** -> **"User List"**, click the **"+"** button.
- **Key Settings**: When creating a user, if the **"Allow Background Management"** option is checked, the user will be assigned the **Administrator** role; if not checked, it will be a **Regular User**.

![Image Description](../../images/ManagementPlatform/权限管理2.png)

### 2. Manage Individual User

In the user list, **right-click** any user to perform the following operations:

- **Modify**: Edit the user's basic information.
- **Reset Password**: Reset the user password to a specified value.
- **Delete**: Remove the user from the system.

![Image Description](../../images/ManagementPlatform/权限管理3.png)

## 4. Permission Management (Advanced)

The system supports fine-grained definition and assignment of permissions.

### 1. Edit Permission Items

- **Path**: Enter **"Permission Management"** -> **"Permissions"** page.
- **Operations**: You can **add** custom permission items, **add permission comments**, or perform **delete** operations here. All operations support **batch processing** to improve management efficiency.

![Image Description](../../images/ManagementPlatform/权限管理4.png)

### 2. Authorize Users

- **Path**: Enter **"Permission Management"** -> **"User Authorization"** page. In the user list, **click** to select the target user.
- **Operations**: A detailed permission configuration panel for this user will appear on the right. By **checking or unchecking** specific permission items, you can grant or revoke corresponding operation permissions for this user. This allows permission assignment to go beyond the fixed scope of built-in roles, achieving highly personalized control.

![Image Description](../../images/ManagementPlatform/权限管理5.png)
