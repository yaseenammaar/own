import logo from './logo.svg';
import './App.css';
import SpacingGrid from './columns.js';
import variants from './variants.json';



function getCoolNames(domain){
  var names = "";
  console.log("Domain : ", domain)
  if(domain.includes('o')||domain.includes('O')){
    console.log(variants["O"]);
    variants["O"].forEach(v=>{
      console.log("Cool Domains : ", v)
      names = names + ", "+ domain.replace(/o/g, v);
    })
  }
  console.log("Cool Domains : ", names)
  return names;
}

getCoolNames("google.com")


// console.log(variants);


function App() {
  return (
    // <div className="App">
    //   <input className="inp" placeholder="Search Your Domain"/>
      <SpacingGrid/>
     // </div>
  );
}

export default App;
