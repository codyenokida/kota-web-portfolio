import React from "react";
import { Flex, Box } from "rebass";
import { Fade } from "react-awesome-reveal";

import styles from "./ExperienceBox.module.css";

const ExperienceBox = ({ title, duration, position }: any) => {
  return (
    <Fade damping={1.5}>
      <div className={styles.experienceBox}>
        <Flex flexWrap="wrap">
          <Box width={[1, 1 / 2]} className={styles.title}>
            <p>{title}</p>
          </Box>
          <Box width={[1, 1 / 2]} className={styles.duration}>
            <p>{duration}</p>
          </Box>
        </Flex>
        <p>{position}</p>
      </div>
    </Fade>
  );
};

export default ExperienceBox;
