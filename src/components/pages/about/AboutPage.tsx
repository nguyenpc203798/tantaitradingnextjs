'use client';

import MainLayout from "@/layouts/MainLayout";
import AboutHero from "@/components/pages/about/AboutHero";
import AboutCompanyIntro from "@/components/pages/about/AboutCompanyIntro";
import AboutVisionMission from "@/components/pages/about/AboutVisionMission";
import AboutCoreValues from "@/components/pages/about/AboutCoreValues";
import AboutCallToAction from "@/components/pages/about/AboutCallToAction";

const AboutPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <AboutHero />
      
      {/* Company Introduction Section */}
      <AboutCompanyIntro />
      
      {/* Vision & Mission Section */}
      <AboutVisionMission />
      
      {/* Core Values Section */}
      <AboutCoreValues />
      
      {/* Call to Action Section */}
      <AboutCallToAction />
    </MainLayout>
  );
};

export default AboutPage; 