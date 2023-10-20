import { Box, Container, List, ListItem } from "@mui/material";
import styles from "./styles/footer.module.css";
import Link from "next/link";
import LogoHorizontalLight from "../svg/LogoHorizontalLight";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className={styles.footer}>
      <Container maxWidth="lg">
        <Box className={styles.footerWrapper}>
          <LogoHorizontalLight width={320} height={84} />
          <Box>
            <h6 className={styles.footerLinks}>{t("links")}</h6>
            <List>
              <ListItem className={styles.footerLinksItem}>
                <Link href="/about">{t("aboutUs")}</Link>
              </ListItem>
              <ListItem className={styles.footerLinksItem}>
                <Link href="/team">{t("teams")}</Link>
              </ListItem>
              <ListItem className={styles.footerLinksItem}>
                <Link href="/services">{t("services")}</Link>
              </ListItem>
              <ListItem className={styles.footerLinksItem}>
                <Link href="/contact">{t("contact")}</Link>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box className={styles.footerBottom}>
          <Box className={styles.copyRight}>
            <p>
              &copy; {new Date().getFullYear()} {t("allRights")}
            </p>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
