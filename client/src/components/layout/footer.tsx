import { useTranslation } from "react-i18next";
import { useDirection } from "@/hooks/use-direction";

export default function Footer() {
  const { t } = useTranslation();
  const [direction] = useDirection();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-tawjeeh text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="font-cairo font-bold text-2xl mb-2">
              {t("footer.title")}
            </h2>
            <p className="max-w-md">{t("footer.tagline")}</p>
          </div>
          <div
            className={`flex ${direction === "rtl" ? "space-x-4 space-x-reverse" : "space-x-4"}`}
          >
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/tawjeeh-ai/"
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors duration-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <hr className="border-white border-opacity-20 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>{t("footer.copyright", { year: currentYear })}</p>
          <div className="mt-4 md:mt-0">
            <ul
              className={`flex ${direction === "rtl" ? "space-x-6 space-x-reverse" : "space-x-6"}`}
            >
              <li>
                <a href="#" className="hover:underline">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  {t("footer.terms")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
