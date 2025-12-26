import StarIcon from "@/assets/images/star.svg";

import styles from "./style.module.scss";

const RATING = 3;

export const Review = () => {
  return (
    <div className={styles.review}>
      <div className={styles.reviewTop}>
        <div className={styles.reviewDate}>24.10.24</div>
        <div className={styles.reviewStars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              style={{ fill: i < RATING ? "#FFCF0F" : "#8E8E8E" }}
            />
          ))}
        </div>
      </div>
      <div className={styles.reviewName}>Платье-сарафан</div>
      <div className={styles.reviewDescription}>
        Платье очень понравилось! Размер соответветствует размерной сетке. Цвет
        как на фото. Материал очень качественный. Берите, не пожалеете!
      </div>
    </div>
  );
};
