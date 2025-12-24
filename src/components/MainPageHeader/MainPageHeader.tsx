import { Link } from "react-router-dom";

import { Container } from "@/layoutes/Container/Container";
import Logo from "@/assets/images/logo.svg";
import LogoXS from "@/assets/images/logo-xs.svg";
import { Button } from "@/ui/Button/Button";
import { useResize } from "@/hooks/useResize";
import { AppRoutes } from "@/constants/paths";

import styles from "./styles.module.scss";

export const MainPageHeader = () => {
  const { isScreenLg } = useResize();

  return (
    <Container>
      <div className={styles.logoContainer}>
        <Link to="/">
          <div className={styles.logo}>
            {isScreenLg ? <LogoXS /> : <Logo />}
          </div>
        </Link>
        <div className={styles.buttons}>
          <Link to={AppRoutes.AUTH}>
            <Button text="Войти" view={isScreenLg ? "primary" : "accent"} />
          </Link>
          {!isScreenLg && (
            <Link to={AppRoutes.REGISTRATION}>
              <Button text="Регистрация" view="primary" />
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};
