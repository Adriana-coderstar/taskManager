export interface ICreate {
  id?: number;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
