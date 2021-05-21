import React from 'react';
import BookPage from './BookPage';
import { connect } from 'react-redux';


const BookPageContainer = ({isAvail, isConfirmFormActive}) => {
    return (
        <BookPage {...{isAvail, isConfirmFormActive}}/>
    );
}

const mapStateToProps = (state) => ({
    isAvail: state.orderPage.isModelAvailable,
    isConfirmFormActive: state.orderPage.isConfirmFormActive,
})

export default connect(mapStateToProps)(BookPageContainer);