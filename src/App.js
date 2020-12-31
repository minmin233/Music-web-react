import React, { memo } from 'react';
import {renderRoutes} from 'react-router-config';

import routes from './router';

import YyHeader from './components/header';
import YyFooter from './components/footer';
import {HashRouter} from 'react-router-dom';

const App = memo(() => {
  return (
    <div>
      <HashRouter>
        <YyHeader>{renderRoutes(routes)}</YyHeader>
        <h2>Content</h2>
        <YyFooter></YyFooter>
      </HashRouter>
    </div>
  );
});

export default App;
