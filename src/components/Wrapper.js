import React from 'react';
import {Provider} from 'react-redux';

// const Wrapper = Component => (
//   <Provider store={store}>
//     <div>
//       <div>123</div>
//       <Component/>
//     </div>
//   </Provider>
// );

const Wrapper = Component => props => (
  <div>
    <Component {...props}/>
  </div>
)

export default Wrapper;
