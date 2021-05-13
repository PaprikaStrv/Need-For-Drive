import React from 'react';
import BookPage from './BookPage';
import { connect } from 'react-redux';


const BookPageContainer = ({isAvail}) => {
    return (
        <BookPage {...isAvail}/>
    );
}

const mapStateToProps = (state) => ({
    isAvail: state.orderPage.isModelAvailable
})

export default connect(mapStateToProps)(BookPageContainer);