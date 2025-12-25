import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  contractText,
  FormData,
  policyText,
  RegistrationFormConfig,
  RegistrationFormFieldsKeys,
  SexVariantsObject,
} from "@/pages/RegistrationPage/constants";
import { Container } from "@/layoutes/Container/Container";
import { TextField } from "@/components/HookFields/TextField/TextField";
import { PasswordField } from "@/components/HookFields/PasswordField/PasswordField";
import { Button } from "@/ui/Button/Button";
import { AppRoutes } from "@/constants/paths";
import { MessageModal } from "@/ui/MessageModal/MessageModal";
import { RegistrationScheme } from "@/constants/RegistrationScheme";
import { RegistrationHeader } from "@/components/RegistrationHeader/RegistrationHeader";
import { SelectField } from "@/components/HookFields/SelectField/SelectField";
import { PhoneNumberField } from "@/components/HookFields/PhoneNumberField/PhoneNumberField";
import { EmailField } from "@/components/HookFields/EmailField/TextField";
import { Checkbox } from "@/ui/CheckBox/CheckBox";
import { Modal } from "@/ui/Modal";
import { Storage } from "@/constants/storage";
import { useSignupMutation } from "@/store/api/authApi";

import styles from "./styles.module.scss";

export const RegistrationPage = () => {
  const methods = useForm({
    mode: "onSubmit",
  });
  const { handleSubmit, formState } = methods;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isOpenPolicyModal, setIsOpenPolicyModal] = useState(false);
  const [isOpenContractModal, setIsOpenContractModal] = useState(false);
  const errors = formState.errors;
  const isError = !!Object.keys(errors).length;
  const [register] = useSignupMutation();

  useEffect(() => {
    if (localStorage.getItem(Storage.token)) {
      window.location.href = AppRoutes.PROFILE;
    }
  }, []);

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const handleOpenPolicyModal = () => {
    setIsOpenPolicyModal((prev) => !prev);
  };

  const handleOpenContractModal = () => {
    setIsOpenContractModal((prev) => !prev);
  };

  const onSubmit = async (data: FormData) => {
    if (!isConfirmed) {
      setErrorText("Согласие на обработку персональных данных обязательно");
      handleOpenModal();

      return;
    }
    const phone_number = data[RegistrationFormFieldsKeys.PHONE_NUMBER].replace(
      /\D/g,
      "",
    );
    if (phone_number.length != 11) {
      setErrorText("Ваш номер телефона НЕВАЛИДЕН.");
      handleOpenModal();

      return;
    }
    data[RegistrationFormFieldsKeys.PHONE_NUMBER] = phone_number;
    try {
      const result = await register(data).unwrap();
      if (result && result.token) {
        localStorage.setItem(Storage.token, result.token);
        window.location.href = AppRoutes.PROFILE;
      }
    } catch (e) {
      setErrorText("Ошибка! Попробуйте ещё раз, но позже.");
      handleOpenModal();
    }
  };

  const checkError = () => {
    if (!isError) return;

    const errorsMessage = Object.keys(errors)
      .map(
        (key) =>
          `${RegistrationFormConfig[key as RegistrationFormFieldsKeys]}: ${errors[key]?.message}`,
      )
      .join("\n");
    setErrorText(errorsMessage);
    handleOpenModal();
  };

  const handleChangeCheckbox = () => {
    setIsConfirmed((prev) => !prev);
  };

  return (
    <div className={styles.registrationPage}>
      <RegistrationHeader />
      <Container>
        <div className={styles.registrationForm}>
          <h2 className={styles.registrationTitle}>Регистрация</h2>
          <FormProvider {...methods}>
            <form
              className={styles.form}
              onSubmit={handleSubmit(onSubmit, checkError)}
            >
              <TextField
                fieldName={RegistrationFormFieldsKeys.LOGIN}
                placeholder={
                  RegistrationFormConfig[RegistrationFormFieldsKeys.LOGIN]
                }
                rules={RegistrationScheme[RegistrationFormFieldsKeys.LOGIN]}
              />
              <TextField
                fieldName={RegistrationFormFieldsKeys.NICKNAME}
                placeholder={
                  RegistrationFormConfig[RegistrationFormFieldsKeys.NICKNAME]
                }
                rules={RegistrationScheme[RegistrationFormFieldsKeys.NICKNAME]}
              />
              <TextField
                fieldName={RegistrationFormFieldsKeys.FIRST_NAME}
                placeholder={
                  RegistrationFormConfig[RegistrationFormFieldsKeys.FIRST_NAME]
                }
                rules={
                  RegistrationScheme[RegistrationFormFieldsKeys.FIRST_NAME]
                }
              />
              <TextField
                fieldName={RegistrationFormFieldsKeys.LASTNAME}
                placeholder={
                  RegistrationFormConfig[RegistrationFormFieldsKeys.LASTNAME]
                }
                rules={RegistrationScheme[RegistrationFormFieldsKeys.LASTNAME]}
              />
              <TextField
                fieldName={RegistrationFormFieldsKeys.PATRONYMIC}
                placeholder={
                  RegistrationFormConfig[RegistrationFormFieldsKeys.PATRONYMIC]
                }
                rules={
                  RegistrationScheme[RegistrationFormFieldsKeys.PATRONYMIC]
                }
              />
              <SelectField
                label="Пол"
                options={SexVariantsObject}
                selectedOption={SexVariantsObject[0]}
                name={RegistrationFormFieldsKeys.SEX}
                rules={RegistrationScheme[RegistrationFormFieldsKeys.SEX]}
              />
              <EmailField
                placeholder={
                  RegistrationFormConfig[RegistrationFormFieldsKeys.EMAIL]
                }
                fieldName={RegistrationFormFieldsKeys.EMAIL}
                rules={RegistrationScheme[RegistrationFormFieldsKeys.EMAIL]}
              />
              <PhoneNumberField
                placeholder={
                  RegistrationFormConfig[
                    RegistrationFormFieldsKeys.PHONE_NUMBER
                  ]
                }
                name={RegistrationFormFieldsKeys.PHONE_NUMBER}
                rules={
                  RegistrationScheme[RegistrationFormFieldsKeys.PHONE_NUMBER]
                }
              />
              <PasswordField
                fieldName={RegistrationFormFieldsKeys.PASSWORD}
                placeholder={
                  RegistrationFormConfig[RegistrationFormFieldsKeys.PASSWORD]
                }
                rules={RegistrationScheme[RegistrationFormFieldsKeys.PASSWORD]}
              />
              <Checkbox
                label="Согласие на обработку персональных данных"
                checked={isConfirmed}
                onClick={handleChangeCheckbox}
              />
              <span className={styles.link} onClick={handleOpenContractModal}>
                Договор публичной оферты
              </span>
              <span className={styles.link} onClick={handleOpenPolicyModal}>
                Политика конфиденциальности
              </span>
              <div className={styles.actions}>
                <Button type="submit" view="accent" text="Зарегистрироваться" />
                <div className={styles.linkContainer}>
                  Уже есть аккаунт?{" "}
                  <Link to={AppRoutes.AUTH}>
                    <span className={styles.link}>Войти</span>
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
      {isOpenContractModal && (
        <Modal
          isOpen={isOpenContractModal}
          onClose={handleOpenContractModal}
          title="Договор публичной оферты"
        >
          <div className={styles.modalContent}>
            <div className={styles.modalText}>{contractText}</div>
            <Button
              view="accent"
              text="Ознакомлен"
              onClick={handleOpenContractModal}
            />
          </div>
        </Modal>
      )}
      {isOpenPolicyModal && (
        <Modal
          isOpen={isOpenPolicyModal}
          onClose={handleOpenPolicyModal}
          title="Политика конфиденциальности"
        >
          <div className={styles.modalContent}>
            <div className={styles.modalText}>{policyText}</div>
            <Button
              view="accent"
              text="Ознакомлен"
              onClick={handleOpenPolicyModal}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};
