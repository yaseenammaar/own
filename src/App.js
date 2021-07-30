import logo from './logo.svg';
import './App.css';
import variants from './variants.json';
import SpacingGrid from './components/columns.js';
const vowels = ["a", "e", "i", "o", "u", "y"];



function isVowel(word) {
    let result = false;
    let split = word.split('.');
    console.log(split[0])
    for (let i = 0; i < split[0].length; i++) {
        if (vowels.includes(split[0][i])) {
            getCoolNames(split[0])
            // result = true;
            // break;
        }
    }
    // console.log(result)
    return result;
  }



function getCoolNames(domain){
  var names = "";
  console.log("Domain : ", domain)

  if(domain.includes('o')||domain.includes('O')){
    variants["O"].forEach(v=>{
      names = names + ", "+ domain.replace(/o/g, v);
      names = names + ", "+ domain.replace(/O/g, v);
    })
  }

  if(domain.includes('a')||domain.includes('A')){
    variants["A"].forEach(v=>{
      names = names + ", "+ domain.replace(/a/g, v);
      names = names + ", "+ domain.replace(/A/g, v);
    })
  }

  if(domain.includes('e')||domain.includes('E')){
    variants["E"].forEach(v=>{
      names = names + ", "+ domain.replace(/e/g, v);
      names = names + ", "+ domain.replace(/E/g, v);
    })
  }

  if(domain.includes('i')||domain.includes('I')){
    variants["I"].forEach(v=>{
      names = names + ", "+ domain.replace(/i/g, v);
      names = names + ", "+ domain.replace(/I/g, v);
    })
  }

  if(domain.includes('u')||domain.includes('U')){
    variants["U"].forEach(v=>{
      names = names + ", "+ domain.replace(/u/g, v);
      names = names + ", "+ domain.replace(/U/g, v);
    })
  }

  console.log("Cool Domains : ", names)
  return names;
}


isVowel("ggl.com");
isVowel("yahoo.com");
isVowel("amazon.com");
isVowel("oyo.com");
isVowel("fb.com");
isVowel("airbnb.com");
isVowel("lewis.com");
isVowel("puma.com");
isVowel("nike.com");

getCoolNames("google.com")


// console.log(variants);


function App() {
  return (
      <SpacingGrid/>
  );
}

export default App;
