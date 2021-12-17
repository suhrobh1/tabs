import React, {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs';
// import Display from './components/Display';

function App() {

  const arrayTabs = [
    {
      tab: "Tab 1", //0
      text: "Tab 1 content here",
    },
    {
      tab: "Tab 2", //1
      text: "Tab 2 content here",
    },
    {
      tab: "Tab 3", //2
      text: "Tab 3 content here",
    },
  ];


  const [tabSelection, setTabSelection] = useState(arrayTabs);

  const [activeTab, setActiveTab] =useState(0);

  return (
    <div>
      <Tabs tabSelection = {tabSelection} setTabSelection = {setTabSelection} setActiveTab = {setActiveTab} activeTab = {activeTab}/>
      <p className='contentBox'>{tabSelection[activeTab].text}</p>
    </div>
  );
}

export default App;