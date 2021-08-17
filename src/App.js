import './App.css';
import DomainsGrid from './components/DomainsGrid';
import {useEffect, useState} from "react";
import firebaseInstance from "./Firebase"

function App() {

  const [isInitializingApp, setInitializingApp] = useState(true)
  useEffect(() => {
    firebaseInstance.auth().onAuthStateChanged(async function (user) {
      setInitializingApp(false)
      console.log("user is : ", user)
      if (user == null) {
        await firebaseInstance.auth().signInAnonymously();
      }
    })
  }, [])

  return (
      isInitializingApp ?
          <center>Loading...</center>
          :
          <DomainsGrid/>
  );
}

export default App;
