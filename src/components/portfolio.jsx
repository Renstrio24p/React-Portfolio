import Loader from "react-loaders";
import styles from '../assets/sass/modules/portfolio.module.scss';
import Data from './data/images';
import Card from "./data/Card";

export default function Portfolio() {

    const cards = Data.map(item => {
        return (
            <Card
                key = {item.id}
                {...item}
            />
        )
    })

  return (
    <>
      <div className={styles.portfolio}>
        <div className="home"></div>
        <div className="showcase">
          <div className="boxes">
            <h2>BGC Taguig</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              accusamus modi qui recusandae? Totam quaerat mollitia ipsam
              perferendis dolorem atque sequi molestias, quo a quisquam quos.
              Nemo voluptatibus deserunt temporibus!
            </p>
          </div>
          <div className="boxes">
            <h2>Saint Sebastian Church</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              accusamus modi qui recusandae? Totam quaerat mollitia ipsam
              perferendis dolorem atque sequi molestias, quo a quisquam quos.
              Nemo voluptatibus deserunt temporibus!
            </p>
            <div className={styles.grid}>
                {cards}
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
      <div className={styles["upper-footer"]}>
        <div className={styles.box}>
          <img src="logo.png" alt="alt" className={styles.logo} />
          <h3>Design and Passion Awaits</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis neque expedita at! Accusantium, perspiciatis quo?
          </p>
        </div>
        <div className={styles.box}>
          <p>Subscribe for News letters</p>
          <div className={styles.subscribe}>
          <input type="email" className={styles.email} placeholder="email" />
          <input type="button" value="subscribe" />
          </div>
          <h3>Social Media</h3>
          <ul className={styles.icons}>
            <li>
              <box-icon
                className={styles["facebook"]}
                type="logo"
                color="blue"
                name="facebook-square"
              ></box-icon>
            </li>
            <li>
              <box-icon
                className={styles["instagram"]}
                type="logo"
                color="gold"
                name="instagram"
              ></box-icon>
            </li>
            <li>
              <box-icon
                className={styles["gmail"]}
                type="logo"
                color="red"
                name="gmail"
              ></box-icon>
            </li>
          </ul>
        </div>
        
      </div>
      <div className={styles["lower-footer"]}>
        <p>&copy; Copyright 2023 by. Elcito Jr. &trade;</p>
      </div>
    </footer>
      <Loader className="loader" type="line-scale" />
    </>
  );
}
