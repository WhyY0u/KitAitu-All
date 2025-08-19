import { createContext, useContext, useState, type ReactNode } from 'react';

type ClickContextType = {
  isClick: boolean;
  setClick: () => void;
};

const ClickContext = createContext<ClickContextType | undefined>(undefined);

export const ClickProvider = ({ children }: { children: ReactNode }) => {
  const [isClick, setIsClick] = useState(false);

  const setClick = () => setIsClick(true);

  return (
    <ClickContext.Provider value={{ isClick, setClick }}>
      {children}
    </ClickContext.Provider>
  );
};

export const useClick = (): ClickContextType => {
  const context = useContext(ClickContext);
  if (!context) {
    throw new Error('useClick must be used within a ClickProvider');
  }
  return context;
};
