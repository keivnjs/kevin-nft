import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { KevinNFTProvider } from './context/NftContext';

ReactDOM.render(
  <KevinNFTProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </KevinNFTProvider>,
  document.getElementById('root')
);
