import react from "react";
import { connect } from "react-redux";
import ResultOrder from "./ResultOrder";

const ResultOrderContainer = ({ currentModel, addParams, startDate }) => {
  return (
    <ResultOrder
      {...{
        currentModel,
        addParams,
        startDate,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  currentModel: state.model.currentModel,
  addParams: state.model.additionalParameters,
  startDate: state.model.startDate,
});

export default connect(mapStateToProps)(ResultOrderContainer);
