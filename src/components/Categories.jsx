/* eslint-disable */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusChecker } from "../redux/categories/categories";

const Categories = () => {
  const sign = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const statusCheck = () => {
    dispatch(statusChecker());
  };
  return (
    <div>
      <button className="{styles.btn}" type="button" onClick={statusCheck}>
        Check status
      </button>
      <h4>{sign}</h4>
    </div>
  );
};

export default Categories;
