import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { getCategories, deleteCategory } from './categoryAction.jsx'
import Category from './category.jsx';
import "isomorphic-fetch";

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { query: '' };
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    componentDidMount() {
        this.getCategories();
    }

    deleteCategory(categoryId) {
        let pageIndex;
        const parsed = queryString.parse(location.search);
        if (parsed) {
            pageIndex = parsed['pageIndex'];
        }
        this.props.deleteCategory(categoryId, pageIndex);
    }

    getCategories() {
        let pageIndex;
        const parsed = queryString.parse(location.search);
        if (parsed) {
            pageIndex = parsed['pageIndex'];
        }
        this.props.getCategories(pageIndex);
    }

    componentWillReceiveProps(nextProps) {
            this.getCategories();
    }

    render() {
        const total = this.props.categories.totalPages;
        const pageSize = this.props.categories.pageSize;
        const pageNumbers = [];
        let queryTrailer = '';
        for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li key={number}>
                    <Link className="link" to={"/categories?pageIndex=" + (number - 1) + queryTrailer}>{number}</Link>
                </li>
            );
        });

        let categories = this.props.categories.records.map(item => {
            return (
                <Category key={item.id} data={item} isFull={false} deleteCategory={this.deleteCategory} />
            );
        });

        return (
            <div >
                <div>
                    {categories}
                    <div>
                        <ul className="pagingNumber">
                            {renderPageNumbers}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
};

let mapProps = (state) => {
    return {
        categories: state.categories.data,
        error: state.error,
    }
}

let mapDispatch = (dispatch) => {
    return {
        getCategories: bindActionCreators(getCategories, dispatch),
        deleteCategory: bindActionCreators(deleteCategory, dispatch)
    }
}

export default connect(mapProps, mapDispatch)(CategoryList) 
