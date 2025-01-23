import React from "react";
import { FlashCard } from "./components/flashcard";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import "./App.css";

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <FlashCard name={"Flash card 1"} picture={"🧐"} answer={"This is the answer 1"}/>
        <FlashCard name={"Flash card 2"} picture={"🧐"} answer={"This is the answer 2"}/>
        <FlashCard name={"Flash card 3"} picture={"🧐"} answer={"This is the answer 3"}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
