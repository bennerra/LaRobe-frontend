import { MainPageHeader } from "@/components/MainPageHeader/MainPageHeader";
import main1 from "@/assets/images/main1.png";
import main2 from "@/assets/images/main2.png";
import main3 from "@/assets/images/main3.png";
import ArrowLink from "@/assets/images/arrowLink.svg";

import styles from "./styles.module.scss";

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainContainer}>
        <MainPageHeader />
        <div className={styles.content}>
          <div className={styles.imgLeft}>
            <img src={main1} alt="" />
          </div>
          <div className={styles.imgTop}>
            <img src={main2} alt="" />
          </div>
          <div className={styles.imgRight}>
            <img src={main3} alt="" />
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>Найдите свое «то самое»</h1>
            <p>
              Идеальное платье ждет своего момента. И свою героиню. Мы создаем
              гардероб для ваших самых важных «сегодня». От легкого дня до
              блестящего вечера. Ваша история начинается здесь.
            </p>
            <div className={styles.link}>
              <div>Перейти к каталогу</div>
              <ArrowLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
