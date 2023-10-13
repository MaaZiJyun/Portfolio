import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Domuki</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using Flutter
          and React, Reach out if you'd like to learn more.
        </p>
        <a href="mailto:domukino@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
      <div className={styles.rightBlur}></div>
    </section>
  );
};

export default Hero;
