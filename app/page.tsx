import { Navbar } from "@/components";
import { Nav } from "@/components";
import { SectionA } from "@/components";
import { SectionB } from "@/components";
import { SectionC } from "@/components";
import { SectionD } from "@/components";
import { SectionE } from "@/components";
import { SectionF } from "@/components";
import { Footer } from "@/components";
import styles from "./page.module.css";



export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Nav />
      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
      <SectionF />
      <Footer />
    </main>
  )
}
