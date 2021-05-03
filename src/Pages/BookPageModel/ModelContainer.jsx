import React from "react";
import BookPageModel from "./Model";
import {
  getCars,
  setCarModelName,
  setCarModelPriceMin,
  setCarModelPriceMax,
} from "./../../Redux/model-reducer";
import { useEffect } from "react";
import Preloader from "./../../Components/Preloader/Preloader";
import { connect } from "react-redux";

const BookPageModelContainer = (props) => {
  useEffect(() => {
    props.getCars();
  }, []);

  if (!props.models || props.models.length === 0) {
    return <Preloader />;
  }
  return <BookPageModel {...props} />;
};

const mapStateToProps = (state) => ({
  models: state.model.models,
  modelName: state.model.modelName,
});

export default connect(mapStateToProps, {
  getCars,
  setCarModelName,
  setCarModelPriceMin,
  setCarModelPriceMax,
})(BookPageModelContainer);
