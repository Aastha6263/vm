import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  // ✅ Correct refs
  const courseRef = useRef(null); // Course section
  const careersRef = useRef(null);
  const servicesRef = useRef(null); // Services section
  const contactRef = useRef(null); // Contact section

  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <ScrollContext.Provider
      value={{ courseRef, careersRef, servicesRef, contactRef, scrollTo }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
