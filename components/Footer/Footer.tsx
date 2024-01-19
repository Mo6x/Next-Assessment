import React from "react";
import Styles from "./Footer.module.css";





const Footer = () => {


  return (
    <div className={Styles.FooterContainer}>
      <div className={Styles.FooterItems}> 
        <div className={Styles.FooterLists}>
            <h1 className={Styles.FooterHeader}>Company Info</h1>
            <div className={Styles.FooterParent}>
               <h1 className={Styles.FooterChild}>About Us</h1>     
               <h1 className={Styles.FooterChild}>Carrier</h1>   
               <h1 className={Styles.FooterChild}>We are hiring</h1>   
               <h1 className={Styles.FooterChild}>Blog</h1>   
            </div>
          </div> 
          <div className={Styles.FooterLists}>
            <h1 className={Styles.FooterHeader}>Legal</h1>
            <div className={Styles.FooterParent}>
               <h1 className={Styles.FooterChild}>About Us</h1>     
               <h1 className={Styles.FooterChild}>Carrier</h1>   
               <h1 className={Styles.FooterChild}>We are hiring</h1>   
               <h1 className={Styles.FooterChild}>Blog</h1>   
            </div>
          </div> 
          <div className={Styles.FooterLists}>
            <h1 className={Styles.FooterHeader}>Features</h1>
            <div className={Styles.FooterParent}>
               <h1 className={Styles.FooterChild}>Business Marketing</h1>     
               <h1 className={Styles.FooterChild}>User Analytic</h1>   
               <h1 className={Styles.FooterChild}>Live Chat</h1>   
               <h1 className={Styles.FooterChild}>Unlimited Support</h1>   
            </div>
          </div> 
          <div className={Styles.FooterLists}>
            <h1 className={Styles.FooterHeader}>Resources</h1>
            <div className={Styles.FooterParent}>
               <h1 className={Styles.FooterChild}>IOS & Android</h1>     
               <h1 className={Styles.FooterChild}>Watch a Demo</h1>   
               <h1 className={Styles.FooterChild}>Customers</h1>   
               <h1 className={Styles.FooterChild}>API</h1>   
            </div>
          </div> 
          <div className={Styles.FooterLists}>
            <h1 className={Styles.FooterHeader}>Get In Touch</h1>
            <div className={Styles.FooterParent}>
             <div className={Styles.FooterListInput}>
               <input type="email"
               name="email" value=""
               placeholder="Your Email" 
               className={Styles.FooterInputs}
               />
               <button className={Styles.FooterButton}>Subscribe</button>
             </div>    
               <h1 className={Styles.FooterChild}>Lore imp sum dolor Amit</h1>   
            </div>
          </div> 
          <div className={Styles.FoooterLastDivs}>
          <div className={Styles.FooterLastDiv}>
           <p className={Styles.FooterLastparagrph}>
            Made With Love By Finland All Right Reserved 
           </p>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Footer;
