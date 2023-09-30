import Loader from "react-loaders";
import styles from "../assets/sass/modules/portfolio.module.scss";
import Data from "./data/jsons/images";
import Card from "./data/Card";

export default function Portfolio() {
  const categoryNames = [
    "buildingview",
    "nightview",
    "onepoint",
    "hallwayview",
    "sunsetview",
    "middleview",
    "reflectview",
    "landscapeview",
    "outdoorview",
    "indoorview"
  ];



  const categoryData1 = (category) =>
    Data.filter((item) => item.category === category);
 
  const card = categoryNames.map((category) =>
    categoryData1(category).map((item) => <Card key={item.id} {...item} />)
  );


  return (
    <>
      <div className={styles.portfolio}>
        <div className={styles.home}>
          <div className={styles.top}>
            <img src="logo.png" alt="logo" />
            <h2>Architectural Photos</h2>
          </div>
          <div className={styles.middle}>
            <h3>Design</h3>
            <h3>Create</h3>
            <h3>Passion</h3>
          </div>
        </div>
        <div className={styles.showcase}>
          <div className="boxes">
            <h2>BGC Taguig</h2>
            <p>
              Bonifacio Global City (BGC) is a modern urban district in Metro
              Manila, Philippines, known for its well-planned urban environment,
              bustling business district, upscale shopping, dining options, and
              a mix of residential areas. It offers a vibrant and
              pedestrian-friendly atmosphere with a focus on modern architecture
              and green spaces. BGC is a hub for businesses, cultural events,
              and recreational activities, making it a dynamic and attractive
              part of Metro Manila.
            </p>
            <div className="view1">
              <h3>Building View</h3>
              <p>Building view of BGC</p>
              <div className={styles.grid}>{card[0]}</div>
            </div>
            <div className="view1">
              <h3>Night View</h3>
              <p>Night view of BGC</p>
              <div className={styles.grid}>{card[1]}</div>
            </div>
            <div className="view1">
              <h3>One Point View</h3>
              <p>One Point view of BGC</p>
              <div className={styles.grid}>{card[2]}</div>
            </div>
            <div className="view1">
              <h3>Hallway View</h3>
              <p>Hallway view of BGC</p>
              <div className={styles.grid}>{card[3]}</div>
            </div>
            <div className="view1">
              <h3>Sunset View</h3>
              <p>Sunset view of BGC</p>
              <div className={styles.grid}>{card[4]}</div>
            </div>
            <div className="view1">
              <h3>Middle View</h3>
              <p>Middle view of BGC</p>
              <div className={styles.grid}>{card[5]}</div>
            </div>
            <div className="view1">
              <h3>Reflection View</h3>
              <p>Reflection view of BGC</p>
              <div className={styles.grid}>{card[6]}</div>
            </div>
            <div className="view1">
              <h3>Landscape View</h3>
              <p>Landscape view of BGC</p>
              <div className={styles.grid}>{card[7]}</div>
            </div>
          </div>
          <div className={styles.boxes}>
            <h2>Saint Sebastian Church</h2>
            <p className={styles.desc}>
              The front design for a Saint Sebastian statue incorporates a
              prominent depiction of the saint, traditionally portraying him
              with arrows, elevated on a classical pedestal adorned with
              symbolic motifs, surrounded by lush greenery, and thoughtfully
              illuminated for a harmonious and spiritually evocative
              presentation.
            </p>

            <div className="view1">
              <h3>Outdoor View</h3>
              <p>Outdoor view of Saint Sebastian Church</p>
              <div className={styles.grid}>{card[8]}</div>
            </div>
            <div className="view1">
              <h3>Indoor View</h3>
              <p>Indoor view of Saint Sebastian Church</p>
              <div className={styles.grid}>{card[9]}</div>
            </div>
          </div>
        </div>
      </div>
      <Loader className="loader" type="line-scale" />
    </>
  );
}
