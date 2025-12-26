import { FC } from "react";

import { CatalogHeader } from "@/components/CatalogHeader/CatalogHeader";
import { Container } from "@/layoutes/Container/Container";
import { contacts, principles } from "@/pages/About/constants";

import styles from "./styles.module.scss";

export const About: FC = () => {
  return (
    <div className={styles.aboutPage}>
      <CatalogHeader />
      <Container>
        <div className={styles.info}>
          <div className={styles.title}>
            <span className={styles.titleAccent}>La Robe - </span>
            <span>Искусство женственности</span>
          </div>
          <div className={styles.infoDesc}>
            С 2010 года мы создаем платья, которые становятся частью вашей
            легенды. аша миссия: объединить мастерство европейских ателье с
            пониманием современных тенденций, создавая вещи вне времени.
          </div>
        </div>
        <div className={styles.principles}>
          <div className={styles.blockTitle}>Наши принципы:</div>
          <div className={styles.principleList}>
            {principles.map((item, index) => (
              <div className={styles.principle} key={index}>
                <div className={styles.principleImage}>
                  <img src={item.image} alt="" />
                </div>
                <div className={styles.principleInfo}>
                  <div className={styles.principleTitle}>{item.title}</div>
                  <div className={styles.principleList}>
                    {item.items.map((item, index) => (
                      <div className={styles.principleItem} key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.blockTitle}>Контакты</div>
          <div className={styles.contactList}>
            {contacts.map((item) => (
              <div className={styles.contact} key={item.label}>
                {item.label}:{" "}
                <span className={styles.contactValue}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
