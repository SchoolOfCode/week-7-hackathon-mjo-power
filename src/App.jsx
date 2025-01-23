//import { useState } from 'react'

import "./App.css";

function FlashCard({name, picture, answer}) {
  
  return (
    <>
      <button>❌</button>

      <p>{picture}</p>
      <p>{name}</p>


      <>{answer}</>
    </>
  );
}

export default function App() {
  return (
    <div>
      <FlashCard name={"Flash card 1"} picture={"🧐"} />
      <FlashCard name={"Flash card 2"} picture={""}/>
      <FlashCard name={"Flash card 3"} picture={""}/>
    </div>
  );
}

//export default App
