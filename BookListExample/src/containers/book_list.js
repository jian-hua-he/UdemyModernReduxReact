import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={ book.title }
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book) }>
                    { book.title }
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        books: state.books,
    };
}

function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should
    // be passed to all our reducers
    return bindActionCreators({
        selectBook: selectBook,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
