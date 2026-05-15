import WorkspaceController from "./WorkspaceController.js";

import createMainLayout from "../components/MainLayout.js";
import showDialog from "../components/dialog-form/Dialog.js";

export default class AppController {
  constructor(root) {
    this.root = root;
    this.models = { workspaces: [] };

    // CONTROLLERS
    this.workspaceController = new WorkspaceController(this.models.workspaces);

    // ACTIVE STATE
    this.activeWorkspace = null;
    this.activeProject = null;
    this.activeTask = null;
    this.activeTodo = null;

    this.actions = {
      // SET ACTIVE STATE
      setActiveWorkspace: (id) => {
        this.activeWorkspace = id;
        this.activeProject = null;
        this.activeTask = null;
        this.activeTodo = null;

        this.render();
      },

      // DIALOG
      showAddWorkspaceDialog: () => {
        showDialog({
          initialData: null,
          dialogConfig: { title: "Add Workspace Details" },
          formConfig: {
            id: "addWorkspace",
            textInputConfig: {
              label: "Workspace Name",
              id: "workspaceName",
              placeholder: "Enter workspace name!",
            },
            textareaConfig: {
              label: "Workspace Description",
              id: "workspaceDescription",
              placeholder: "Enter workspace description!",
            },
            dateInputConfig: {
              isActive: false,
            },
            selectConfig: { isActive: false },
          },
          onAdd: (data) => this.actions.handleAddWorkspace(data),
        });
      },
      showEditWorkspaceDialog: (wsId) => {
        showDialog({
          initialData: this.models.workspaces.find(
            (workspace) => workspace.id === wsId,
          ),
          dialogConfig: { title: "Edit Workspace Details" },
          formConfig: {
            id: "editWorkspace",
            textInputConfig: {
              label: "Workspace Name",
              id: "workspaceName",
              placeholder: "Enter workspace name!",
            },
            textareaConfig: {
              label: "Workspace Description",
              id: "workspaceDescription",
              placeholder: "Enter workspace description!",
            },
            dateInputConfig: { isActive: false },
            selectConfig: { isActive: false },
          },
          onEdit: (data) => this.actions.handleEditWorkspace(data),
        });
      },

      // WORKSPACE HANDLER
      handleAddWorkspace: (data) => {
        const newWorkspace = this.workspaceController.addWorkspace(
          data.name,
          data.description,
        );

        this.models.workspaces = this.workspaceController.workspaces;
        this.actions.setActiveWorkspace(newWorkspace.id);

        this.render();
      },
      handleRemoveWorkspace: (id) => {
        this.workspaceController.removeWorkspace(id);
        this.models.workspaces = this.workspaceController.workspaces;

        if (this.activeWorkspace === id) {
          this.activeWorkspace = null;
          this.activeProject = null;
          this.activeTask = null;
          this.activeTodo = null;
        }

        this.render();
      },
      handleEditWorkspace: (editedWs) => {
        this.workspaceController.editWorkspace(this.activeWorkspace, editedWs);
        this.models.workspaces = this.workspaceController.workspaces;

        this.render();
      },

      handleAddProject: (data) => {
        console.log(data);
      },
    };

    this.render();
  }

  render() {
    this.root.innerHTML = "";

    const mainLayout = createMainLayout(
      this.models.workspaces,
      this.actions,
      this.activeWorkspace,
    );
    this.root.appendChild(mainLayout);
  }
}
