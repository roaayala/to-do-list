import createMainLayout from "../components/MainLayout.js";
import showDialog from "../components/dialog-form/Dialog.js";
import ProjectController from "./ProjectController.js";
import TaskController from "./TaskController.js";
import TodoContoller from "./TodoController.js";

export default class AppController {
  constructor(root) {
    this.root = root;
    this.models = {
      projects: [],
      tasks: [],
      todos: [],
    };

    // ACTIVE STATE
    this.activeProject = null;
    this.activeTask = null;
    this.activeTodo = null;

    // CONTROLLERS
    this.projectController = new ProjectController(this.models.projects);
    this.taskController = new TaskController(this.models.tasks);
    this.todoContoller = new TodoContoller(this.models.todos);

    this.actions = {
      // SET ACTIVE STATE
      resetAllActive: () => {
        this.activeProject = null;
        this.activeTask = null;
        this.activeTodo = null;
      },
      setActiveProject: (pId) => {
        this.activeProject = pId;
        this.activeTask = null;
        this.activeTodo = null;

        this.render();
      },
      // GET ACTIVE STATE
      getActiveProject: () => this.activeProject,
      getActiveTask: () => this.activeTask,
      getActiveTodo: () => this.activeTodo,
      // DIALOG
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
              isActive: false,
            },
            selectConfig: {
              isActive: false,
            },
          },
          onAdd: (data) => this.actions.handleAddProject(data),
        });
      },
      showEditProjectDialog: (pId) => {
        showDialog({
          initialData: this.models.projects.find(
            (project) => project.id === pId,
          ),
          dialogConfig: { title: "Edit Project Details" },
          formConfig: {
            id: "editProject",
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
              isActive: false,
            },
            selectConfig: {
              isActive: false,
            },
          },
          onEdit: (data) => this.actions.handleEditProject(pId, data),
        });
      },

      // WORKSPACE HANDLER
      handleAddProject: (data) => {
        const newProject = this.projectController.addProject(
          data.name,
          data.description,
        );

        this.models.projects = this.projectController.projects;
        this.actions.setActiveProject(newProject.id);
        console.log(newProject);

        this.render();
      },
      handleRemoveProject: (pId) => {
        // remove all todo
        // remove all task
        // remove project
        this.projectController.removeProject(pId);

        this.models.projects = this.projectController.projects;

        if (this.actions.getActiveProject === pId) {
          this.actions.resetAllActive();
        }

        this.render();
      },
      handleEditProject: (pId, data) => {
        this.projectController.editProject(pId, data);
        this.models.projects = this.projectController.projects;

        this.render();
      },
    };

    this.render();
  }

  render() {
    this.root.innerHTML = "";

    const mainLayout = createMainLayout(this.models, this.actions);
    this.root.appendChild(mainLayout);
  }
}
