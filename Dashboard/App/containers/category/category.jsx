import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default class Category extends React.Component {

    render() {
        let deleteBlock;
        if (this.props.isLogged) {
            deleteBlock =
                <a className="link" onClick={() => {
                    if (confirm('Are you sure you want to delete category?')) {
                        this.props.deleteCategory(this.props.data.id);
                    }
                }}>Delete</a>;
        }

        return (
            <div>
                <div>
                    <p>{this.props.data.name}</p>
                    <p>{this.props.data.parentCategoryName}</p>
                </div>
            </div>
        );
    }
};