import React from "react";
import { Box } from "rebass";

import styles from "./SkillsBox.module.css";

const SkillsBox = ({ title, children }: any) => {
  return (
    <Box className={styles.skillsBox} width={[1 / 2, 1 / 2, 1 / 2, 1 / 4]}>
      <h3 className={styles.h3}>{title}</h3>
      {children.map((p: any) => (
        <p className={styles.p} key={p}>
          {p}
        </p>
      ))}
    </Box>
  );
};

export default SkillsBox;
