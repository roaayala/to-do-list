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

    const newWorkspace = new Workspace({
      id: newId,
      name: newName,
      description: newDescription,
    });

    this.workspaces = [...this.workspaces, newWorkspace];
    return newWorkspace;
  }

  removeWorkspace(id) {
    this.workspaces = this.workspaces.filter(
      (workspace) => workspace.id !== id,
    );
  }

  editWorkspace(wsId, editedWs) {
    this.workspaces = this.workspaces.map((workspace) => {
      if (workspace.id === wsId) {
        return {
          ...workspace,
          ...editedWs,
        };
      }
      return workspace;
    });
  }
}
