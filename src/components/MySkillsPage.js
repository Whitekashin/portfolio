import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { DarkTheme, mediaQueries } from "./Themes";

import { Design, Develope } from "./AllSvgs";
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(50)`
  flex-direction:column;  
  padding:8rem 0;
height:auto;
  &>*:nth-child(5){
    margin-bottom:5rem;
  }
 
`};
  ${mediaQueries(30)`
 
  &>*:nth-child(5){
    margin-bottom:4rem;
  }
 
`};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  ${mediaQueries(60)`
            height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};

  font-family: "Oswald", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.body2};
    border: 2px solid ${(props) => props.theme.body2};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  fill: ${(props) => props.theme.text};

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);

              

  `};

  ${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);

              

  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="dark" />
          <SocialIcons theme="dark" />
          <Homebutton theme="dark" />
          <ParticleComponent theme="light" />

          <Main>
            <Title>
              <Design width={40} height={40} /> Designer
            </Title>
            <Description>
              I love giving ideas form and color. Keeping designs clean, minimal
              and simple.
            </Description>
            <Description>
              <strong>I like to design</strong>
              <ul>
                <li>Web Design</li>
                <li>Mobile Apps</li>
              </ul>
            </Description>
            <Description>
              <strong>Tools</strong>
              <ul>
                <li>Figma</li>
                <li>Photoshop</li>
              </ul>
            </Description>
          </Main>
          <Main>
            <Title>
              <Develope width={40} height={40} /> Frontend Developer
            </Title>
            <Description>
              I'm keenly interested in becoming a Full-Stack Developer. I enjoy
              programming and especially learning new things, through which I
              can bring ideas to life.
            </Description>
            <Description>
              <strong>Skills</strong>
              <ul>
                <li>HTML, CSS, JS, React</li>
                <li>PostgreSQL, Bootstrap, Node.js</li>
              </ul>
            </Description>
            <Description>
              <strong>Tools</strong>
              <ul>
                <li>VScode, Github</li>
              </ul>
            </Description>
          </Main>
          <BigTitle text="SKILLS" top="80%" right="10%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
