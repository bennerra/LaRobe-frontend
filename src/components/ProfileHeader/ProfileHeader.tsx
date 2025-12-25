import { Link } from "react-router-dom";

import { Container } from "@/layoutes/Container/Container";
import LogoXS from "@/assets/images/logo-xs.svg";
import { Button } from "@/ui/Button/Button";
import { AppRoutes } from "@/constants/paths";

import styles from "./styles.module.scss";

export const ProfileHeader = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerContainer}>
          <Link to={AppRoutes.MAIN}>
            <div className={styles.logo}>
              <LogoXS />
            </div>
          </Link>
          <Link to={AppRoutes.CATALOG}>
            <Button text="Каталог" view="primary" />
          </Link>
        </div>
      </Container>
    </div>
  );
};
