import './App.css';
import React, { Fragment } from "react";

//components
import MemberList from './components/member/MemberList';
import './variables.css';
import Views from './components/Views';

function App() {
  return(
      <Fragment>
        <div className='container'>
          <Views/>
        </div>
      </Fragment>
  );
}

export default App;
