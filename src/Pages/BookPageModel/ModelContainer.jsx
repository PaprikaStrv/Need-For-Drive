import React from "react";
import BookPageModel from "./Model";
import {
  getCars,
  setCarModelName,
  setCarModelPriceMin,
  setCarModelPriceMax,
  setCarColor,
} from "./../../Redux/model-reducer";
import { getCategories } from "./../../Redux/orderPage-reducer";
import { useEffect } from "react";
import Preloader from "./../../Components/Preloader/Preloader";
import { connect } from "react-redux";

const BookPageModelContainer = ({
  getCategories,
  getCars,
  models,
  setCarModelName,
  setCarModelPriceMax,
  setCarModelPriceMin,
  setCarColor,
  categories,
  modelName,
}) => {
  useEffect(() => {
    getCategories();
    getCars();
  }, []);

  if (
    !models ||
    models.length === 0 ||
    !categories ||
    categories.length === 0
  ) {
    return <Preloader />;
  }
  return (
    <BookPageModel
      {...{
        models,
        setCarModelName,
        setCarModelPriceMax,
        setCarModelPriceMin,
        setCarColor,
        categories,
        modelName,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  models: state.model.models,
  modelName: state.model.modelName,
  categories: state.orderPage.categories,
});

export default connect(mapStateToProps, {
  getCars,
  getCategories,
  setCarModelName,
  setCarModelPriceMin,
  setCarModelPriceMax,
  setCarColor,
})(BookPageModelContainer);
