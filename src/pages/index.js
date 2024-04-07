import * as React from "react";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import ForWhom from "../components/ForWhom/ForWhom";
import Speakers from "../components/Speakers/Speakers";
import ProgramProject from "../components/ProgramProject/ProgramProject";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ForWhom />
      <Speakers />
      <ProgramProject />
    </>
  )
}
