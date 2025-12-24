export const enum AuthFormFieldsKeys {
  LOGIN = "login",
  PASSWORD = "password",
}

export const AuthFormConfig = {
  [AuthFormFieldsKeys.LOGIN]: "Логин",
  [AuthFormFieldsKeys.PASSWORD]: "Пароль",
};

export type FormData = {
  [AuthFormFieldsKeys.LOGIN]: string;
  [AuthFormFieldsKeys.PASSWORD]: string;
};
