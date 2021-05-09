import React from "react";
import BookPageModel from "./Model";
import {
  getCars,
  setCarModelName,
  setCarModelPriceMin,
  setCarModelPriceMax,
} from "./../../Redux/model-reducer";
import {
  getCategories,
} from "./../../Redux/orderPage-reducer";
import { useEffect } from "react";
import Preloader from "./../../Components/Preloader/Preloader";
import { connect } from "react-redux";

const BookPageModelContainer = (props) => {
  useEffect(() => {
    props.getCategories();
    props.getCars();
  }, []);

  if (!props.models || props.models.length === 0 || !props.categories || props.categories.length === 0) {
    return <Preloader />;
  }
  return <BookPageModel {...props} />;
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
})(BookPageModelContainer);
