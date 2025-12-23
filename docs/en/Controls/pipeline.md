## 1. Overview

Pipeline shape controls are used to create and edit pipeline graphics on the canvas, simulating physical pipelines in industrial processes, supporting multi-segment connections and custom styles, suitable for pipeline network drawing in process flow diagrams and system connection diagrams.

![Image Description](../../images/控件照片/管道/1.png)

## 2. Usage Scenarios

Pipeline controls are used in the following scenarios:

### 1. Data Visualization Scenarios

- When pipeline connections and material transmission paths in industrial processes need to be drawn
- Schematic diagrams of physical or logical connections between devices
- Create pipeline directions and connection relationships in device layouts

## 3. Quick Start

1. Click the left mouse button to select the pipeline control from the toolbar
2. Click the left mouse button at the starting position on the canvas and drag the mouse to draw the first pipeline segment
3. Release the mouse to complete the first segment, then press and drag again to draw the next pipeline segment
4. Repeat steps to draw multiple connected pipeline segments, forming a complete pipeline path
5. Click the right mouse button to complete drawing
6. Adjust the overall size and angle of the pipeline through the control points of the selection box
7. Double-click the pipeline to enter edit mode, drag endpoints to adjust the pipeline shape

**Example:**

### 1. Data Visualization Scenario:

1.1 Data Visualization Scenario Example

This example is creating a pipeline and setting basic properties, as shown in Figure 1-1.

![Image Description](../../images/控件照片/管道/2.gif)

Figure 1-1

1.2 Actual Configuration Tutorial:

1. Click the left mouse button to select the zigzag line control from the toolbar
2. Click the left mouse button at the starting position on the canvas and drag the mouse to draw the first line segment
3. Click the left mouse button to complete the first line segment, then press and drag again to draw the next line segment
4. Repeat steps to draw multiple line segments, click the right mouse button to determine the end position
5. Set the specific form of the pipeline, as well as the background color during operation and the background color when stopped
6. Set the style of the fluid, as well as spacing, flow rate, flow direction, etc.
7. Save and run

## 4. Pipeline Control Exclusive Operations

In addition to general drawing operations, pipeline controls support the following exclusive interactive operations to improve drawing efficiency and accuracy:

### 1. Continuous Drawing Mode

| Operation         | Effect and Illustration                                                                                                        |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| Double-click Pipeline Endpoint | Enter continuous drawing mode. The mouse will automatically snap to that endpoint, and you can continue dragging to draw the next connected pipeline segment, achieving uninterrupted pipeline network drawing. As shown in Figure 1-2. |

![Image Description](../../images/控件照片/管道/3.gif)

Figure 1-2

### 2. Advanced Adjustment and Auxiliary Functions

| Operation                  | Function Description                                                                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Hold Ctrl Key + Drag Endpoint | Enter free rotation mode. At this time, dragging the endpoint can rotate the pipeline direction at any angle, not limited to horizontal or vertical extension, suitable for drawing diagonal pipelines.                                 |
| Display Alignment Lines When Drawing/Moving | When drawing a new pipeline or moving an existing pipeline, the system will automatically display intelligent alignment reference lines (such as horizontal, vertical, or alignment with other pipeline endpoints) to assist in achieving precise endpoint docking and layout alignment. |

## 5. Property Details

| Name   | Description                                                                                                                                                               |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Name   | The name of this control.                                                                                                                                                     |
| X      | The distance from the left side of the control to the left side of the canvas, in px.                                                                                                                                 |
| Y      | The distance from the top of the control to the top of the canvas, in px.                                                                                                                                 |
| W      | The width of the control, in px.                                                                                                                                               |
| H      | The height of the control, in px.                                                                                                                                               |
| Angle   | The rotation angle of the control                                                                                                                                                     |
| Opacity | The opacity of the control                                                                                                                                                       |
| Pipeline   | Select the shape of the pipeline<br />The background color of the pipeline during operation<br />The background color of the pipeline when stopped<br />The diameter of the pipeline<br />Whether the pipeline is three-dimensional                                                                 |
| Fluid   | Enable fluid in the pipeline<br />The shape of the fluid in the pipeline<br />The width and height of the fluid in the pipeline<br />The spacing of the fluid in the pipeline<br />The flow rate of the fluid in the pipeline<br />The flow direction of the fluid in the pipeline<br />The style of the fluid in the pipeline when stopped |
| Permission   | Set the permissions of the control, control display/hide or enable/disable                                                                                                                              |
