'use client';

import MainLayout from "@/layouts/MainLayout";
import PageHero from "@/components/ui/PageHero";
import AboutCompanyIntro from "@/components/pages/about/AboutCompanyIntro";
import AboutVisionMission from "@/components/pages/about/AboutVisionMission";
import AboutCoreValues from "@/components/pages/about/AboutCoreValues";
// import AboutCallToAction from "@/components/pages/about/AboutCallToAction";

const AboutPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <PageHero 
        i18nKey={{
          title: 'about.hero.title',
          description: 'about.hero.description'
        }}
        backgroundImage={"/images/gioithieu/hero.jpg"}
      />
      
      {/* Company Introduction Section */}
      <AboutCompanyIntro />
      
      {/* Vision & Mission Section */}
      <AboutVisionMission />
      
      {/* Core Values Section */}
      <AboutCoreValues />
      
      {/* Call to Action Section */}
      {/* <AboutCallToAction /> */}
    </MainLayout>
  );
};

export default AboutPage; 