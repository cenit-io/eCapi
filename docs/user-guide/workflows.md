**Workflows:**

# Workflows
The flows allow the user to configure a set of predetermined tasks to run on an integration. These tasks can be executed manually or automated through the configuration and activation of their schedulers. For example, the user might want to receive products from an integration 1 and orders form another integration.

>**Note: Not necessarily a flow can be tied to a scheduler.**

>**Note: If a scheduler was created for a flow it will be by default deactivate, in order to activate you must do it manually on the flow actions.**

There are two kinds of flows, the **import flows** which are responsible for importing information such as products, orders, product categories, warehouses, etc. from a specific integration to Omna, and, the **export flows**, which do the reverse process, export information from Omna to a specific integration.

If the **export flow** types are configured for products or orders for an **X integration**, then whenever a product or order from a **Y integration** arrives at Omna and a **link** was made to the previously mentioned **X integration**, then it is automatically It will export the product or order because the flow was configured in advance.

To see the workflows created, you must go to the **Settings / Workflow** menu, in this view a list of the workflows will be shown where you can see their name, integration, when it was created, when it was updated, if it has an active schedule, and the actions to be taken. they can run on workflows. You can also add new workflows, search and filter by various search criteria.
<div align=center>
    <img width="800" src="/assets/images/settings/workflows.jpg"/>
</div>

## Add Workflow

### Step 1
Click on **+** symbol located on the list view.
<div align=center>
    <img width="800" src="/assets/images/settings/add-workflow.jpg"/>
</div>

Next, the form to configure the flow that you want to create will be shown
<div align=center>
    <img width="800" src="/assets/images/settings/workflow-form.jpg"/>
</div>

### Step 2
Select the type of flow you want to create (**import / export**). *For this example, we used to **Import orders from an integration***.
<div align=center>
    <img width="800" src="/assets/images/settings/select-workflow-kind.jpg"/>
</div>

### Step 3
Select the *origin / destination* **integration** of the information. *For this example **Lazada SG store** was selected*.
<div align=center>
    <img width="800" src="/assets/images/settings/select-workflow-integration.jpg"/>
</div>

### Step 4 (Optional)
You can establish or not a scheduler if you want the workflow to run every a certain time, for this, you must configure the type of frequency by selecting a scheduler property or combinations of them.
>**Note: When a scheduler is configured for a workflow, it is created disabled by default, to enable the scheduler you must go to the list view of the workflows, and, in the actions of the desired workflow and select Enable scheduler action.**

<div align=center>
    <img width="800" src="/assets/images/settings/workflow-scheduler.jpg"/>
</div>


### Step 5
At this point you can create the workflow by clicking the save button.
<div align=center>
    <img width="800" src="/assets/images/settings/save-workflow.jpg"/>
</div>

## Actions
The user can execute various actions on the workflows, for this he only has to click on the actions menu of the desired workflow and execute the corresponding action, as shown below.
<div align=center>
    <img width="800" src="/assets/images/settings/workflows-menu.jpg"/>
</div>
<div align=center>
    <img width="800" src="/assets/images/settings/workflow-actions.jpg"/>
</div>

### Start
Immediately execute the workflow showing a message indicating the task created.
<div align=center>
    <img width="800" src="/assets/images/settings/start-workflow.jpg"/>
</div>
<div align=center>
    <img width="800" src="/assets/images/settings/starting-workflow.jpg"/>
</div>

### Enable scheduler
Allows you to enable or disable the workflow scheduler, allowing it to run automatically or not. The planner property of the workflow will indicate the current status.
<div align=center>
    <img width="800" src="/assets/images/settings/workflow-enable-scheduler.jpg"/>
</div>
<div align=center>
    <img width="800" src="/assets/images/settings/workflow-enabled-scheduler.jpg"/>
</div>

### Edit
Allows you to edit the selected workflow showing the editing form through which the user can modify its behavior.
<div align=center>
    <img width="800" src="/assets/images/settings/edit-workflow.jpg"/>
</div>
<div align=center>
    <img width="800" src="/assets/images/settings/edit-form-workflow.jpg"/>
</div>

### Delete
It allows to delete a specific workflow, the action is executed once the user authorizes said action in the confirmation dialog box.

<div align=center>
    <img width="800" src="/assets/images/settings/delete-workflow.jpg"/>
</div>
<div align=center>
    <img width="800" src="/assets/images/settings/delete-workflow-confirmation.jpg"/>
</div>
<div align=center>
    <img width="800" src="/assets/images/settings/workflow-deleted.jpg"/>
</div>
