export const enum AuthFormFieldsKeys {
  LOGIN = "username",
  PASSWORD = "password",
}

export const AuthFormConfig = {
  [AuthFormFieldsKeys.LOGIN]: "Логин",
  [AuthFormFieldsKeys.PASSWORD]: "Пароль",
};

export type SignInFormData = {
  [AuthFormFieldsKeys.LOGIN]: string;
  [AuthFormFieldsKeys.PASSWORD]: string;
};
