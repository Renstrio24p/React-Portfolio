import Loader from "react-loaders";
import styles from '../assets/sass/modules/portfolio.module.scss';
import Footer from "./elements/footer";

export default function Portfolio() {
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
            <div className="grid">

            </div>
          </div>
          <div className="boxes">
            <h2>Saint Sebastian Church</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              accusamus modi qui recusandae? Totam quaerat mollitia ipsam
              perferendis dolorem atque sequi molestias, quo a quisquam quos.
              Nemo voluptatibus deserunt temporibus!
            </p>
            <div className="grid">

            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Loader className="loader" type="line-scale" />
    </>
  );
}
