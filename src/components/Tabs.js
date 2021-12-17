import React, {useState} from 'react';
import './Tabs.css';

const Tabs = (props) => {

    const {tabSelection, setTabSelection, setActiveTab, activeTab} = props;



  const tabHandler = (index)=>{
    console.log(index);
    setActiveTab(index);
    }
    
    const styleHandler = (index) =>{
        if (index === activeTab){
            return "dark"
        }else{
            return "white"
        }
        
    };


  return(
    <div className = "main">
        {
        tabSelection.map((item, index) => (
            <div className={`tabButtons ${ styleHandler(index) }`} onClick={(e) => tabHandler(index) }>
                {item.tab}
                </div>
        ))
        }
   
    </div>

  );
};

export default Tabs;