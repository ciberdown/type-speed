import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WritingArea from "./components/WritingArea";
import { useState } from "react";
const display:string = 'inline-block'
const styles = {
  correct: {
    color: "black",
    display: display,
    backgroundColor: "yellow",
  },
  elements:{display:display, maxWidth:'auto'},
  wrong: { color: "black", display: display, backgroundColor: "red" },
  app: { height: "800px", overflow: "scroll" },
};
function App() {
  const rndStr = `React is the most popular front-end JavaScript framework of today. It was created by JordanWalke, a software engineer at Facebook (recently rebranded as Meta), in 2011 under FaxJs. Best used for designing dynamic and interactive user interfaces (UI). While its current stable version is 18.x, React is maintained by Meta along with a large community of developers and companies. With its easy-to-learn nature, this open-source JavaScript Framework can help you save a significant amount of time since it allows you to create reusable components, in other words, creating packages of code to use across the entire application. In addition, React may also be the right framework choice for you since it reigns supreme when it comes to search engine optimization (SEO). Other reasons for React to attain its top position are its declarative views such as Document Object Models (DOM), and the state-of-the-art React Hooks. While the former trait renders the code more readable and makes it easier to spot errors, the latter allows you to use certain React features without having to write a class. Reacts migration friendliness and ability to perform seamless integration certainly dont hurt its popularity in front-end development. The same can be said for JavaScript Syntax Extension (JSX), a unique React extension that makes the syntax almost identical to HTML, making writing React components more accessible.`;
  const [mistakes, setMistakes] = useState<number>(0);
  const [writingSection, setWritingSection] = useState<string>(rndStr[0]);
  const [displaySection, setDisplaySection] = useState<string>(rndStr.slice(1));
  const [elements, setElements] = useState<JSX.Element[]>([
    <p style={styles.correct}>{rndStr[0]}</p>,
  ]);
  function handleKeyDown(e: any) {
    const str: string = writingSectionHandle(e);
    comparesion(str, e);
  }
  function comparesion(str: string, e: any) {
    const wChar = str[str.length - 1];
    const dChar = displaySection[0];
    let newElement: JSX.Element;
    if (e.key === "Backspace") {
      // const char:string = elements[writingSection.length-1].props.children;
      // setElements(elements.slice(0, writingSection.length-1));
      // setDisplaySection(char+displaySection);
    } else if (e.key === "Shift") {
      //do nothing
    } else if (wChar === dChar) {
      //correct
      setDisplaySection(displaySection.slice(1, displaySection.length));
      newElement = createElement(dChar, true);
    } else {
      //false
      setDisplaySection(displaySection.slice(1, displaySection.length));
      newElement = createElement(dChar, false);
      setMistakes(mistakes + 1);
    }
    setElements((oldElements) => [...oldElements, newElement]);
  }
  function createElement(char: string, correct: boolean): JSX.Element {
    const rnd: number = Math.floor(Math.random() * 10000);
    if (char === " ") {
      return (
        <p key={rnd} style={correct ? styles.correct : styles.wrong}>
          &nbsp;
        </p>
      );
    } else
      return (
        <p key={rnd} style={correct ? styles.correct : styles.wrong}>
          {char}
        </p>
      );
  }
  function writingSectionHandle(e: any): string {
    e.preventDefault();
    let str: string = writingSection;
    if (e.key === "Backspace") {
      // setWritingSection(str.slice(0, str.length - 1));
    } else if (e.key !== "Shift" || e.key !== "Space") {
      //don't consider shift and space
      str = writingSection + e.key;
      setWritingSection(str);
    }
    return str;
  }
  return (
    <div
      onKeyDown={handleKeyDown}
      style={styles.app}
      tabIndex={0}
      className="w-100 bg-black p-5"
    >
      <h1 className="mistakes text-danger inline p-3">mistakes: {mistakes}</h1>
      <span className="text-white">
        <div style={styles.elements} className=" text-black">{elements}</div>
        <p className="d-inline">{displaySection}</p>
      </span>
      <WritingArea rndStr={rndStr} writingSection={writingSection} />
    </div>
  );
}

export default App;
