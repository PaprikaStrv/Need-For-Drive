import React from "react";
import BookPageModel from "./Model";
import {
  getCars,
  setCarColor,
  setDiffDate,
  setCarRate,
  unsetCarParams,
  setCurrentModel,
  setStartDate,
  setEndDate,
} from "./../../Redux/model-reducer";
import { getCategories } from "./../../Redux/orderPage-reducer";
import { useEffect } from "react";
import Preloader from "./../../Components/Preloader/Preloader";
import { connect } from "react-redux";

const BookPageModelContainer = ({
  getCategories,
  getCars,
  models,
  setCarColor,
  categories,
  modelName,
  setDiffDate,
  setCarRate,
  unsetCarParams,
  setCurrentModel,
  currentModel,
  setStartDate,
  setEndDate,
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
        setCarColor,
        categories,
        modelName,
        setDiffDate,
        setCarRate,
        unsetCarParams,
        setCurrentModel,
        currentModel,
        setStartDate,
        setEndDate,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  models: state.model.models,
  categories: state.orderPage.categories,
  currentModel: state.model.currentModel,
});

export default connect(mapStateToProps, {
  getCars,
  getCategories,
  setCarColor,
  setDiffDate,
  setCarRate,
  unsetCarParams,
  setCurrentModel,
  setStartDate,
  setEndDate,
})(BookPageModelContainer);
