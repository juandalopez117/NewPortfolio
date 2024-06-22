
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
const MainSection = dynamic(() => import("./common/MainSection"));
const AboutMe = dynamic(() => import("./common/AboutMe"));
const Projects = dynamic(() => import("./common/Projects"));
const Technologies = dynamic(() => import("./common/technologies"));
const References = dynamic(() => import("./common/References"));
const Footer = dynamic(() => import("./common/Footer"));

/* 
import MainSection from "./common/MainSection";
import AboutMe from "./common/AboutMe";
import Projects from "./common/Projects";
import Technologies from "./common/technologies";
import References from "./common/References";
import Footer from "./common/Footer"; */

async function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export default async function Home() {

  await delay(1000);

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        "-ms-overflow-style": "none", // Ocultar barra de desplazamiento en Internet Explorer y Edge
        scrollbarWidth: "none", // Ocultar barra de desplazamiento en Firefox
        "&::-webkit-scrollbar": {
          display: "none", // Ocultar barra de desplazamiento en Chrome, Safari y Opera
        },
      }}
    >
      <MainSection />
      <AboutMe />
      <Projects />
      <Technologies />
      <References />
      <Footer />


    </Box>
  );
}
