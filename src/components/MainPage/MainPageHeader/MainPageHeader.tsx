import { Container } from "@/layoutes/Container/Container";
import Logo from "@/assets/images/logo.svg";
import LogoXS from "@/assets/images/logo-xs.svg";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Button } from "@/ui/Button/Button";
import { useResize } from "@/hooks/useResize";

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
          <Link to="/">
            <Button text="Войти" view={isScreenLg ? "primary" : "accent"} />
          </Link>
          {!isScreenLg && (
            <Link to="/">
              <Button text="Регистрация" view="primary" />
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};
