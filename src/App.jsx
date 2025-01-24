import React from "react";
import { FlashCard } from "./components/flashcard";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Form } from "./components/form";

import "./App.css";

export default function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Form/>
      </div>
      <div className="parent">
        <FlashCard
          name={"What is React?"}
          picture={"🧐"}
          answer={
            "React is a JavaScript library for building fast, interactive, and reusable user interfaces, primarily for web applications."
          }
        />
        <FlashCard
          name={"What is JSX?"}
          picture={"🧐"}
          answer={
            "JSX is a syntax extension used with React to write HTML-like code directly within JavaScript."
          }
        />
        <FlashCard
          name={"How do you create a React component?"}
          picture={"🧐"}
          answer={
            "We create a React component by defining a function or a class that returns JSX, which represents the UI structure."
          }
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
