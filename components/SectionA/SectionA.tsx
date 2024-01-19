import React from "react";
import Image from "next/image";
import FurnitureOne from "../../public/FurnitureOne.png";
import FurnitureTwo from "../../public/FurnitureTwo.png";
import FurnitureThree from "../../public/FurnitureThree.png";
import FurnitureFour from "../../public/FurnitureFour.png";
import Styles from "./Section.module.css";



const SectionA: React.FC = () => {



  return (
    <div className={Styles.SectionAContainerMain}>
      <div className={Styles.SectionAContainer}>
        <div className={Styles.SectionImage}>
          <Image src={FurnitureOne} alt="Furniture One" />
        </div>
        <div className={Styles.SectionImages}>
          <div className={Styles.ImageOne}>
          <Image src={FurnitureTwo} alt="Furniture Two" />
          </div>
          <div className={Styles.ImageTwo}>
            <div className={Styles.ImageChild}>
            <Image src={FurnitureThree} alt="Furniture Three" />
            </div>
            <div className={Styles.ImageChild}>
            <Image src={FurnitureFour} alt="Furniture Four" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionA;
