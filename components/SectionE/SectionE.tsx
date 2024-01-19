import React from "react";
import Image from "next/image";
import Profile from "../../public/Profile.png";
import StarOne from "../../public/StarOne.png";
import StarHalf from "../../public/StarHalf.png";
import DisplayOne from "../../public/DisplayOne.png";
import DisplayTwo from "../../public/DisplayTwo.png";
import DisplayThree from "../../public/DisplayThree.png";
import DisplayFour from "../../public/Displayfour.png";
import DisplayFive from "../../public/DisplayFive.png";
import DisplaySix from "../../public/DisplaySix.png";
import DisplaySeven from "../../public/DisplaySeven.png";
import DisplayEight from "../../public/DisplayEight.png";
import DisplayNine from "../../public/DisplayNine.png";
import Styles from "./Section.module.css";



const SectionE: React.FC = () => {

  return (
      <div className={Styles.SectionECotainer}>
       <div className={Styles.ProfileItems}>
         <div className={Styles.ProfileLists}>
            <h1 className={Styles.ProfileHeader}>What they say about us</h1>
             <Image src={Profile} alt="Picture Icon" className={Styles.profileImage}/>
             <div className={Styles.profileStar}>
               <Image src={StarOne} alt="PStar Icon" />
               <Image src={StarOne} alt="PStar Icon" />
               <Image src={StarOne} alt="PStar Icon" />
               <Image src={StarOne} alt="PStar Icon" />
               <Image src={StarHalf} alt="PStar Icon" />
             </div>
            <p className={Styles.ProfileParagraph}>
              Slate helps you see how many more days you need to work to 
              reach your financial goal.
            </p>
            <div className={Styles.ProfileDetails}>
               <h4 className={Styles.ProfileName}>Regina Miles</h4>
               <h4 className={Styles.ProfileOwner}>Designer</h4>
            </div>
         </div>
         <div className={Styles.ProfilesImages}>
         <Image src={DisplayOne} alt="Picture Design" />
         <Image src={DisplayTwo} alt="Picture Design" />
         <Image src={DisplayThree} alt="Picture Design" />
         <Image src={DisplayFour} alt="Picture Design" />
         <Image src={DisplayFive} alt="Picture Design" />
         <Image src={DisplaySix} alt="Picture Design" />
         <Image src={DisplaySeven} alt="Picture Design" />
         <Image src={DisplayEight} alt="Picture Design" />
         <Image src={DisplayNine} alt="Picture Design" />
         </div>
       </div>    
      </div>
  )
}

export default SectionE;
