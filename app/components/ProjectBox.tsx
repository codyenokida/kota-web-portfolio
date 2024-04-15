import React from "react";
import Image from "next/image";
import { Flex, Box } from "rebass";
import { Fade } from "react-awesome-reveal";

import styles from "./ProjectBox.module.css";

const ProjectBox = ({
  src,
  title,
  description,
  tech,
  githubLink,
  webLink,
}: any) => {
  return (
    <Fade damping={1}>
      <Flex flexWrap="wrap" className={styles.projectBoxContainer}>
        <Box p={2} width={[1, 1 / 2]} className={styles.previewImageContainer}>
          <Image
            src={src}
            className={styles.image}
            alt="project preview"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "90%", height: "auto" }}
          />
        </Box>
        <Box p={2} width={[1, 1 / 2]} className={styles.descriptionContainer}>
          <p className={styles.title}>{title}</p>
          <p style={{ marginRight: 75 }}>{description}</p>
          <p className={styles.tech}>Technologies:</p>
          <p>{tech}</p>
          <a
            className={styles.link}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className={styles.link}
            href={webLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </Box>
      </Flex>
    </Fade>
  );
};

export default ProjectBox;
