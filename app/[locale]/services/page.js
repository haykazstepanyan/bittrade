import Banner from "@/components/shared/banner/Banner";
import Image from "next/image";
import { Box, Container, Grid } from "@mui/material";
import styles from "./styles.module.css";
import { useTranslations } from "next-intl";
import SchoolIcon from "@mui/icons-material/School";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import Horizontal from "@/components/animations/Horizontal";

export default function Services() {
  const t = useTranslations("services");

  const icons = [SchoolIcon, LocalLibraryIcon, HourglassEmptyIcon];

  const serviceList = [...Array(3)].map((_, i) => ({
    id: i,
    title: t(`list.${i}.title`),
    description: t(`list.${i}.description`),
    Icon: icons[i],
  }));

  return (
    <>
      <Banner title={t("pageName")} home={t("home")} />
      <section className={styles.section}>
        <Container maxWidth="lg">
          <Box className={styles.servicesBox}>
            <Box className={styles.centeredText}>
              <h2 className={styles.sectionHeading}>
                {t.rich("title", {
                  span: (chunks) => <span className="brandText">{chunks}</span>,
                })}
              </h2>
              <p className={styles.servicesDescription}>{t("description")}</p>
            </Box>
            <Horizontal
              hiddenProps={{ opacity: 0, y: 125 }}
              visibleProps={{ opacity: 1, y: 0 }}
            >
              <Grid container className={styles.spaceBetween}>
                {serviceList.map(({ id, src, title, description, Icon }) => (
                  <Grid item md={4} key={id} className={styles.serviceItem}>
                    <Box>
                      <Box className={styles.serviceImageBox}>
                        {src ? (
                          <Image src={src} alt={src} width={48} height={48} />
                        ) : (
                          <Icon />
                        )}
                      </Box>
                      <h6 className={styles.sectionItemTitle}>{title}</h6>
                      <p className={styles.descriptionNoMargin}>
                        {description}
                      </p>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Horizontal>
          </Box>
        </Container>
      </section>
    </>
  );
}
