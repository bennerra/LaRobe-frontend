export const Regexps = {
  login: /^[A-Za-z]{3,}$/,
  name: /^[А-Яа-яЁё]+$/,
  email:
    /^(?=.{1,64}@)[A-Za-z0-9_-]+(.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(.[A-Za-z0-9-]+)*(.[A-Za-z]{2,})$/,
};
