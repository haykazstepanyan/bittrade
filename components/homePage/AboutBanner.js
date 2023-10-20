import Image from "next/image";
import clsx from "clsx";
import { Box, Container } from "@mui/material";
import styles from "./homePage.module.css";
import Horizontal from "../animations/Horizontal";
import { useTranslations } from "next-intl";

export default function AboutBanner({ text, description }) {
  const t = useTranslations();

  return (
    <section className={clsx(styles.section, styles.aboutBannerSection)}>
      <Container maxWidth="lg">
        <Box className={styles.aboutBox}>
          <Horizontal
            className={styles.motionWrapper}
            hiddenProps={{ opacity: 0, x: -75 }}
            visibleProps={{ opacity: 1, x: 0 }}
          >
            <Box className={clsx(styles.aboutBoxBanner, styles.relative)}>
              <Box className={styles.floatingContentTop}>
                <h3 className={clsx(styles.floatingCount, "brandText")}>
                  10 Years
                </h3>
                <p className={styles.floatingText}>Consulting Experience</p>
              </Box>
              <Image src="/about.png" alt="about" width={400} height={420} />
              <Box className={styles.floatingContentBottom}>
                <h3 className={clsx(styles.floatingCount, "brandText")}>
                  25K+
                </h3>
                <p className={styles.floatingText}>Satisfied Customers</p>
              </Box>
            </Box>
          </Horizontal>

          <Horizontal
            className={styles.motionWrapper}
            hiddenProps={{ opacity: 0, translateX: 75 }}
            visibleProps={{ opacity: 1, translateX: 0 }}
          >
            <Box className={styles.contentBox}>
              <h2 className={styles.sectionHeading}>
                {t.rich("homePage.greetingText", {
                  span: (chunks) => <span className="brandText">{chunks}</span>,
                })}
              </h2>
              <p className={styles.description}>
                {t("homePage.greetingDescription")}
              </p>
            </Box>
          </Horizontal>
        </Box>
      </Container>
    </section>
  );
}
