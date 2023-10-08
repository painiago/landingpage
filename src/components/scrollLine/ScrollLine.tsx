import { useEffect, useState } from "react";
import styled from "styled-components";

interface ScrollLineProps {
  scrollPercentage: number;
}

export const Line = styled.div<ScrollLineProps>`
  position: fixed;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #f3a7ee4a;
  opacity: 1;
  /* z-index: 1; */
  cursor: pointer;
  transition: opacity 0.3s;
  top: ${(props) => props.scrollPercentage + "%"};
`;

const ScrollLine = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    if (typeof document !== "undefined") { // Verificação condicional
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        const newScrollPercentage =
          (scrollTop / (documentHeight - windowHeight)) * 100;
        setScrollPercentage(newScrollPercentage);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return typeof document !== "undefined" ? ( // Verificação condicional
    <Line scrollPercentage={scrollPercentage} />
  ) : null; // Renderiza null se não estiver no contexto do navegador
};

export default ScrollLine;
