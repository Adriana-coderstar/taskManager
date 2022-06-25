export interface ICreate {
  id?: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}
