import React from "react";
import { useState } from "react";
import Checkbox from "./Checkbox";
import "./password.css";

const GeneratePass = () => {
  const [genPassword, setGenPassword] = useState({
    length: 5,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbol: false,
  });

  //   console.log(genPassword);

  const [handleText, setHandleText] = useState("");
  const [copyText, setCopyText] = useState(false);

  console.log(handleText);
  //   handle uppercase
  const handleChangeUppercase = () => {
    setGenPassword({
      ...genPassword,
      uppercase: !genPassword.uppercase,
    });
  };

  //  handle lowercase
  const handleChangeLowercase = () => {
    setGenPassword({
      ...genPassword,
      lowercase: !genPassword.lowercase,
    });
  };

  //  handle Numbers
  const handleChangeNumbers = () => {
    setGenPassword({
      ...genPassword,
      numbers: !genPassword.numbers,
    });
  };

  //  handle symbols
  const handleChangeSymbol = () => {
    setGenPassword({
      ...genPassword,
      symbol: !genPassword.symbol,
    });
  };

  //   password length
  const setPasswordLength = (val) => {
    setGenPassword({
      ...genPassword,
      length: val,
    });
  };

  //   generate password after btn click
  function handleClick() {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const symbolsArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map((code) =>
      String.fromCharCode(code)
    );
    const upperCaseLetters = lowerCaseLetters.map((letter) =>
      letter.toUpperCase()
    );

    const { length, uppercase, lowercase, numbers, symbols } = genPassword;

    const generateTheWord = (
      length,
      uppercase,
      lowercase,
      numbers,
      symbols
    ) => {
      const availableCharacters = [
        ...(lowercase ? lowerCaseLetters : []),
        ...(uppercase ? upperCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];
      const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
      const characters = shuffleArray(availableCharacters).slice(0, length);
      setHandleText(characters.join(""));
      return characters;
    };

    generateTheWord(length, uppercase, lowercase, numbers, symbols);
  }

  return (
    <>
      <div className="wrapper">
        <div className="container wrapper-box">
          <h2 style={{ textAlign: "center" }}>Password Generator</h2>

          <div className="password-box">
            <input
              type="text"
              placeholder="password generate..."
              autoComplete="off"
              value={handleText}
              onChange={(e) => setHandleText(e.target.value)}
            />
            <button
              className="copy-button"
              onClick={() => {
                if (handleText.length > 0) {
                  navigator.clipboard.writeText(handleText);
                  setCopyText(true);
                  setInterval(() => {
                    setCopyText(false);
                  }, 2000);
                }
              }}
            >
              {copyText ? "Copied!" : "Copy text"}
            </button>
          </div>

          <br />

          <div className="word-crieteria__box">
            <div>
              <label>Password length</label>
            </div>

            <div>
              <input
                type="number"
                min="4"
                max="20"
                value={genPassword.length}
                onChange={(e) => setPasswordLength(e.target.value)}
              />
            </div>
          </div>
          <div className="word-crieteria__box">
            <div>
              <label>Include uppercase letters</label>
            </div>

            <div>
              <Checkbox
                value={genPassword.uppercase}
                onChange={handleChangeUppercase}
              />
            </div>
          </div>
          <div className="word-crieteria__box">
            <div>
              <label>Include lowercase letters</label>
            </div>

            <div>
              <Checkbox
                value={genPassword.lowercase}
                onChange={handleChangeLowercase}
              />
            </div>
          </div>
          <div className="word-crieteria__box">
            <div>
              <label>Include numbers</label>
            </div>

            <div>
              <Checkbox
                value={genPassword.numbers}
                onChange={handleChangeNumbers}
              />
            </div>
          </div>
          <div className="word-crieteria__box">
            <div>
              <label>Include symbols</label>
            </div>

            <div>
              <Checkbox
                value={genPassword.symbol}
                onChange={handleChangeSymbol}
              />
            </div>
          </div>
          <div>
            <button className="generate-button" onClick={handleClick}>
              Generate password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneratePass;
