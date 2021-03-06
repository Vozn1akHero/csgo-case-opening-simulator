import React from "react";
import styles from "./CaseOpeningConfirmation.module.scss";
import Item from "../Item/Item";
import { GreenButton } from "../GreenButton/GreenButton";
import { itemType } from "../../helpers/item-type";
export const CaseOpeningConfirmation = (props) => {
  return (
    <div className={styles.caseOpeningConfirmation}>
      <div className={styles.itemWrap}>
        <Item type={itemType.GREY} image={props.image} weapon={props.title} />
      </div>

      <GreenButton onClick={() => props.onSubmit()} text={"Continue"} />
    </div>
  );
};
