import logo from './logo.svg';
import './App.css'
import Data from './TemplateData.json';
import Menu from './component/common/Menu';
import Cart from './component/page/Cart';
import Category from './component/page/Category';
import Home from './component/page/Home';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
    <div className="templateContainer">
      <div ClassName="SearchInput_Container">
        <input id="searchInput" types="text" placeholder="Search..." onChange={(event) =>{
         setSearchTerm(event.target.vaule);
         }} />
      </div>

      <div className="template_Container">
        {
          Data
          .filter((val) => {
            if(searchTerm == ""){
              return val;
            }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){



            }
          })
          .map((val) => {
            return(
              <div className="template" key={val.id}>
                <img src={val.imagine} alt="" />
                <h3>{val.title}</h3>
                </div>

            )
          })

        }

      </div>
    </div>


    </>


  )
}

export default App;



