import logo from './logo.svg';
import './App.css';

export default function App() {
  const names=["abc","def","ghi"];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"></img>
     

    {names.map((nm)=>
      <Message name={nm}/>)}
    </div>
  );
}
function Message(props){
  
  return <h1>Hello, {props.name}</h1>
  
}

// export default App;
