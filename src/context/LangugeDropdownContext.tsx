import { createContext, PropsWithChildren, useState } from "react";

interface LangugeDropdownContextProp {
  isActiveDropdown: boolean;
  setActiveDropdown: (isActiveDropdown: boolean) => void;
}

export const LangugeDropdownContext = createContext<LangugeDropdownContextProp>(
  {} as LangugeDropdownContextProp
);

export const LangugeDropdownProvider = ({ children }: PropsWithChildren) => {
  const [isActiveDropdown, setActiveDropdown] = useState(false);

  return (
    <>
      <LangugeDropdownContext.Provider
        value={{ isActiveDropdown, setActiveDropdown }}
      >
        {children}
      </LangugeDropdownContext.Provider>
    </>
  );
};
