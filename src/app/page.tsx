'use client';

import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";
import FeatureCard from "@/components/FeatureCard";
import { BarChart } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: t("home.features.item1.title"),
      description: t("home.features.item1.description"),
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: t("home.features.item2.title"),
      description: t("home.features.item2.description"),
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: t("home.features.item3.title"),
      description: t("home.features.item3.description"),
    },
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in">
              <h1 className="tracking-tight">
                {t("home.hero.title")}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md">
                {t("home.hero.subtitle")}
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  {t("home.hero.cta")}
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <LazyImage 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800"
                alt="Business team working together"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-3">{t("home.features.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {t("home.features.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">{t("home.cta.title")}</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
            {t("home.cta.subtitle")}
          </p>
          <Button size="lg" variant="outline" className="border-2">
            {t("home.cta.button")}
          </Button>
        </div>
      </section>
    </MainLayout>
  );
} 