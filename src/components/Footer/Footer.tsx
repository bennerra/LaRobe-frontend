import { Container } from "@/layoutes/Container/Container";
import { Link } from "react-router-dom";
import { AppRoutes } from "@/constants/paths";

import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerContainer}>
          <div className={styles.copyright}>Copyright LaRobe, 2025</div>
          <Link to={AppRoutes.ABOUT}>
            <div className={styles.aboutLink}>О нас</div>
          </Link>
        </div>
      </Container>
    </div>
  );
};
