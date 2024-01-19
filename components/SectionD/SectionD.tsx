import React from "react"
import Image from "next/image";
import NewOne from "../../public/NewOne.png";
import NewTwo from "../../public/NewTwo.png";
import NewThree from "../../public/NewThree.png";
import Clock from "../../public/Clock.png";
import Gallary from "../../public/Gallary.png";
import Greater from "../../public/Greater.png";
import Styles from "./Section.module.css";




const SectionD = () => {


  return (
    <div className={Styles.SectionDContainer}>
       <div className={Styles.SectionDHeader}>
           <p className={Styles.HeaderParagrph}>Practice Advice</p>
           <h1 className={Styles.HeaderH1}>Featured Posts</h1>
       </div>
       <div className={Styles.SectionDCardList}>
         <div className={Styles.SectionCardsLists}>
            <Image src={NewOne} alt="Picture of Home" />
            <div className={Styles.ListsButton}>
                <p className={Styles.SectionDButtons}>Google</p>
                <p className={Styles.SectionDButton}>Trending</p>
                <p className={Styles.SectionDButton}>New</p>
            </div>
            <h1 className={Styles.ListButtonH1}>
             Loudest à la Madison #1 (L'integral)
            </h1>
            <p className={Styles.ListButtonParagrh}>We focus on ergonomics and meeting 
              you where you work. It's only a  keystroke away.
            </p>
            <div className={Styles.SectionDTimmer}>
               <div className={Styles.SectionDClock}>
                  <Image src={Clock} alt="Picture of Clock" />
                  <p className={Styles.ClockGallary}>22 April 2021</p>
               </div>
               <div className={Styles.SectionDComment}>
                  <Image src={Gallary} alt="Picture of Gallary" />
                  <p className={Styles.ClockGallary}>10 comments</p>
               </div>
            </div>
            <div className={Styles.SectionDClick}>
               <p className={Styles.SectionDLearn}>Learn More</p>
               <Image src={Greater} alt="Picture of Greater" />
            </div>
         </div>
         <div className={Styles.SectionCardsLists}>
            <Image src={NewTwo} alt="Picture of Home" />
            <div className={Styles.ListsButton}>
                <p className={Styles.SectionDButtons}>Google</p>
                <p className={Styles.SectionDButton}>Trending</p>
                <p className={Styles.SectionDButton}>New</p>
            </div>
            <h1 className={Styles.ListButtonH1}>
             Loudest à la Madison #1 (L'integral)
            </h1>
            <p className={Styles.ListButtonParagrh}>We focus on ergonomics and meeting 
              you where you work. It's only a  keystroke away.
            </p>
            <div className={Styles.SectionDTimmer}>
               <div className={Styles.SectionDClock}>
                  <Image src={Clock} alt="Picture of Clock" />
                  <p className={Styles.ClockGallary}>22 April 2021</p>
               </div>
               <div className={Styles.SectionDComment}>
                  <Image src={Gallary} alt="Picture of Gallary" />
                  <p className={Styles.ClockGallary}>10 comments</p>
               </div>
            </div>
            <div className={Styles.SectionDClick}>
               <p className={Styles.SectionDLearn}>Learn More</p>
               <Image src={Greater} alt="Picture of Greater" />
            </div>
         </div>
         <div className={Styles.SectionCardsLists}>
            <Image src={NewThree} alt="Picture of Home" />
            <div className={Styles.ListsButton}>
                <p className={Styles.SectionDButtons}>Google</p>
                <p className={Styles.SectionDButton}>Trending</p>
                <p className={Styles.SectionDButton}>New</p>
            </div>
            <h1 className={Styles.ListButtonH1}>
             Loudest à la Madison #1 (L'integral)
            </h1>
            <p className={Styles.ListButtonParagrh}>We focus on ergonomics and meeting 
              you where you work. It's only a  keystroke away.
            </p>
            <div className={Styles.SectionDTimmer}>
               <div className={Styles.SectionDClock}>
                  <Image src={Clock} alt="Picture of Clock" />
                  <p className={Styles.ClockGallary}>22 April 2021</p>
               </div>
               <div className={Styles.SectionDComment}>
                  <Image src={Gallary} alt="Picture of Gallary" />
                  <p className={Styles.ClockGallary}>10 comments</p>
               </div>
            </div>
            <div className={Styles.SectionDClick}>
               <p className={Styles.SectionDLearn}>Learn More</p>
               <Image src={Greater} alt="Picture of Greater" />
            </div>
         </div>
       </div>
    </div>
  )
}

export default SectionD;
