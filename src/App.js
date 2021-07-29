import logo from './logo.svg';
import './App.css';
import variants from './variants.json';
import SpacingGrid from './components/columns.js';


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
      <SpacingGrid/>
  );
}

export default App;
