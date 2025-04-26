'use client';

import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/layouts/MainLayout";
import LazyImage from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutPage = () => {
  const { t } = useLanguage();
  
  const team = [
    {
      name: "Nguyễn Văn A",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=300",
      initials: "NVA"
    },
    {
      name: "Trần Thị B",
      role: "COO",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300",
      initials: "TTB"
    },
    {
      name: "Lê Văn C",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=300",
      initials: "LVC"
    },
    {
      name: "Phạm Thị D",
      role: "CFO",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300",
      initials: "PTD"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">{t("about.hero.title")}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {t("about.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <LazyImage 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800"
                alt="Tantai Trading office"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="space-y-6">
              <h2 className="mb-4">{t("about.story.title")}</h2>
              <p className="text-muted-foreground">
                {t("about.story.paragraph1")}
              </p>
              <p className="text-muted-foreground">
                {t("about.story.paragraph2")}
              </p>
              <p className="text-muted-foreground">
                {t("about.story.paragraph3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-3">{t("about.team.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.team.description")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-lg p-6 text-center shadow-sm">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-3">{t("about.values.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.values.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">{t("about.values.integrity.title")}</h3>
              <p className="text-muted-foreground">
                {t("about.values.integrity.description")}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">{t("about.values.innovation.title")}</h3>
              <p className="text-muted-foreground">
                {t("about.values.innovation.description")}
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">{t("about.values.excellence.title")}</h3>
              <p className="text-muted-foreground">
                {t("about.values.excellence.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">{t("about.cta.title")}</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
            {t("about.cta.description")}
          </p>
          <Button size="lg" variant="outline" className="border-2">
            {t("about.cta.button")}
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage; 