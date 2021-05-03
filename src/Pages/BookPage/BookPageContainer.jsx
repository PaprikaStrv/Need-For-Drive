import React from 'react';
import BookPage from './BookPage';
import { connect } from 'react-redux';


const BookPageContainer = (props) => {
    return (
        <BookPage {...props}/>
    );
}

const mapStateToProps = (state) => ({
    isAvail: state.orderPage.isModelAvailable
})

export default connect(mapStateToProps)(BookPageContainer);