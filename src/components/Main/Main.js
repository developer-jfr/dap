import React, {useState} from "react";
import './MainStyles.css'

import CreateForm from "../CreateForm/CreateForm";
import Dapplets from "../Dapplets/Dapplets";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";


const Main = (props) => {
 const [clicked, setClicked] = useState(false);
  return (
    <div className={` ${clicked ? 'main__slide' : 'main'}`}>
     <Header />
      <Navbar clicked={clicked} setClicked={setClicked}  />
       <Dapplets clicked={clicked} />
      <CreateForm />
    </div>
  );
};

export default Main;
