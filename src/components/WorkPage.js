import { motion } from "framer-motion";
import { useEffect, useRef, lazy, Suspense } from "react";

import styled, { ThemeProvider } from "styled-components";

import { Work } from "../data/WorkData";
import { DarkTheme, mediaQueries } from "./Themes";

import Card from "../subComponents/Card";
import Loading from "../subComponents/Loading";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const Homebutton = lazy(() => import("../subComponents/Homebutton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  height: 400vh;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  ${mediaQueries(50)`
        
        
  left:calc(8rem + 15vw);

`};

  ${mediaQueries(40)`
top: 30%;
  
  left:calc(6rem + 15vw);

`};

  ${mediaQueries(40)`
  
  left:calc(2rem + 15vw);

`};
  ${mediaQueries(25)`
  
  left:calc(1rem + 15vw);

`};
`;

//Framer-motion Config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <Homebutton />

          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Work.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
          {/* PixelArt here too */}

          <BigTitle text="WORK" top="10%" right="20%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default WorkPage;
