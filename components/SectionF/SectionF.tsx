import React from "react";
import Image from "next/image";
import Items from "../../public/Items.png";
import FaceBook from "../../public/FaceBook.png";
import Instagram from "../../public/Instagram.png";
import Wistter from "../../public/Wistter.png";
import Styles from "./Section.module.css";




const SectionF: React.FC = () => {


  return (
    <div className={Styles.SectionFContainer}>
       <Image src={Items} alt="Background Icon" 
        className={Styles.BackgroundImages} />
      <div className={Styles.SectionFItems}>
        <h4 className={Styles.SectionFH4}>Designing Better Experience</h4>  
        <h1 className={Styles.SectionFh1}> 
         Problems trying to resolve 
         the conflict between 
        </h1>
        <p className={Styles.SectionFParagraph}> 
         Problems trying to resolve the conflict between the two major realms of Classical physics: 
        </p>
        <div className={Styles.SectionFPayment}>$16.48</div>
         <button className={Styles.SectionFButton}>
          ADD YOUR CALL TO ACTION
         </button>
      </div> 
      <div className={Styles.SectionFooterContain}> 
      <div className={Styles.SectionFooter}> 
        <div className={Styles.SectionFooters}>
           <h1 className={Styles.SectionFooterH1}>Bandage</h1>
           <div className={Styles.SectionFooterIcons}>
           <Image src={FaceBook} alt="Social Media Icon" />
           <Image src={Instagram} alt="Social Media Icon" />
           <Image src={ Wistter} alt="Social Media Icon" />
           </div>
        </div>
      </div>
     </div>  
    </div>
  )
}

export default SectionF;
