import WorkspaceController from "./WorkspaceController.js";
import createMainLayout from "../components/MainLayout.js";
import showDialog from "../components/dialog-form/Dialog.js";
import ProjectController from "./ProjectController.js";

export default class AppController {
  constructor(root) {
    this.root = root;
    this.models = {
      workspaces: [],
      projects: [],
    };

    // CONTROLLERS
    this.workspaceController = new WorkspaceController(this.models.workspaces);
    this.projectController = new ProjectController(this.models.projects);

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
      // GET ACTIVE STATE
      getActiveWorkspace: () => this.activeWorkspace,
      getActiveProject: () => this.activeProject,
      getActiveTask: () => this.activeTask,
      getActiveTodo: () => this.activeTodo,
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
          onEdit: (data) => this.actions.handleEditWorkspace(wsId, data),
        });
      },

      showAddProjectDialog: () => {
        showDialog({
          initialData: null,
          dialogConfig: { title: "Add Project Details" },
          formConfig: {
            id: "addProject",
            textInputConfig: {
              label: "Project Name",
              id: "projectName",
              placeholder: "Enter project name!",
            },
            textareaConfig: {
              label: "Project Description",
              id: "projectDescription",
              placeholder: "Enter project description!",
            },
            dateInputConfig: {
              isActive: true,
              label: "Project Deadline",
              id: "projectDeadline",
            },
            selectConfig: {
              isActive: true,
              label: "Project Priority",
              id: "projectPriority",
            },
          },
          onAdd: (data) => this.actions.handleAddProject(data),
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
        // remove all todo
        // remove all task
        // remove all project
        this.projectController.removeProjectsByParentId(id);
        this.models.projects = this.projectController.projects;

        // removeWorkspace
        this.workspaceController.removeWorkspace(id);
        this.models.workspaces = this.workspaceController.workspaces;

        if (this.activeWorkspace === id) {
          this.activeWorkspace = null;
          this.activeProject = null;
          this.activeTask = null;
          this.activeTodo = null;
        }

        console.log(this.models);

        this.render();
      },
      handleEditWorkspace: (id, editedWs) => {
        this.workspaceController.editWorkspace(id, editedWs);
        this.models.workspaces = this.workspaceController.workspaces;

        this.render();
      },

      handleAddProject: (data) => {
        this.projectController.addProject(
          this.activeWorkspace,
          data.name,
          data.description,
          data.DueDate,
          data.priority,
        );

        this.models.projects = this.projectController.projects;

        this.render();
      },
    };

    this.render();
  }

  render() {
    this.root.innerHTML = "";

    const mainLayout = createMainLayout(
      this.models,
      this.actions,
      this.activeWorkspace,
    );
    this.root.appendChild(mainLayout);
  }
}
