import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MultiBalviharPage from './BalviharPage';
//import MultiBalviharPage from './LABVPage';
//import MultiBalviharPage from './BostonBVPage';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(
  <MultiBalviharPage />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
