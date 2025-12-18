## 一、概述

当下拉框选项被选中时，可触发数据更新、画面跳转等交互操作。支持手动配置选项列表，实现灵活的业务场景适配

![](https://tcs-devops.aliyuncs.com/storage/113n938d7224455cd8801bf48efe690859a4?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTc2NjU3MDUzNiwiaWF0IjoxNzY1OTY1NzM2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExM245MzhkNzIyNDQ1NWNkODgwMWJmNDhlZmU2OTA4NTlhNCJ9.Z_BFhEuux1fEmKPUmgnNNHju5wdnQfrjHzPxppbHXh4&download=afacfdec-ba3e-44db-8563-bd82b7005182.png "")



## 二、使用场景

下拉框控件在以下场景中使用：

### 1.数据选择场景

- 当需要用户根据不同的选项下发不同的命令时

- 需要提供标准化输入，避免用户自由输入错误数据

### 2.功能触发场景

- 根据选择更新其他控件的数据显示

- 实现画面跳转或弹窗显示切换



## 三、快速开始

1. 拖拽下拉框控件到画布并调整位置尺寸

1. 在"选项内容"中配置选项列表（文本和值）

1. 设置"选中文本"和"选中值"确定默认选项

1. 配置样式属性（颜色、边框、字体等）（**可选**）

1. 设置"动作"定义选择后的交互行为（**可选**）

**示例：**

数据选择场景：

模拟空调模式选择。当下拉框选项设置为["制热", "制冷", "除湿"]时，选择不同模式可触发相应的温度设定值变化，如图1-1所示

![](https://tcs-devops.aliyuncs.com/storage/113o72d033f1b1ee52630bdfbe3aaf477c4c?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTc2NjU3MDUzNiwiaWF0IjoxNzY1OTY1NzM2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExM283MmQwMzNmMWIxZWU1MjYzMGJkZmJlM2FhZjQ3N2M0YyJ9.tlRIl1uawEa7eok5PWJQy-qWf4PTQs3ZohLctxQ3bxA&download=PixPin_2025-11-27_19-17-16.gif "")

图 1-1

功能触发场景：

实现画面导航功能。如设置选项为["首页", "报表", "设置"]，选择"报表"时自动跳转到报表画面。**注意该选项名称必须与画面名称一致，否则无法实现正确跳转**。如图1-2所示。

![](https://tcs-devops.aliyuncs.com/storage/113odac1c728b6093e71b64acf6ad1c7c877?Signature=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBJRCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9hcHBJZCI6IjVlNzQ4MmQ2MjE1MjJiZDVjN2Y5YjMzNSIsIl9vcmdhbml6YXRpb25JZCI6IiIsImV4cCI6MTc2NjU3MDUzNiwiaWF0IjoxNzY1OTY1NzM2LCJyZXNvdXJjZSI6Ii9zdG9yYWdlLzExM29kYWMxYzcyOGI2MDkzZTcxYjY0YWNmNmFkMWM3Yzg3NyJ9.ir300sz8YRhlDx_PufmsRIkJE1D1umfuB9QlSYAEzpQ&download=PixPin_2025-11-27_18-03-27.gif "")

图 1-2



## 四、特殊事件

| 值变化   |                                                                                                              |                                                                      |
| -------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| 说明     | 当下拉框的选中值发生改变时， 对应的事件将会被触发                                                            |                                                                      |
| 入参     | 选中值（选中文本）                                                                                           |                                                                      |
| 操作类型 | 导航                                                                                                         | 作时，控件选项的“值”必须与目标画面的名称完全一致，否则无法正确跳转。 |
|          | 变量写值                                                                                                     | 会将选中的值写入到变量中                                             |
| 配置流程 | 通过配置“值变化”事件，可以让控件在用户选择后自动执行后续流程，极大地提升了界面的自动化程度与用户体验。图 1-3 |                                                                      |



## 五、属性详解

| 名称     | 描述                                                                                                                                                                                                                   |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 名字     | 此控件的名称。                                                                                                                                                                                                         |
| X        | 控件左侧距画布左侧的距离，单位px。                                                                                                                                                                                     |
| Y        | 控件顶部距画布顶部的距离，单位px。                                                                                                                                                                                     |
| W        | 控件的宽度，单位px。                                                                                                                                                                                                   |
| H        | 控件的高度，单位px。                                                                                                                                                                                                   |
|          | 控件的旋转角度                                                                                                                                                                                                         |
|          | 控件的透明度                                                                                                                                                                                                           |
| 圆角     | 按钮四个角的圆角曲率。                                                                                                                                                                                                 |
| 选项内容 | 可以添加或删除下拉框下的选择项，可以设置选择项展示的文本以及该文本对应的值                                                                                                                                             |
| 选中方式 | 选中方式中文本对应选项内容中文本，值对对应选项内容值。选择一个选中方式后，更改对应的选中值，下拉框显示的就是对应的文本。选中：当下拉框展开时，当前已选中选项在列表中的背景颜色鼠标悬停在下拉选项上时，该选项的背景颜色 |
| 填充色   | 下拉框的填充色。                                                                                                                                                                                                       |
| 边框颜色 | 下拉框的边框颜色。                                                                                                                                                                                                     |
| 边框粗细 | 下拉框的边框粗细。                                                                                                                                                                                                     |
| 字体     | 设置的下拉选项的字体。包括字体型号、字体大小、字体颜色、加粗、倾斜、下划线设置。                                                                                                                                       |
| 权限     | 设置控件的权限，控件显示隐藏/启动禁用                                                                                                                                                                                  |


