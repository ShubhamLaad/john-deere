import { createHashHistory } from 'history';
import { IndexRoute, Router, Route, useRouterHistory } from 'react-router';

const history = useRouterHistory(createHashHistory)();

import Container from '../container/index';
import SearchListing from '../components/search-listing';

const Root = React.createClass({
    render() {
        return (
            <Router history = {history}>
                <Route name='container' path='/' component={Container}>
                    <IndexRoute component={SearchListing} />
                </Route>
            </Router>
        );
    }
});

export default Root;
