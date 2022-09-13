import { createContext, useState } from "react";
import "./darkmode.css";
import Form from "./Form";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Form />
        <span>{theme === "light" ? "LightMode" : "DarkMode"}</span>
        <ReactSwitch onChange={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
};

export default DarkMode;
