import * as React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import ForWhom from "../components/ForWhom/ForWhom";
import Speakers from "../components/Speakers/Speakers";
import ProgramProject from "../components/ProgramProject/ProgramProject";
import ParticipationPackages from "../components/ParticipationPackages/ParticipationPackages";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ForWhom />
      <Speakers />
      <ProgramProject />
      <ParticipationPackages />
    </Layout>
  )
}
