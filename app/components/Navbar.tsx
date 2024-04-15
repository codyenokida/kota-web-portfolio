import React, { useState } from "react";
import Image from "next/image";
import Switch from "react-switch";

import Logo from "@/public/images/logo.png";
import sunBlack from "@/public/images/sunBlack.svg";
import moonBlack from "@/public/images/moonBlack.svg";
import sunWhite from "@/public/images/sunWhite.svg";
import moonWhite from "@/public/images/moonWhite.svg";

import styles from "./Navbar.module.css";

const Navbar = ({ onChange }: any) => {
  const [toggled, setToggled] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    onChange();
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.imageContainer}>
        <Image src={Logo} className={styles.image} width={75} alt="logo" />
      </div>
      <div className={styles.switchContainer}>
        <div className={styles.switchComponent}>
          {!checked ? (
            <Image
              src={sunBlack}
              className={styles.sun}
              width={30}
              alt="light mode sun icon"
            />
          ) : (
            <Image
              src={sunWhite}
              className={styles.sun}
              width={30}
              alt="dark mode sun icon"
            />
          )}
          <Switch
            onChange={handleChange}
            checked={checked}
            className={styles.switch}
            uncheckedIcon={false}
            checkedIcon={false}
            offColor={"#3C3C3C"}
            onColor={"#4AA8FF"}
          />
          {!checked ? (
            <Image
              src={moonBlack}
              className={styles.moon}
              width={30}
              alt="light mode moon icon"
            />
          ) : (
            <Image
              src={moonWhite}
              className={styles.moon}
              width={30}
              alt="light mode moon icon"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
