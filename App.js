import React from 'react';
import Header from './Header';
import Main  from './Main';
import Cards from './Cards'
const App = () => {
  const appContainerStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5', // Page background color
  };

  const mainContentStyle = {
    marginTop: '20px',
    background: 'white', // Content background
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Optional shadow
  };

  return (
    <div style={appContainerStyle}>
      <Header />
      <br/>
      <div >
        <Main/>
      </div>
       <div >
        <Cards/>
      </div>
    </div>
  );
};

export default App;
