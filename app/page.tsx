"use client";

import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { Flex } from "rebass";

// Styles
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/globals";

// CSS Style
import styles from "./page.module.css";

// Components
import Navbar from "./components/Navbar";
import SectionLayout from "./components/SectionLayout";
import SkillsBox from "./components/SkillsBox";
import ProjectBox from "./components/ProjectBox";
import ExperienceBox from "./components/ExperienceBox";

// Information
import projects from "./projects";
import experiences from "./experiences";
import Footer from "./components/Footer";

export default function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar onChange={() => toggleTheme()} />
      <main className={styles.main}>
        <div style={{ marginTop: 100, marginBottom: 150 }}>
          <h1>
            Hey there!{" "}
            <span role="img" aria-label="emoji">
              🤙
            </span>
          </h1>
          <br />
          <h1>
            I’m <span>Kota Cody Enokida</span>, a software developer, hammock
            man, and an adventurer. 🖥 💤🌲
          </h1>
          <br />
          <h2>
            Let’s talk!{" "}
            <span role="img" aria-label="emoji">
              📩
            </span>{" "}
            <a
              href="mailto:codyenokida@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              codyenokida@gmail.com
            </a>
          </h2>
          <br />
        </div>
      </main>
      <SectionLayout title="ABOUT ME">
        <p style={{ margin: 0, marginRight: 75 }}>
          I’m recent graduate from{" "}
          <strong>University of California, Irvine</strong> with a Bachelors
          Degree in Computer Science. I have a passion for building awesome
          things on the web.
        </p>
        <br />
        <p style={{ margin: 0, marginRight: 75 }}>
          As a software engineer, I enjoy most closing the gap between
          technology and design. I have skills across the full stack development
          cycle.
        </p>
        <br />
        <p style={{ margin: 0, marginRight: 75 }}>
          When I’m away from the computer screen, I enjoy playing the guitar,
          spending time with loved ones, and being outdoors.
        </p>
      </SectionLayout>

      <SectionLayout title="SKILLS">
        <Flex flexWrap="wrap">
          <SkillsBox title="LANGUAGES">
            {[
              "JavaScript (ES6)",
              "TypeScript",
              "HTML",
              "CSS",
              "C#",
              "Python",
              "C++",
              "Java",
            ]}
          </SkillsBox>

          <SkillsBox title="FRAMEWORKS">
            {["React", "Node", "Express", ".NET"]}
          </SkillsBox>

          <SkillsBox title="TOOLS">
            {["Git", "Bash", "Postman", "MongoDB", "MySQL", "PostgreSQL"]}
          </SkillsBox>

          <SkillsBox title="DESIGN">
            {["Figma", "Adobe XD", "Adobe Illustrator", "Adobe Photoshop"]}
          </SkillsBox>
        </Flex>
      </SectionLayout>
      <SectionLayout title="EXPERIENCES">
        {experiences.map((experience) => (
          <ExperienceBox {...experience} key={experience.title} />
        ))}
      </SectionLayout>
      <SectionLayout title="PROJECTS">
        {projects.map((project) => (
          <ProjectBox {...project} key={project.title} />
        ))}
      </SectionLayout>
      <Footer />
    </ThemeProvider>
  );
}
