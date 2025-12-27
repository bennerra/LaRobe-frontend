import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  CatalogFieldsKeys,
  CatalogFormConfig,
  CatalogFormData,
  StockVariantsObject,
} from "@/pages/Catalog/constants";
import { NumberField } from "@/components/HookFields/NumberField/NumberField";
import { Button } from "@/ui/Button/Button";
import { CatalogHeader } from "@/components/CatalogHeader/CatalogHeader";
import { Container } from "@/layoutes/Container/Container";
import { SelectField } from "@/components/HookFields/SelectField/SelectField";
import ImageIcon from "@/assets/images/photo.svg";
import StarIcon from "@/assets/images/star.svg";
import { Footer } from "@/components/Footer/Footer";
import { useGetProductsQuery } from "@/store/api/catalogApi";

import styles from "./styles.module.scss";

export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const methods = useForm<CatalogFormData>();
  const filters = methods.watch();
  const totalCount = 30;
  const limit = 10;
  const countPages = Math.ceil(totalCount / limit);
  const { data, isLoading, error } = useGetProductsQuery({
    price__gte: filters[CatalogFieldsKeys.PRICE_GTE],
    price__lte: filters[CatalogFieldsKeys.PRICE_LTE],
    ...(filters[CatalogFieldsKeys.STOCK] === "stock" && { stock: true }),
    ...(filters[CatalogFieldsKeys.STOCK] === "no_stock" && { no_stock: true }),
    page: currentPage,
    limit: 10,
  });

  return (
    <div className={styles.catalogPage}>
      <div className={styles.catalog}>
        <CatalogHeader />
        <Container>
          <h1 className={styles.title}>Каталог</h1>
          <FormProvider {...methods}>
            <form>
              <div className={styles.filters}>
                <div className={styles.filterPrice}>
                  <div className={styles.filterPriceLabel}>Цена</div>
                  <div className={styles.priceInputs}>
                    <NumberField
                      fieldName={CatalogFieldsKeys.PRICE_GTE}
                      placeholder={
                        CatalogFormConfig[CatalogFieldsKeys.PRICE_GTE]
                      }
                    />
                    -
                    <NumberField
                      fieldName={CatalogFieldsKeys.PRICE_LTE}
                      placeholder={
                        CatalogFormConfig[CatalogFieldsKeys.PRICE_LTE]
                      }
                    />
                  </div>
                </div>
                <div className={styles.selectContainer}>
                  <SelectField
                    label={CatalogFormConfig[CatalogFieldsKeys.STOCK]}
                    options={StockVariantsObject}
                    selectedOption={StockVariantsObject[0]}
                    name={CatalogFieldsKeys.STOCK}
                  />
                </div>
              </div>
            </form>
          </FormProvider>
          {isLoading ? (
            <div>Загрузка...</div>
          ) : (
            <div className={styles.cardsList}>
              {data?.results.map((item) => (
                <div className={styles.card}>
                  <div className={styles.image}>
                    <div className={styles.imageIcon}>
                      <ImageIcon />
                    </div>
                    <img src={item?.image} alt="" />
                  </div>
                  <div className={styles.cardPrice}>{item?.price} руб.</div>
                  <div className={styles.cardTitle}>{item?.title}</div>
                  <div className={styles.rating}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        key={i}
                        style={{
                          fill: i < item?.rating.rating ? "#FFCF0F" : "#8E8E8E",
                        }}
                      />
                    ))}
                  </div>
                  <Link to={`/product/${item.slug}`}>
                    <div className={styles.cardButton}>
                      <Button view="accent" text="В карточку" />{" "}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          <div className={styles.pagination}>
            {Array.from({ length: countPages }).map((_, i) => (
              <div
                onClick={() => setCurrentPage(i)}
                className={styles.pageButton}
                key={i}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
