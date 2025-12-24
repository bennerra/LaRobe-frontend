import { AuthFormFieldsKeys } from "@/pages/LoginPage/constants";

export const AuthScheme = {
  [AuthFormFieldsKeys.LOGIN]: {
    required: {
      value: true,
      message: "Это обязательное поле!",
    },
  },
  [AuthFormFieldsKeys.PASSWORD]: {
    required: {
      value: true,
      message: "Это обязательное поле!",
    },
  },
};
