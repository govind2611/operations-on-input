import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [modText, setModText] = useState("");
  const [reversedText, setReversedText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);

  const submitForm = (e) => {
    e.preventDefault();
    e.target.text.value = "";
    setModText(text.toUpperCase());
    setReversedText(reverseText(text));
    setWordCount(countWords(text));
    setCharacterCount(countCharacters(text));
  };

  const reset = () => {
    setText("");
    setModText("");
    setReversedText("");
    setWordCount(0);
    setCharacterCount(0);
  };

  const reverseText = (text) => {
    return text.split("").reverse().join("");
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  const countCharacters = (text) => {
    return text.length;
  };

  return (
    <div className="container">
      <form className="form" onSubmit={submitForm}>
        <h2>Operations on Input</h2>

        <p className="para">This app will show character count, word count, reveresed characters, capitalized and live show of your typed input.  <br></br>
        (For word count please enter at least two words)</p>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setText(e.target.value)}
          name="text"
          value={text}
        />
        <div className="btn">
          <button className="submit">Submit</button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>

        {text && <p>You are typing... {text}</p>}

        {modText && <p>Capitalized Name: {modText}</p>}

        {reversedText && <p>Reversed Name: {reversedText}</p>}

        {wordCount > 1 && <p>Word Count: {wordCount}</p>}

        {characterCount > 0 && <p>Character Count: {characterCount}</p>}
      </form>
    </div>
  );
};

export default Form;
