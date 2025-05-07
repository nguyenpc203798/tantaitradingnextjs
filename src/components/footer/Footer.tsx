import { memo } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

// Tách phần Company Info thành component riêng (SRP)
const CompanyInfo = memo(({ t }: { t: (key: string) => string }) => {
  return (
    <div className="pl-[10%] max-w-[80%]">
      <h3 className="text-lg font-semibold mb-4">Tấn Tài Trading</h3>
      <p className="text-justify">
      {t("footer.slogan")}
      </p>
    </div>
  );
});

CompanyInfo.displayName = "CompanyInfo";

// Tách phần About Links thành component riêng (SRP)
const AboutLinks = memo(({ t }: { t: (key: string) => string }) => {
  return (
    <div className="pl-[10%] max-w-[80%]">
      <h3 className="text-lg font-semibold mb-4">{t("footer.link")}</h3>
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
    <div className="pl-[10%] max-w-[80%]">
      <h3 className="text-lg font-semibold mb-4">{t("nav.contact")}</h3>
      <address className="not-italic text-muted-foreground">
        <p className="text-justify">{t("footer.contact_info.head_office")}</p>
        <p className="mt-2">
          <a href="mailto:info@tantaitrading.com" className="hover:text-primary transition-colors">
            {t("footer.contact_info.email")}
          </a>
        </p>
        <p>
          <a href="tel:+84899565868" className="hover:text-primary transition-colors">
            {t("footer.contact_info.phone")}
          </a>
        </p>
        <p className="text-justify">{t("footer.contact_info.response")}</p>
      </address>
    </div>
  );
});

ContactInfo.displayName = "ContactInfo";


// Tách phần Contact Info thành component riêng (SRP)
const RepresentativeOffice = memo(({ t }: { t: (key: string) => string }) => {
  return (
    <div className="pl-[10%] max-w-[80%]">
      <h3 className="text-lg font-semibold mb-4">{t("footer.representative_office.title")}</h3>
      <address className="not-italic text-muted-foreground">
        <p className="text-justify">{t("footer.representative_office.content")}</p>
      </address>
    </div>
  );
});

RepresentativeOffice.displayName = "RepresentativeOffice";

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
    <footer className="bg-tantai py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <CompanyInfo t={t} />
          <AboutLinks t={t} />
          <ContactInfo t={t} />
          <RepresentativeOffice t={t} />
        </div>
        
        <Copyright t={t} />
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer; 