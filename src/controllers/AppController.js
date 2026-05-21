import createMainLayout from "../components/MainLayout.js";
import showDialog from "../components/dialog-form/Dialog.js";
import ProjectController from "./ProjectController.js";
import TaskController from "./TaskController.js";
import TodoController from "./TodoController.js";

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
    this.todoController = new TodoController(this.models.todos);

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
      setActiveTask: (tsId) => {
        this.activeTask = tsId;
        this.activeTodo = null;
        this.render();
      },
      setActiveTodo: (tdId) => {
        this.activeTodo = tdId;
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
      showAddTaskDialog: (pId) => {
        showDialog({
          initialData: null,
          dialogConfig: { title: "Add Task Details" },
          formConfig: {
            id: "addTask",
            textInputConfig: {
              label: "Task Name",
              id: "taskName",
              placeholder: "Enter task name!",
            },
            textareaConfig: {
              label: "Task Description",
              id: "taskDescription",
              placeholder: "Enter task description!",
            },
            dateInputConfig: {
              isActive: true,
              label: "Task Deadline",
              id: "taskDeadline",
            },
            selectConfig: {
              isActive: true,
              label: "Task Priority",
              id: "taskPriority",
            },
          },
          onAdd: (data) => this.actions.handleAddTask(pId, data),
        });
      },
      showEditTaskDialog: (tsId) => {
        showDialog({
          initialData: this.models.tasks.find((task) => task.id === tsId),
          dialogConfig: { title: "Edit Task Details" },
          formConfig: {
            id: "editTask",
            textInputConfig: {
              label: "Task Name",
              id: "taskName",
              placeholder: "Enter task name!",
            },
            textareaConfig: {
              label: "Task Description",
              id: "taskDescription",
              placeholder: "Enter task description!",
            },
            dateInputConfig: {
              isActive: true,
              label: "Task Deadline",
              id: "taskDeadline",
            },
            selectConfig: {
              isActive: true,
              label: "Task Priority",
              id: "taskPriority",
            },
          },
          onEdit: (data) => this.actions.handleEditTask(tsId, data),
        });
      },
      showAddTodoDialog: (tsId) => {
        showDialog({
          initialData: null,
          dialogConfig: { title: "Add Todo Details" },
          formConfig: {
            id: "addTodo",
            textInputConfig: {
              label: "Todo Name",
              id: "todoName",
              placeholder: "Enter todo name!",
            },
            textareaConfig: {
              label: "Todo Description",
              id: "todoDescription",
              placeholder: "Enter todo description!",
            },
            dateInputConfig: {
              isActive: true,
              label: "Todo Deadline",
              id: "todoDeadline",
            },
            selectConfig: {
              isActive: true,
              label: "Todo Priority",
              id: "todoPriority",
            },
          },
          onAdd: (data) => this.actions.handleAddTodo(tsId, data),
        });
      },
      showEditTodoDialog: (tdId) => {
        showDialog({
          initialData: this.models.todos.find((todo) => todo.id === tdId),
          dialogConfig: { title: "Edit Todo Details" },
          formConfig: {
            id: "addTodo",
            textInputConfig: {
              label: "Todo Name",
              id: "todoName",
              placeholder: "Enter todo name!",
            },
            textareaConfig: {
              label: "Todo Description",
              id: "todoDescription",
              placeholder: "Enter todo description!",
            },
            dateInputConfig: {
              isActive: true,
              label: "Todo Deadline",
              id: "todoDeadline",
            },
            selectConfig: {
              isActive: true,
              label: "Todo Priority",
              id: "todoPriority",
            },
          },
          onEdit: (data) => this.actions.handleEditTodo(tdId, data),
        });
      },

      // PROJECT HANDLER
      handleAddProject: (data) => {
        const newProject = this.projectController.addProject(
          data.name,
          data.description,
        );

        this.models.projects = this.projectController.projects;
        this.actions.setActiveProject(newProject.id);

        this.render();
      },
      handleRemoveProject: (pId) => {
        const tasksToRemove = this.models.tasks.filter(
          (task) => task.pId === pId,
        );

        const tasksIdToRemove = tasksToRemove.map((task) => task.id);

        // remove all todo
        tasksIdToRemove.forEach((tsId) => {
          if (this.todoController.todos.some((todo) => todo.tsId === tsId)) {
            this.todoController.removeTodosByTaskId(tsId);
          }
        });
        this.models.todos = this.todoController.todos;

        // remove all task
        this.taskController.removeTaskByProjectId(pId);
        this.models.tasks = this.taskController.tasks;

        // remove project
        this.projectController.removeProject(pId);
        this.models.projects = this.projectController.projects;

        if (this.actions.getActiveProject() === pId) {
          this.actions.resetAllActive();
        }

        this.render();
      },
      handleEditProject: (pId, data) => {
        this.projectController.editProject(pId, data);
        this.models.projects = this.projectController.projects;
        this.render();
      },

      handleAddTask: (pId, data) => {
        this.taskController.addTask(
          pId,
          data.name,
          data.description,
          data.deadline,
          data.priority,
        );

        this.models.tasks = this.taskController.tasks;
        this.render();
      },
      handleRemoveTask: (tsId) => {
        // remove all todo
        this.todoController.removeTodosByTaskId(tsId);
        this.models.todos = this.todoController.todos;

        // remove task
        this.taskController.removeTask(tsId);
        this.models.tasks = this.taskController.tasks;

        if (this.actions.getActiveTask() === tsId) {
          this.activeTask = null;
          this.activeTodo = null;
        }

        this.render();
      },
      handleEditTask: (tsId, data) => {
        this.taskController.editTask(tsId, data);
        this.models.tasks = this.taskController.tasks;

        this.render();
      },
      handleAddTodo: (tsId, data) => {
        this.todoController.addTodo(
          tsId,
          data.name,
          data.description,
          data.deadline,
          data.priority,
        );

        this.models.todos = this.todoController.todos;

        this.render();
      },
      handleRemoveTodo: (tdId) => {
        this.todoController.removeTodo(tdId);

        this.models.todos = this.todoController.todos;

        if (this.actions.getActiveTodo() === tdId) {
          this.activeTodo = null;
        }

        this.render();
      },
      handleEditTodo: (tdId, data) => {
        this.todoController.editTodo(tdId, data);

        this.models.todos = this.todoController.todos;

        this.render();
      },
      handleToggleTodo: (tdId) => {
        this.todoController.toggleDone(tdId);
        this.models.todos = this.todoController.todos;

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
