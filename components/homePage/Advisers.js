import Image from "next/image";
import clsx from "clsx";
import { Box, Container, Grid } from "@mui/material";
import { advisers } from "@/constants/homePage";
import styles from "./homePage.module.css";
import Horizontal from "../animations/Horizontal";
import { useTranslations } from "next-intl";

export default function Advisers({ children }) {
  const t = useTranslations("homePage");
  return (
    <section className={clsx(styles.section, styles.advisersSection)}>
      <Container maxWidth="lg">
        <Box className={styles.centeredText}>
          <h2 className={styles.sectionHeading}>
            {t.rich("advisersText", {
              span: (chunks) => <span className="brandText">{chunks}</span>,
            })}
          </h2>
          <p
            className={clsx(styles.description, styles.sectionDescriptionText)}
          >
            {t("advisersDescription")}
          </p>
        </Box>
        <Horizontal
          hiddenProps={{
            opacity: 0,
            y: 125,
          }}
          visibleProps={{
            opacity: 1,
            y: 0,
          }}
        >
          <Grid container className={styles.justifyCenter}>
            {advisers.map(({ id, name, position, img }) => (
              <Grid
                item
                sm={6}
                md={4}
                lg={3}
                key={id}
                className={clsx(styles.relative, styles.adviser)}
              >
                <Box className={styles.adviserImageWrapper}>
                  <Image
                    src={`/advisers/${img}`}
                    alt={`adviser_${id}`}
                    width={250}
                    height={305}
                    className={styles.advisersImage}
                  />
                  <Box className={styles.adviserWrapper}>
                    <Box className={styles.adviserData}>
                      <h6 className={styles.adviserName}>{name}</h6>
                      <p className={styles.descriptionNoMargin}>{position}</p>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Horizontal>
      </Container>
      {children}
    </section>
  );
}
