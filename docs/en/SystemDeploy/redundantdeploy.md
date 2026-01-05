Redundant deployment is a high-availability deployment method that introduces multi-node fault tolerance capability based on single-server deployment. Unlike active-passive synchronization or multi-active architectures, each DipuOne node in redundant deployment runs completely independently.

Redundant deployment refers to deploying DipuOne on two or more servers respectively, with each DipuOne instance configured and running independently according to the single-server deployment method. Each node can independently connect to PLCs, OPC UA servers, and databases, and has complete data collection, processing, and external service capabilities. Each node is logically independent, and the abnormality or stoppage of one node will not affect the normal operation of other nodes.

In redundant deployment mode, the system usually implements automatic switching through external mechanisms. When the currently used DipuOne node fails, access requests will automatically switch to another normally running DipuOne server, thereby ensuring business continuity. This switching process is transparent to clients and requires no manual intervention.

The redundant deployment method has a simple structure and is suitable for application scenarios that have certain requirements for system availability but do not want to increase system complexity. This method can effectively reduce single-point failure risks and is the most common deployment mode in the evolution from single-server deployment to high availability.

