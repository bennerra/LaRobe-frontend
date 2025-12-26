import { Link } from "react-router-dom";

import { CatalogHeader } from "@/components/CatalogHeader/CatalogHeader";
import { Container } from "@/layoutes/Container/Container";
import ArrowRedirect from "@/assets/images/arrow-redirect.svg";
import PhotoIcon from "@/assets/images/photo.svg";
import StarIcon from "@/assets/images/star.svg";
import { ReviewList } from "@/components/ReviewList/ReviewList";
import { AppRoutes } from "@/constants/paths";

import styles from "./styles.module.scss";

const RATING = 3;

export const ProductDetailPage = () => {
  return (
    <div className={styles.productDetailPage}>
      <CatalogHeader />
      <Container>
        <Link to={AppRoutes.CATALOG}>
          <div className={styles.buttonRedirect}>
            <ArrowRedirect />
            <div>Каталог</div>
          </div>
        </Link>
        <div className={styles.productInfo}>
          <div className={styles.productImage}>
            <div className={styles.photoIcon}>
              <PhotoIcon />
            </div>
            <img src="" alt="" />
          </div>
          <div className={styles.productText}>
            <h1 className={styles.productTitle}>Платье-сарафан</h1>
            <div className={styles.productStock}>В наличии: 100шт</div>
            <div className={styles.productRating}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  style={{ fill: i < RATING ? "#FFCF0F" : "#8E8E8E" }}
                />
              ))}
            </div>
            <div className={styles.productDescription}>
              Элегантный сарафан прямого кроя — идеальный вариант для создания
              гармоничного образа на любой случай. Модель выполнена из
              качественного трикотажа с добавлением эластана, что обеспечивает
              идеальную посадку по фигуре и комфорт в течение всего дня.
              Особенности: Классический прямой силуэт с регулируемыми бретелями
              Универсальная длина миди (до середины икры) Скрытая молния сзади
              для удобства надевания Прорезные карманы по бокам Материал не
              мнется и сохраняет форму после стирки Материал: 95% хлопок, 5%
              эластан Цвет: глубокий бордовый Уход: машинная стирка при 30°C,
              глажка на среднем режиме
            </div>
          </div>
        </div>
        <ReviewList />
      </Container>
    </div>
  );
};
