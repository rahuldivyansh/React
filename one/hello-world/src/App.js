import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome.js'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FunctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from "./Components/EventBind";
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';

function App() {
  return (
    <div className="App">
       {/* <Greet name ='Divyansh'/>
      <Greet >
        <p>This is a children para of greet</p>
      </Greet>
      <Welcome name = 'Rahul'/>
      <Message />
      <Counter /> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
     {/* <EventBind /> */}
     {/* <ParentComponent/> */}
     {/* <UserGreeting/> */}
     <NameList />
    </div>
  );
}

export default App;
