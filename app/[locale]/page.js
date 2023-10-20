import Advisers from "@/components/homePage/Advisers";
import FAQ from "@/components/homePage/FAQ";
import Pricing from "@/components/homePage/Pricing";
import Intro from "@/components/homePage/Intro";
import AboutBanner from "@/components/homePage/AboutBanner";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  const pricingKeys = ["basic", "standard", "premium"];
  const featuresData = {
    basic: {
      id: 1,
      optionsLength: 4,
      price: 99,
      hiddenProps: { opacity: 0, x: -100 },
      visibleProps: { opacity: 1, x: 0 },
    },
    standard: {
      id: 2,
      optionsLength: 6,
      price: 149,
      hiddenProps: { opacity: 0, y: 100 },
      visibleProps: { opacity: 1, y: 0 },
    },
    premium: {
      id: 3,
      optionsLength: 7,
      price: 199,
      hiddenProps: { opacity: 0, x: 100 },
      visibleProps: { opacity: 1, x: 0 },
    },
  };

  const pricingContent = {
    heading: t.rich("pricing.heading", {
      span: (chunks) => <span className="brandText">{chunks}</span>,
    }),
    secondaryTitle: t("pricing.secondaryTitle"),
    button: t("pricing.button"),
    options: pricingKeys.map((key) => ({
      id: featuresData[key].id,
      price: featuresData[key].price,
      hiddenProps: featuresData[key].hiddenProps,
      visibleProps: featuresData[key].visibleProps,
      name: t(`pricing.${key}.title`),
      features: [...Array(featuresData[key].optionsLength)].map((_, i) =>
        t(`pricing.${key}.features.${i}`)
      ),
    })),
  };

  const faqContent = {
    title: t.rich("faq.title", {
      span: (chunks) => <span className="brandText">{chunks}</span>,
    }),
    description: t("faq.description"),
    list: [...Array(6)].map((_, i) => ({
      id: i,
      panelName: `panel${i}`,
      question: t(`faq.list.${i}.question`),
      answer: t(`faq.list.${i}.answer`),
    })),
  };

  const dialogContent = {
    dialogTitle: t("dialogs.pricingPlanDialogTitle"),
    dialogContent: t("dialogs.pricingPlanDialogContent"),
    dialogButton: t("dialogs.pricingPlanDialogButton"),
    namePlaceholder: t("dialogs.namePlaceholder"),
    phonePlaceholder: t("dialogs.phonePlaceholder"),
    emailPlaceholder: t("dialogs.emailPlaceholder"),
    nameError: t("dialogs.nameError"),
    phoneError: t("dialogs.phoneError"),
    emailError: t("dialogs.emailError"),
    invalidEmailError: t("dialogs.invalidEmailError"),
    invalidPhoneNumberError: t("dialogs.invalidPhoneNumberError"),
  };

  return (
    <>
      <Intro />
      <AboutBanner />
      <Pricing pricingContent={pricingContent} dialogContent={dialogContent} />
      <Advisers />
      <FAQ faqContent={faqContent} />
    </>
  );
}
