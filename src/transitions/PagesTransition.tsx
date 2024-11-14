import { PropsWithChildren, useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./PagesTransition.css";
import { useLocation } from "react-router-dom";

const PagesTransition = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <SwitchTransition>
      <CSSTransition
        classNames="transition"
        timeout={1000}
        key={location.pathname}
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PagesTransition;
