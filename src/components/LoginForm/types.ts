export interface LoginFormValue {
  user_email: string,
  user_password: string,
  user_name: string;
}

export enum LOGIN_FORM_NAMES {
  EMAIL = 'user_email',
  PASSWORD = 'user_password',
  USER_NAME = "user_name",
}