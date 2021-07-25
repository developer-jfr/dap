import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import "./Welcome.css";
function Welcome() {
  const [redirect, setRedirect] = useState(false)
  


  const onClickToDap = () => {
      setRedirect(true)
  
  }

  if(redirect) {
    return <Redirect to={'/daplets'} />
  }
  
    return (
    <div className="welcome__wrapp">
      <div className="welcome__container">
        <div className="welcome__content">
          <h1>Welcome</h1>
          <div className='welcome__text'>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. 
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. 
            </span>
            <span>
              lLorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. 
            </span>
          </div>
          <div className='welcome__btn'>
            <button onClick={onClickToDap} >Desctope</button>
            <button>Mobile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
