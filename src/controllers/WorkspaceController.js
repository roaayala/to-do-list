import Workspace from "../models/Workspace";
import generateId from "../utils/generateId";

export default class WorkspaceController {
  constructor(workspaces) {
    this.workspaces = workspaces;
  }

  addWorkspace(name, description) {
    const newId = generateId("workspace");
    const newName = name;
    const newDescription = description;

    const newWorkspace = new Workspace(newId, newName, newDescription);

    this.workspaces = [...this.workspaces, newWorkspace];
    return newWorkspace;
  }

  removeWorkspace(id) {}

  editWorkspace(editedWorkspace) {}
}
