import Image from "next/image";
import { Box, Container } from "@mui/material";
import Horizontal from "../animations/Horizontal";
import styles from "./homePage.module.css";
import LogoVerticalLight from "../svg/LogoVerticalLight";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export default function Intro() {
  const t = useTranslations("homePage");

  return (
    <section className={styles.section}>
      <Container maxWidth="lg">
        <Box className={styles.chartsBox}>
          <Horizontal
            hiddenProps={{ opacity: 0, x: -50 }}
            visibleProps={{ opacity: 1, x: 0 }}
          >
            <Box className={styles.bannerContainer}>
              <Image
                className={styles.coinImage}
                src="/coin.png"
                alt="coin"
                width={90}
                height={80}
              />
              <h1 className={styles.bannerText}>
                {t.rich("investText", {
                  span: (chunks) => <span className="brandText">{chunks}</span>,
                })}
              </h1>
              <p className={clsx(styles.description, styles.introDescription)}>
                {t("investDescription")}
              </p>
            </Box>
          </Horizontal>
          <Horizontal
            hiddenProps={{ opacity: 0 }}
            visibleProps={{ opacity: 1 }}
          >
            <LogoVerticalLight width={450} height={450} />
          </Horizontal>
        </Box>
      </Container>
    </section>
  );
}
