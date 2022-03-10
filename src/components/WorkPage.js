import { motion } from "framer-motion";
import { useEffect, useRef, lazy, Suspense } from "react";

import styled, { ThemeProvider } from "styled-components";
import { DarkTheme, mediaQueries } from "./Themes";

import Card from "../subComponents/Card";
import Loading from "../subComponents/Loading";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation(["work"]);
  const Work = [
    {
      id: 1,
      name: "Webshop",
      description: t("description1"),
      tags: [
        "react",
        "commercejs",
        "styledComponents",
        "materialui",
        "mobile-responsive",
      ],

      demo: "https://paddys-webshop.netlify.app/",
      github: "https://github.com/Whitekashin/Paddy-s-Webshop",
    },
    {
      id: 2,
      name: "Face Recognition Website",
      description: t("description2"),
      tags: ["react", "clarifai", "mobile-responsive"],

      demo: "https://face-recognitionv2.herokuapp.com/",
      github: "https://github.com/Whitekashin/face-rec-app",
    },
    {
      id: 3,
      name: "Agency Landing Page",
      description: t("description3"),
      tags: ["react", "styledComponents", "react-router", "mobile-responsive"],

      demo: "https://ultra-mockup.netlify.app/",
      github: "https://github.com/Whitekashin/Ultra-website-styled-components",
    },
    {
      id: 4,
      name: "Travelling Agency Landing Page",
      description: t("description4"),
      tags: ["react", "graphql", "gatsby", "mobile-responsive"],

      demo: "https://x-plor-mockup.netlify.app/",
      github: "https://github.com/Whitekashin/x-plor-static-website",
    },
    {
      id: 5,
      name: "Bankist Landing Page",
      description: t("description5"),
      tags: ["javascript", "css"],

      demo: "https://bankist-app-course-patrick.netlify.app/",
      github: "https://github.com/Whitekashin/Bankist",
    },
    {
      id: 6,
      name: "Forkify Course App",
      description: t("description6"),
      tags: ["javascript", "css", "api"],

      demo: "https://forkify-course-app.netlify.app/",
      github: "https://github.com/Whitekashin/Forkify-Course",
    },
  ];

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

          <BigTitle text={t("BIGTITLE")} top="13%" right="10%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default WorkPage;
