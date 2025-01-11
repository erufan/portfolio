import { useState } from "react";
import style from "./Dropdown.module.css";

const Dropdown = () => {
  const languages = [
    { value: "fa", content: "فارسی" },
    { value: "en", content: "english" },
  ];
  const [lang, setLang] = useState(languages[0]);
  const [show, setShow] = useState(false);

  return (
    <div
      className={style.container}
      onBlur={(e) => {
        e.stopPropagation();
        setShow(false);
      }}
    >
      <button className={style.trigger} onFocus={() => setShow(true)}>
        {lang.content}
      </button>
      <div className={`${style.content} ${show && style.contentShow}`}>
        {languages.map((language) => (
          <span
            className={style.item}
            key={language.value}
            onMouseDown={() => setLang(language)}
          >
            {language.content}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
