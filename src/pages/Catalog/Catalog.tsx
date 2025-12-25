import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

import {
  BrandsVariantsObject,
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

import styles from "./styles.module.scss";

const RATING = 3;

export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const methods = useForm<CatalogFormData>();
  const totalCount = 30;
  const limit = 10;
  const countPages = Math.ceil(totalCount / limit);

  return (
    <div className={styles.catalogPage}>
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
                    placeholder={CatalogFormConfig[CatalogFieldsKeys.PRICE_GTE]}
                  />
                  -
                  <NumberField
                    fieldName={CatalogFieldsKeys.PRICE_LTE}
                    placeholder={CatalogFormConfig[CatalogFieldsKeys.PRICE_LTE]}
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
              <div className={styles.selectContainer}>
                <SelectField
                  label={CatalogFormConfig[CatalogFieldsKeys.BRANDS]}
                  options={BrandsVariantsObject}
                  selectedOption={BrandsVariantsObject[0]}
                  name={CatalogFieldsKeys.BRANDS}
                />
              </div>
            </div>
          </form>
        </FormProvider>
        <div className={styles.cardsList}>
          <div className={styles.card}>
            <div className={styles.image}>
              <div className={styles.imageIcon}>
                <ImageIcon />
              </div>
              <img src="" alt="" />
            </div>
            <div className={styles.cardPrice}>34433 руб.</div>
            <div className={styles.cardTitle}>Платье-сарафан</div>
            <div className={styles.rating}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  style={{ fill: i < RATING ? "#FFCF0F" : "#8E8E8E" }}
                />
              ))}
            </div>
            <div className={styles.cardButton}>
              <Button view="accent" text="В карточку" />{" "}
            </div>
          </div>
        </div>
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
  );
};
