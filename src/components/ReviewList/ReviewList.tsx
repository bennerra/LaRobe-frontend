import { Review } from "@/components/Review/Review";

import styles from "./styles.module.scss";

export const ReviewList = () => {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviewTitle}>Отзывы</div>
      <div className={styles.reviewList}>
        <Review />
      </div>
    </div>
  );
};
