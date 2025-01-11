import { useState, useRef } from "react";
import style from "./Dropdown.module.css";
import { LuLanguages } from "react-icons/lu";

interface MenuItems {
  value: string | number;
  content: string;
}

interface Props {
  items: MenuItems[];
}

const Dropdown = ({ items }: Props) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [isShow, setIsShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement, Element>) =>
    dropdownRef.current &&
    !dropdownRef.current.contains(e.relatedTarget as Node) &&
    setIsShow(false);

  const handleChoose = (item: typeof selectedItem) => {
    setSelectedItem(item);
    setIsShow(false);
  };

  const isActive = (item: typeof selectedItem): boolean =>
    selectedItem.content === item.content;

  return (
    <div className={style.container} onBlur={handleBlur} ref={dropdownRef}>
      <button
        className={style.trigger}
        onClick={() => setIsShow(!isShow)}
        aria-haspopup="true"
        aria-expanded={isShow}
      >
        <LuLanguages aria-label="Select language" />
      </button>
      <ul
        className={`${style.content} ${isShow && style.contentShow}`}
        role="menu"
      >
        {items.map((item) => (
          <li
            className={`${style.item} ${isActive(item) && style.active}`}
            key={item.value}
            onClick={() => handleChoose(item)}
            onKeyDown={(e) => e.key === "Enter" && handleChoose(item)}
            tabIndex={isShow ? 0 : -1}
            role="menuitem"
          >
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
