export interface ActionProps {
  type: string;
  text?: string;
  id?: string;
}

export interface StateProps {
  text: string;
  id: number;
}

export interface Todo {
  id: number;
  text: string;
}

export interface CreateActionProps {
  type: string;
  payload: string;
  id: string;
}