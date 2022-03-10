import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

//Components
import Intro from "./Intro";
import Loading from "../subComponents/Loading";
import { mediaQueries } from "./Themes";

const Homebutton = lazy(() => import("../subComponents/Homebutton"));
const LanguageButton = lazy(() => import("../subComponents/LanguageButton"));
const SocialIcons = lazy(() => import("./../subComponents/SocialIcons"));
const LogoComponent = lazy(() => import("./../subComponents/LogoComponent"));

const MainContainer = styled.div`
  background: ${(props) => props.theme.text};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h2,
  h4,
  h5,
  h6 {
    font-family: "Oswald", sans-serif;
    font-weight: 400;
  }

  h2 {
    ${mediaQueries(40)`
      font-size: 1.2em;

  `};

    ${mediaQueries(30)`
      font-size: 1em;

  `};
  }
`;

const glitch = keyframes`
0% {
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
    -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
}
14% {
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
    -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
}
15% {
  text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
    0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
    -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
}
49% {
  text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
    0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
    -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
}
50% {
  text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
    0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
}
99% {
  text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
    0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
}
100% {
  text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
}


`;

const GlitchText = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  color: white;

  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

  .glitchy {
    position: absolute;
    top: 0;
    left: 0;
  }

  &>: first-child {
    clip-path: polygon(0 0, 100% 0, 100% 30%, 0 45%);
    transform: translate(-0.025em, -0.0125em);
    opacity: 0.8;
  }

  &>: last-child {
    clip-path: polygon(0 80%, 100% 60%, 20% 100%, 0 100%);
    transform: translate(0.0125em, 0.025em);
    opacity: 0.8;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "88%" : "50%")};
  left: ${(props) => (props.click ? "59%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    font-size: ${(props) => (props.click ? "2rem" : "8rem")};
    transition: all 1s ease;
    animation: ${glitch} 500ms infinite;
    animation-play-state: ${(props) => (props.click ? "paused" : "running")};

    @media only screen and (max-width: 50em) {
      font-size: ${(props) => (props.click ? "1rem" : "3rem")};
      top: ${(props) => (props.click ? "-50%" : "0%")};
      left: ${(props) => (props.click ? "-30%" : "0%")};
    }
  }

  .glitchy {
    animation: ${glitch} 650ms infinite;
    animation-play-state: ${(props) => (props.click ? "paused" : "running")};
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 2rem;
    color: ${(props) => props.theme.body};
  }
`;

const Contact = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.text : props.theme.body)};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  @media only screen and (max-width: 50em) {
    top: calc(2rem + 4vw);
  }
`;

const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.text : props.theme.body)};
  position: absolute;
  top: 50%;
  left: calc(0.5rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  @media only screen and (max-width: 50em) {
    text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
    color: ${(props) => props.theme.body};
    left: calc(1rem + 2vw);
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.text : props.theme.body)};
  text-decoration: none;
  z-index: 1;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.body};
  text-decoration: none;
  z-index: 1;
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  background-color: ${(props) => props.theme.body2};
  height: ${(props) => (props.click ? "100%" : "0%")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  z-index: 1;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
     height: 50%;
right:0;

width: 100%;
transition: width 0.5s ease, height 1s ease 0.5s;

`
      : mediaQueries(50)`
     height: 0;

width: 0;
`};
`;

const Main = () => {
  const { t } = useTranslation(["main"]);
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");

  const handleClick = () => setClick(!click);

  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;

  return (
    <Suspense fallback={<Loading />}>
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <DarkDiv click={click} />
        <Container>
          {/* <LanguageButton theme={click ? "light" : "dark"} /> */}
          <LogoComponent theme={click ? "light" : "dark"} />
          <Homebutton />

          {/* // MEDIA QUERY  SOCIAL ICONS // */}
          {mq ? (
            <SocialIcons theme="dark" />
          ) : (
            <SocialIcons theme={click ? "light" : "dark"} />
          )}

          <Center click={click}>
            <GlitchText onClick={() => handleClick()}>
              <span className="glitchy" aria-hidden="true">
                {"<Patrick>"}
              </span>
              {"<Patrick>"}
              <span className="glitchy" aria-hidden="true">
                {"<Patrick>"}
              </span>
            </GlitchText>

            <span>{t("span")}</span>
          </Center>

          {/* // MEDIA QUERY  CONTACT // */}
          {mq ? (
            <Contact
              click={+click}
              target="_blank"
              to={{ pathname: "mailto:patrick.reitbauer@web.de" }}
            >
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {t("Contact")}
              </motion.h2>
            </Contact>
          ) : (
            <Contact
              click={-false}
              target="_blank"
              to={{ pathname: "mailto:patrick.reitbauer@web.de" }}
            >
              <motion.h2
                initial={{
                  y: -200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {t("Contact")}
              </motion.h2>
            </Contact>
          )}

          {/* // MEDIA QUERY  WORK // */}

          <WORK to="/work" click={+click}>
            <motion.h2
              onClick={() => setpath("work")}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {t("Work")}
            </motion.h2>
          </WORK>

          <BottomBar>
            <ABOUT
              to="/about"
              onClick={() => setClick(false)}
              click={mq ? +false : +click}
            >
              <motion.h2
                onClick={() => setpath("about")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {t("About")}
              </motion.h2>
            </ABOUT>
            <SKILLS to="/skills">
              <motion.h2
                onClick={() => setpath("skills")}
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {t("Skills")}
              </motion.h2>
            </SKILLS>
          </BottomBar>
        </Container>
        {click ? <Intro click={click} /> : null}
      </MainContainer>
    </Suspense>
  );
};

export default Main;
