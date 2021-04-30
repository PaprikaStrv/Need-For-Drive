import React from 'react';
import OrderInfo from './OrderInfo';
import { connect } from 'react-redux';

const OrderInfoContainer = (props) => {
    return (
        <OrderInfo {...props}/>
    );
}

const mapStateToProps = (state) => ({
    city: state.orderPage.currentInputCityValue,
    address: state.orderPage.currentInputPointValue,
    isModelAvail: state.orderPage.isModelAvailable,
})

export default connect(mapStateToProps)(OrderInfoContainer);