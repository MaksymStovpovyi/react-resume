import React from "react";

import PortfolioContainer from "./components/PortfolioContainer";


function App() {
  return (
    <div>

      <PortfolioContainer/>

      <div className='footer'>
        <a href="https://github.com/MaksymStovpovyi">
          <div className='git-ico'></div>
        </a>
        <a href="https://www.linkedin.com/in/maksym-stovpovyi-058747208/">
          <div className='linkedin-ico'></div>
        </a>
      </div>
      
    </div>
  );
}

export default App;
