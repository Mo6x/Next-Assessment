"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DesignOne from "../../public/DesignOne.png";
import DesignTwo from "../../public/DesignTwo.png";
import DesignThree from "../../public/DesignThree.png";
import DesignFour from "../../public/DesignFour.png";
import DesignFive from "../../public/DesignFive.png";
import DesignSix from "../../public/DesignSix.png";
import DesignSeven from "../../public/DesignSeven.png";
import DesignEight from "../../public/DesignEight.png";
import DesignNine from "../../public/DesignNine.png";
import DesignTen from "../../public/DesignTen.png";
import Styles from "./Section.module.css"



const SectionB: React.FC = () => {
  const router = useRouter();

  const handleLoadMoreClick = () => {
    router.push('/product');
  };

  return (
    <div className={Styles.SectionBContainer}>
       <div className={Styles.SectionBHeader}>
         <h4 className={Styles.HeaderLine}>Featured Products</h4>
         <h2 className={Styles.HeaderLine2}>BESTSELLER PRODUCTS</h2>
         <p className={Styles.HeaderLineP}>Problems rying o resolve the conflict between</p>
       </div>

       <div className={Styles.ContainerCards}>
         <div className={Styles.CardsLists}>
           <Image src={DesignOne} alt="Furniture One" />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Graphic Design</h3>
             <p className={Styles.styleP}>English Development</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <Image src={ DesignTwo} alt="Furniture Two" />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Graphic Design</h3>
             <p className={Styles.styleP}>English Development</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <Image src={DesignThree} alt="Furniture Three" />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Graphic Design</h3>
             <p className={Styles.styleP}>English Development</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <Image src={DesignFour} alt="Furniture Four" />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Graphic Design</h3>
             <p className={Styles.styleP}>English Development</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <Image src={DesignFive} alt="Furniture Five" />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Graphic Design</h3>
             <p className={Styles.styleP}>English Development</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <Image src={DesignSix} alt="Furniture Six" />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Graphic Design</h3>
             <p className={Styles.styleP}>English Development</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <Image src={DesignSeven} alt="Furniture Seven" />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Graphic Design</h3>
             <p className={Styles.styleP}>English Development</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <Image src={DesignEight} alt="Furniture Eight" />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Graphic Design</h3>
             <p className={Styles.styleP}>English Development</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <Image src={DesignNine} alt="Furniture Nine" />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Graphic Design</h3>
             <p className={Styles.styleP}>English Development</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <div className={Styles.CardsLists}>
           <Image src={DesignTen} alt="Furniture Ten" />
            <div className={Styles.CardsItems}>
             <h3 className={Styles.styleH3}>Graphic Design</h3>
             <p className={Styles.styleP}>English Development</p>
               <div className={Styles.CardsPayment}>
                 <p className={Styles.PaymentColor1}>$16.48</p>
                 <p className={Styles.PaymentColor2}>$6.48</p>
               </div>
            </div>
          </div>
          <button className={Styles.SectionBButton} onClick={handleLoadMoreClick}>
           LOAD MORE PRODUCTS
          </button>
       </div>
    </div>
  )
}

export default SectionB;
