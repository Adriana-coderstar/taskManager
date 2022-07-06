export interface ICreateTasks {
  id?: number;
  task: string;
  status: string;
  userId?: number;
}

export interface IFindTasks {
  userId: number;
}
