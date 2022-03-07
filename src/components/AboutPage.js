import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

import { DarkTheme, mediaQueries } from "./Themes";
import ghost from "../assets/Images/ghost_sheet.png";
import Loading from "../subComponents/Loading";

//Components
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const Homebutton = lazy(() => import("../subComponents/Homebutton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticleComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const run = keyframes`
100% {
  background-position: -4378px, 0;
}
`;

const float = keyframes`
0% {
  transform: translateY(-10px)
}

50% {
  transform: translateY(-20px) translateX(20px)
}

100% {
  transform: translateY(-10px)
}
`;

const Ghost = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 396px;
  height: 582px;
  background-image: url(${ghost});
  animation: ${run} 2s steps(11) infinite, ${float} 4s ease infinite;

  ${mediaQueries(30)`
  left: 0%;
`};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 50vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);

  background-color: rgba(0, 0, 0, 0.8);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Oswald", sans-serif;
  font-style: italic;

  ${mediaQueries(40)`
  width: 60vw;
  height: 50vh;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);


`};
  ${mediaQueries(30)`
  width: 50vw;
  height: auto;
  backdrop-filter: none;
  margin-top:2rem;

`};

  ${mediaQueries(20)`
  padding: 1rem;
  font-size: calc(0.5rem + 1vw);
`};
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <Homebutton />
          <ParticleComponent theme="light" />

          <Ghost
            initial={{ right: "-20%", top: "100%" }}
            animate={{
              right: "5%",
              top: "10%",
              transition: { duration: 2, delay: 0.5 },
            }}
          ></Ghost>
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            I'm a front-end developer located in Germany. I fell in love with
            programming, shortly after the pandemic started and now I want to go
            above and beyond in learning to become a fully fledged full-stack
            developer. <br></br> I'm a big nerd in general and worked in the
            general IT field for quite some time prior. I also love reading
            books, playing video games and DIY. You may connect with me via the
            social links!
          </Main>

          <BigTitle text="ABOUT" top="10%" left="5%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutPage;
