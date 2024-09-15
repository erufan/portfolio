import { CSSProperties, useState } from "react";

interface Props {
  children: string;
}

const ExpandedText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const spanStyle: CSSProperties = {
    color: isExpanded ? "var(--red)" : " var(--green)",
    cursor: "pointer",
  };

  return (
    <>
      {isExpanded ? children : children.substring(0, 120)}
      <span
        onClick={() => setIsExpanded(!isExpanded)}
        style={spanStyle}
        aria-expanded={isExpanded}
        aria-controls="expanded-text"
      >
        {isExpanded ? "بستن" : "... ادامه"}
      </span>
    </>
  );
};

export default ExpandedText;
