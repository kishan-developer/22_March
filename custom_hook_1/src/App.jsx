import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import A from './Components/A';
import B from './Components/B';

function App() {
  

  return (
    <>
     <b>useCustom hook example 1</b>
     <p>check the uesr online or offline </p>
     <p> user is online than show green dot and user in offline than show red dot</p>
     <br />
     <A />
     <B />
    </>
  )
}

export default App
