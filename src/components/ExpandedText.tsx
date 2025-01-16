import { CSSProperties, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  children: string;
}

interface ExpandedTextTranslation {
  open: string;
  close: string;
}

const ExpandedText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { t } = useTranslation();
  const { open, close } = t("ExpandedText", {
    returnObjects: true,
  }) as ExpandedTextTranslation;

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
        {isExpanded ? open : close}
      </span>
    </>
  );
};

export default ExpandedText;
