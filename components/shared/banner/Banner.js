import { Box, Container } from "@mui/material";
import Link from "next/link";
import styles from "./banner.module.css";
import { useTranslations } from "next-intl";

export default function Banner({ title, home }) {
  const t = useTranslations("navLinks");
  return (
    <Box className={styles.banner}>
      <Container>
        <h2 className={styles.team}>{t("home")}</h2>
        <p className={styles.link}>
          <Link className={styles.homeLink} href="/">
            {t("home")}
          </Link>
          {" / "}
          <span className={styles.pathname}>{title}</span>
        </p>
      </Container>
    </Box>
  );
}
