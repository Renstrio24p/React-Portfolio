import Loader from "react-loaders";
import styles from "../assets/sass/modules/home.module.scss";
import Footer from "./elements/footer";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.box}>
          <h2>Living Luxury and Experience Better Spaces</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, nulla atque officiis a nobis praesentium exercitationem
            ducimus dolorum iure temporibus repellat iusto odit magni ea veniam
            facere eius suscipit ipsa.
          </p>
        </div>
        <div className={styles.box1}>
          <h1>Change the Way of Living</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            repudiandae quaerat explicabo asperiores, expedita officiis.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles['text-zone']}>
          <h2>Build and Innovation</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur tenetur ipsa fuga, adipisci fugit, eveniet omnis porro
            commodi unde saepe placeat facilis! Culpa laboriosam quidem eaque
            repudiandae consectetur in alias.
          </p>
        </div>
        <div className={styles["image-div"]}>
          <img src="living2.jpg" alt="living" />
        </div>
      </div>
      <Loader type="line-scale" />
      <Footer />
    </>
  );
}
