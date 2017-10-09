import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import PropTypes from 'prop-types';

import styled from 'styled-components';

// Pages
import '$styles/main.scss';

const App = ({ className }) => (
  <Router>
    <div className={ className }>
      <Route exect path="/test" component={() => (<Link to={'/writer'}>Rendering with React 2</Link>)} />
    </div>
  </Router>
);

App.propTypes = {
  match: PropTypes.any.isRequired,
};

export default styled(App)`
  height: 100%;
  width: 100%;
`;
