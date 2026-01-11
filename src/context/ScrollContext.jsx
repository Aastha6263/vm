import { createContext, useContext, useRef } from 'react';

const ScrollContext = createContext();

export function ScrollProvider({ children }) {
  const servicesRef = useRef(null);
  const careersRef = useRef(null);
  const industriesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    if (!ref?.current) return;

    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <ScrollContext.Provider
      value={{
        servicesRef,
        careersRef,
        industriesRef,
        testimonialsRef,
        contactRef,
        scrollTo,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => useContext(ScrollContext);
