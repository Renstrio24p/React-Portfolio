import Loader from "react-loaders";
import styles from "../assets/sass/modules/home.module.scss";
import Data from "./data/jsons/selfies";
import Card from "./data/Card";

export default function Home() {
  const Selfies = Data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <>
      <div className={styles.home}>
        <div className={styles.box}>
          <img className={styles.profile} src="coverphoto.webp" alt="my profile" />
        </div>
        <div className={styles.box1}>
          <h1>Hi, I'm Elcito Jr.</h1>
          <p>Architect Student,</p>
        </div>
      </div>
      <div className={styles.content}>
      <div className={styles["image-div"]}>
          <img src="selfie2.webp" alt="profile2" />
        </div>
        <div className={styles["text-zone"]}>
          <h2>About me</h2>
          <p>
            I'm Elcito, living in Mandaluyong City, I learn how to
            combines efficient vertical living with industrial-chic aesthetics,
            featuring a rooftop oasis with smart home integration, an art
            studio, sustainable elements, and flexible spaces.
          </p>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.grid}>{Selfies}</div>
      </div>
      <Loader type="line-scale" />
    </>
  );
}
