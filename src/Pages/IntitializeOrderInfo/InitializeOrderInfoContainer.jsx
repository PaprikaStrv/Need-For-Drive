import react, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import ResultOrder from "./InitializeOrderInfo";
import queryString from "query-string";
import { getOrderInfo } from "../../Redux/confirmOrder-reducer";
import InitializeOrderInfo from "./InitializeOrderInfo";
import Preloader from "../../Components/Preloader/Preloader";

const IntializeOrderInfoContainer = ({
  currentModel,
  addParams,
  startDate,
  confirmData,
  getOrderInfo,
  orderData,
}) => {
  let history = useHistory();
  useEffect(() => {
    const values = queryString.parse(history.location.search);
    const orderId = values.orderId;
    getOrderInfo(orderId);
  }, [confirmData]);

  if (orderData.length === 0) {
    return <Preloader />;
  }
  return (
    <InitializeOrderInfo
      {...{
        currentModel,
        addParams,
        startDate,
        confirmData,
        getOrderInfo,
        orderData,
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  currentModel: state.model.currentModel,
  addParams: state.model.additionalParameters,
  startDate: state.model.startDate,
  confirmData: state.confirm.confirmData,
  orderData: state.confirm.orderData,
});

export default connect(mapStateToProps, { getOrderInfo })(
  IntializeOrderInfoContainer
);
