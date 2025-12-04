import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import navEN from "./nav/navEn.json";
import navKh from "./nav/navKh.json";
import aboutEn from "./en/about.json";
import aboutKh from "./kh/about.json";
import footEn from "./footer/footEn.json";
import footKh from "./footer/footKh.json";
import seafreightEn from "./en/seafreight.json";
import seafreightKh from "./kh/seafreight.json";
import airfreightEn from "./en/airfreight.json";
import airfreightKh from "./kh/airfreight.json";
import warehouseEn from "./en/warehouse.json";
import warehouseKh from "./kh/warehouse.json";
import itsolutionEn from "./en/itsolution.json";
import itsolutionKh from "./kh/itsolution.json";
import contactEn from "./en/contact.json";
import contactKh from "./kh/contact.json";
import newsEn from "./en/news.json";
import newsKh from "./kh/news.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
        en: { 
            nav: navEN, 
            foot: footEn,
            about: aboutEn,
            seaFreight: seafreightEn,
            airFreight: airfreightEn,
            warehouse: warehouseEn,
            itSolution: itsolutionEn,
            contact: contactEn,
            news: newsEn
        },
        kh: { 
            nav: navKh,
            foot: footKh,
            about: aboutKh,
            seaFreight: seafreightKh,
            airFreight: airfreightKh,
            warehouse: warehouseKh,
            itSolution: itsolutionKh,
            contact: contactKh,
            news: newsKh
        }
    },
    lng: "en",              
    fallbackLng: "en",      
    interpolation: { escapeValue: false }
  });

export default i18n;
