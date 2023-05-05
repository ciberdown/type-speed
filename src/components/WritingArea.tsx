import { useEffect } from "react";

export default function WritingArea() {
  let displayDiv: HTMLElement,
    write_area: HTMLElement,
    colored_text: HTMLElement;
  let displayed_text: string;
  function charComparison(result: string) {
    //space is wrong
    //check correct char
    displayDiv = document.getElementById("paragraph") as HTMLElement;
    displayed_text = displayDiv.innerText;
    const writtenChar: string = result[result.length - 1];
    const displayedChar: string = displayed_text[0];
    if (writtenChar === displayedChar) {//correct
      colored_text.innerHTML = colored_text.innerText + writtenChar;
      displayDiv.innerHTML = displayed_text.slice(1);
    }else{//wrong
        const myP:HTMLElement = document.createElement('p') as HTMLElement;
        myP.style.backgroundColor = 'red';
        myP.style.position = 'inline';
        myP.innerText = displayedChar;
    }
  }
  function clickHandle(e: any) {
    e.preventDefault();
    let result = handleWriting(e);
    e.key !== "Shift" && charComparison(result);
  }
  function handleWriting(e: any): string {
    let output: string = write_area.innerText;
    if (e.key === "Backspace") {
      //backspace
      output = output.slice(0, output.length - 1);
    } else if (e.key === " ") {
      //space
      write_area.innerHTML = output + "&nbsp;";
      return output + " ";
    } else if (e.key !== "Shift") {
      //console.log(e);
      output += e.key;
    }
    write_area.innerHTML = output;
    return output;
  }
  useEffect(() => {
    document.getElementById("root")?.addEventListener("keydown", clickHandle);
    displayDiv = document.getElementById("paragraph") as HTMLElement;
    displayed_text = displayDiv.innerText;
    write_area = document.getElementById("write_area") as HTMLElement;
    colored_text = document.getElementById("colored") as HTMLElement;
  }, []);
  return (
    <div
      id="write_area"
      className="w-100 h- h-auto bg-white"
      style={{ minHeight: "30px" }}
    >
      L
    </div>
  );
}
