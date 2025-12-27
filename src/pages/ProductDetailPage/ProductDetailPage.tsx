import { Link, useParams } from "react-router-dom";

import { CatalogHeader } from "@/components/CatalogHeader/CatalogHeader";
import { Container } from "@/layoutes/Container/Container";
import ArrowRedirect from "@/assets/images/arrow-redirect.svg";
import PhotoIcon from "@/assets/images/photo.svg";
import StarIcon from "@/assets/images/star.svg";
import { ReviewList } from "@/components/ReviewList/ReviewList";
import { AppRoutes } from "@/constants/paths";
import { useGetProductQuery } from "@/store/api/catalogApi";

import styles from "./styles.module.scss";

const RATING = 3;

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetProductQuery({ slug: slug || "" });

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
        {!isLoading && !!data ? (
          <div className={styles.productInfo}>
            <div className={styles.productImage}>
              <div className={styles.photoIcon}>
                <PhotoIcon />
              </div>
              <img src={data?.image} alt="" />
            </div>
            <div className={styles.productText}>
              <h1 className={styles.productTitle}>{data?.title}</h1>
              <div className={styles.productStock}>
                В наличии: {data?.count}
              </div>
              <div className={styles.productRating}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    style={{ fill: i < RATING ? "#FFCF0F" : "#8E8E8E" }}
                  />
                ))}
              </div>
              <div className={styles.price}>{data?.price} руб.</div>
              <div className={styles.productDescription}>
                {data?.description}
              </div>
            </div>
          </div>
        ) : (
          <div>Згрузка...</div>
        )}
        <ReviewList />
      </Container>
    </div>
  );
};
