import { RegistrationFormFieldsKeys } from "@/pages/RegistrationPage/constants";
import { Regexps } from "@/constants/regexps";

export const RegistrationScheme = {
  [RegistrationFormFieldsKeys.LOGIN]: {
    required: {
      value: true,
      message: "Это обязательное поле!",
    },
    pattern: {
      value: Regexps.login,
      message: "Логин введен неправильно! Можно использовать только латиницу.",
    },
    minLength: {
      value: 3,
      message: "Минимальная длина - 3 символа",
    },
  },
  [RegistrationFormFieldsKeys.NICKNAME]: {
    required: {
      value: true,
      message: "Это обязательное поле!",
    },
    maxLength: {
      value: 50,
      message: "Максимальная длина - 50 символов",
    },
  },
  [RegistrationFormFieldsKeys.FIRST_NAME]: {
    required: {
      value: true,
      message: "Это обязательное поле!",
    },
    pattern: {
      value: Regexps.name,
      message: "Имя введено неправильно! Можно использовать только кириллицу.",
    },
  },
  [RegistrationFormFieldsKeys.LASTNAME]: {
    required: {
      value: true,
      message: "Это обязательное поле!",
    },
    pattern: {
      value: Regexps.name,
      message:
        "Фамилия введена неправильно! Можно использовать только кириллицу.",
    },
  },
  [RegistrationFormFieldsKeys.PATRONYMIC]: {
    pattern: {
      value: Regexps.name,
      message:
        "Отчество введено неправильно! Можно использовать только кириллицу.",
    },
  },
  [RegistrationFormFieldsKeys.SEX]: {
    required: {
      value: true,
      message: "Это обязательное поле!",
    },
  },
  [RegistrationFormFieldsKeys.PHONE_NUMBER]: {
    required: {
      value: true,
      message: "Это обязательное поле!",
    },
  },
  [RegistrationFormFieldsKeys.EMAIL]: {
    required: {
      value: true,
      message: "Это обязательное поле!",
    },
    pattern: {
      value: Regexps.email,
      message: "Email введен неправильно!",
    },
  },
  [RegistrationFormFieldsKeys.PASSWORD]: {
    required: {
      value: true,
      message: "Это обязательное поле!",
    },
  },
};
