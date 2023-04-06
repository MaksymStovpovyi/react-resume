import React from "react";

import PortfolioContainer from "./components/PortfolioContainer";


function App() {
  return (
    <div>

      <PortfolioContainer/>

      <div className='footer'>
        <a href="https://github.com/MaksymStovpovyi" target="_blank" rel="noreferrer">
          <div className='git-ico'></div>
        </a>
        <a href="https://www.linkedin.com/in/maksymstovpovyi/" target="_blank" rel="noreferrer">
          <div className='linkedin-ico'></div>
        </a>
      </div>
      
    </div>
  );
}

export default App;
