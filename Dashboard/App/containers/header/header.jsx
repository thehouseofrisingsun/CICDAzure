import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {

        return (
            <header>
                <div id="photoTitle"></div>
                <div id="title">Admin app</div>
                <menu className="menu">
                    <ul>
                        <div>
                            <Link to="/category">Categories</Link>
                        </div>
                        <div>
                            <Link to="/venues">Venues</Link>
                        </div>
                        <div>
                            <Link to="/events">Events</Link>
                        </div>
                    </ul>
                </menu>
            </header>
        );
    }
};

export default Header