import { memo } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Tách phần Company Info thành component riêng (SRP)
const CompanyInfo = memo(() => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Tantai Trading</h3>
      <p className="text-muted-foreground">
        Providing professional business solutions for companies of all sizes.
      </p>
    </div>
  );
});

CompanyInfo.displayName = "CompanyInfo";

// Tách phần Services Links thành component riêng (SRP)
const ServicesLinks = memo(({ t }: { t: (key: string) => string }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{t("nav.services")}</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/services/consulting" className="text-muted-foreground hover:text-primary transition-colors">
            {t("home.features.item1.title")}
          </Link>
        </li>
        <li>
          <Link href="/services/digital" className="text-muted-foreground hover:text-primary transition-colors">
            {t("home.features.item2.title")}
          </Link>
        </li>
        <li>
          <Link href="/services/financial" className="text-muted-foreground hover:text-primary transition-colors">
            {t("home.features.item3.title")}
          </Link>
        </li>
      </ul>
    </div>
  );
});

ServicesLinks.displayName = "ServicesLinks";

// Tách phần About Links thành component riêng (SRP)
const AboutLinks = memo(({ t }: { t: (key: string) => string }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{t("nav.about")}</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
            {t("nav.about")}
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
            {t("nav.contact")}
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
            {t("footer.links.privacy")}
          </Link>
        </li>
        <li>
          <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
            {t("footer.links.terms")}
          </Link>
        </li>
      </ul>
    </div>
  );
});

AboutLinks.displayName = "AboutLinks";

// Tách phần Contact Info thành component riêng (SRP)
const ContactInfo = memo(({ t }: { t: (key: string) => string }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{t("nav.contact")}</h3>
      <address className="not-italic text-muted-foreground">
        <p>123 Business Street</p>
        <p>Ho Chi Minh City, Vietnam</p>
        <p className="mt-2">
          <a href="mailto:info@tantaitrading.com" className="hover:text-primary transition-colors">
            info@tantaitrading.com
          </a>
        </p>
        <p>
          <a href="tel:+84123456789" className="hover:text-primary transition-colors">
            +84 123 456 789
          </a>
        </p>
      </address>
    </div>
  );
});

ContactInfo.displayName = "ContactInfo";

// Tách phần Copyright thành component riêng (SRP)
const Copyright = memo(({ t }: { t: (key: string) => string }) => {
  return (
    <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
      <p>{t("footer.copyright")}</p>
    </div>
  );
});

Copyright.displayName = "Copyright";

// Component chính
const Footer = memo(() => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CompanyInfo />
          <ServicesLinks t={t} />
          <AboutLinks t={t} />
          <ContactInfo t={t} />
        </div>
        
        <Copyright t={t} />
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer; 