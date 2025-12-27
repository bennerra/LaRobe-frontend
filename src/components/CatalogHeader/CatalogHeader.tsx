import { Link } from "react-router-dom";

import { Container } from "@/layoutes/Container/Container";
import LogoXS from "@/assets/images/logo-xs.svg";
import { Button } from "@/ui/Button/Button";
import { AppRoutes } from "@/constants/paths";
import { Storage } from "@/constants/storage";

import styles from "./styles.module.scss";

export const CatalogHeader = () => {
  const isAuth = !!localStorage.getItem(Storage.token);

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerContainer}>
          <Link to={AppRoutes.MAIN}>
            <div className={styles.logo}>
              <LogoXS />
            </div>
          </Link>
          <Link to={isAuth ? AppRoutes.PROFILE : AppRoutes.AUTH}>
            <Button text={isAuth ? "Личный кабинет" : "Войти"} view="primary" />
          </Link>
        </div>
      </Container>
    </div>
  );
};
