import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import NewCategory from '../containers/newCategory/newCategory.jsx';
import CategoryList from '../containers/category/categories.jsx'
import VenueList from '../containers/venue/venues.jsx'
import EventList from '../containers/event/events.jsx'

export default class Routing extends React.Component {

    render() {
        return (
                <Switch>
                    <Route path="/category/new" component={NewCategory} />
                    <Route path="/category" component={CategoryList} />
                    <Route path="/venues" component={VenueList} />
                    <Route path="/events" component={EventList} />
                    <Route exact path="/" render={() => (<Redirect to="/category" />)} />
                </Switch>
        );
    }
};
