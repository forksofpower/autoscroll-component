import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

const ITEMS = [
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Dolores blanditiis error sapiente, architecto.",
  "Consequatur totam vero atque in at odit, assumenda mollitia provident?",
  "Accusamus et autem consectetur dolore eveniet. Nemo?",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  "Placeat itaque quia ducimus vero provident consectetur rem sit.",
  "perferendis asperiores adipisci voluptatibus autem repellendus.",
  "A minima esse nobis debitis temporibus voluptates?",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Dolores blanditiis error sapiente, architecto.",
  "Consequatur totam vero atque in at odit, assumenda mollitia provident?",
  "Accusamus et autem consectetur dolore eveniet. Nemo?",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  "Placeat itaque quia ducimus vero provident consectetur rem sit.",
  "perferendis asperiores adipisci voluptatibus autem repellendus.",
  "A minima esse nobis debitis temporibus voluptates?",  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Dolores blanditiis error sapiente, architecto.",
  "Consequatur totam vero atque in at odit, assumenda mollitia provident?",
  "Accusamus et autem consectetur dolore eveniet. Nemo?",
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  "Placeat itaque quia ducimus vero provident consectetur rem sit.",
  "perferendis asperiores adipisci voluptatibus autem repellendus.",
  "A minima esse nobis debitis temporibus voluptates?"
]

export const AutoScrollContainer = ({ items }) => {
  const bottomRef = useRef()

  const handleClick = () => {
    bottomRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="autoscroll-container">
      <button type="button" onClick={handleClick}>Scroll To Bottom</button>
      <div className="scroll-list">
        {items && items.map((item, index) => 
          <p key={index}>{`${index + 1}. ${item}`}</p>
        )}
        <div ref={bottomRef} className="list-bottom"></div>
      </div>
    </div>
  );
};

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <AutoScrollContainer items={ITEMS} />
      </header>
    </div>
  );
}

export default App;