import { FC, useState } from "react";
import cn from "classnames";

import { useOutsideClick } from "@/hooks/useOutsideClickHandler";
import ArrowUpIcon from "@/assets/images/arrow-up.svg";
import ArrowUDownIcon from "@/assets/images/arrow-down.svg";
import { Option } from "./type";

import styles from "./style.module.scss";

type Props = {
  label: string;
  options: Option[];
  onSelect: (option: Option) => void;
  selectedOption: Option | null;
};

export const Select: FC<Props> = (props) => {
  const { label, onSelect, options, selectedOption } = props;
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const ref = useOutsideClick(() => setIsOpenSelect(false));

  const handleClick = () => {
    setIsOpenSelect((v) => !v);
  };

  const handleSelect = (option: Option) => {
    onSelect(option);
    setIsOpenSelect(false);
  };

  return (
    <>
      <div className={styles.select} ref={ref}>
        <div className={styles.selectBox} onClick={handleClick}>
          <div className={styles.selectLabel}>
            {selectedOption ? selectedOption.name : label}
          </div>
          <div className={styles.selectIconWrapper}>
            {isOpenSelect ? <ArrowUpIcon /> : <ArrowUDownIcon />}
          </div>
        </div>
        <div
          className={cn(styles.selectOptions, {
            [styles.optionsOpen]: isOpenSelect,
          })}
        >
          <div className={styles.selectWrapper}>
            {options.map((option) => {
              const isSelected = option.id === selectedOption?.id;
              return (
                <div
                  className={styles.selectOptionWrapper}
                  onClick={() => handleSelect(option)}
                  key={option.id}
                >
                  <div
                    className={cn(styles.selectOption, {
                      [styles.selectedOption]: isSelected,
                    })}
                  >
                    {option.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
