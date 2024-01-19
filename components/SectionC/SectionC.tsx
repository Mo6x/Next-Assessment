import React from "react";
import Image from "next/image";
import Bible from "../../public/Bible.png";
import Book from "../../public/Book.png";
import Arrow from "../../public/Arrow.png";
import Styles from "./Section.module.css";



const SectionC: React.FC = () => {


  return (
    <div className={Styles.SectionCConttainer}>
      <div className={Styles.SectionBHeader}>
         <h4 className={Styles.HeaderLine}>Featured Products</h4>
         <h2 className={Styles.HeaderLine2}>THE BEST SERVICES</h2>
         <p className={Styles.HeaderLineP}>Problems rying o resolve the conflict between</p>
       </div>
       <div className={Styles.SectionCImages}>
        <div className={Styles.SectionCImagesList}>
          <div className={Styles.SectionCImageItems}>
             <Image src={Bible} alt="Bible" />
             <h1 className={Styles.ImagesH1}>Easy Wins</h1>
             <p className={Styles.ImagesParagrap}>Get your best looking smile now! now</p>
          </div>
          <div className={Styles.SectionCImageItems}>
             <Image src={Book} alt="Book" />
             <h1 className={Styles.ImagesH1}>Concrete</h1>
             <p className={Styles.ImagesParagrap}>Defalcate is most focused in helping you discover your most beautiful smile</p>
          </div>
          <div className={Styles.SectionCImageItems}>
             <Image src={Arrow} alt="Arrow" />
             <h1 className={Styles.ImagesH1}>Hack Growth</h1>
             <p className={Styles.ImagesParagrap}>Overcame any hurdle or any other problem.</p>
          </div>
       </div>
      </div>  
    </div>
  )
}

export default SectionC;
