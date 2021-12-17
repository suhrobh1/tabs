import React from "react";

const Display = (props) => {

    const {tabSelection, setTabSelection} = props;

    return (
        <div style={{width:"75%", margin:"auto"}}>
            
            <div style={{ display: "flex", justifyContent:"space-around" }}>
                {
                tabSelection.map((tab, index) => (
                   
                    <div
                        style={{
                            color: "green",
                            border: "3px double black",
                            width: "20%",
                        }}
                        key={index}
                    >
                        <p>Name: {tab.text}</p>
                        
                    
            
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default Display;