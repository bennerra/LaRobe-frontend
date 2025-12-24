import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

import { LoginHeader } from "@/components/LoginHeader/LoginHeader";
import { Container } from "@/layoutes/Container/Container";
import { TextField } from "@/components/HookFields/TextField/TextField";
import {
  AuthFormConfig,
  AuthFormFieldsKeys,
  FormData,
} from "@/pages/LoginPage/constants";
import { PasswordField } from "@/components/HookFields/PasswordField/PasswordField";
import { Button } from "@/ui/Button/Button";
import { Link } from "react-router-dom";
import { AppRoutes } from "@/constants/paths";
import { AuthScheme } from "@/constants/AuthScheme";
import { MessageModal } from "@/ui/MessageModal/MessageModal";

import styles from "./styles.module.scss";

export const LoginPage = () => {
  const methods = useForm({
    mode: "onSubmit",
  });
  const { handleSubmit, formState } = methods;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [errorText, setErrorText] = useState("");
  const errors = formState.errors;
  const isError = !!Object.keys(errors).length;

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const checkError = () => {
    if (!isError) return;

    const errorsMessage = Object.keys(errors)
      .map(
        (key) =>
          `${AuthFormConfig[key as AuthFormFieldsKeys]}: ${errors[key]?.message}`,
      )
      .join("\n");
    setErrorText(errorsMessage);
    handleOpenModal();
  };

  return (
    <div className={styles.loginPage}>
      <LoginHeader />
      <Container>
        <div className={styles.loginForm}>
          <h2 className={styles.loginTitle}>Вход</h2>
          <FormProvider {...methods}>
            <form
              className={styles.form}
              onSubmit={handleSubmit(onSubmit, checkError)}
            >
              <TextField
                fieldName={AuthFormFieldsKeys.LOGIN}
                placeholder={AuthFormConfig[AuthFormFieldsKeys.LOGIN]}
                rules={AuthScheme[AuthFormFieldsKeys.LOGIN]}
              />
              <PasswordField
                fieldName={AuthFormFieldsKeys.PASSWORD}
                placeholder={AuthFormConfig[AuthFormFieldsKeys.PASSWORD]}
                rules={AuthScheme[AuthFormFieldsKeys.PASSWORD]}
              />
              <div className={styles.actions}>
                <Button type="submit" view="accent" text="Войти" />
                <div className={styles.linkContainer}>
                  Еще нет аккаунта?{" "}
                  <Link to={AppRoutes.REGISTRATION}>
                    <span className={styles.link}>Зарегистрироваться</span>
                  </Link>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </Container>
      {isOpenModal && (
        <MessageModal
          text={errorText}
          isOpen={isOpenModal}
          setIsOpen={setIsOpenModal}
        />
      )}
    </div>
  );
};
