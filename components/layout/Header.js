import { Box, Container, List, ListItem, Toolbar } from "@mui/material";
import styles from "./styles/header.module.css";
import Link from "next/link";
import NavLink from "../shared/link/NavLinks";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";
import { pages } from "@/constants/homePage";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import BackCallDialog from "../dialogs/BackCallDialog";
import LogoHorizontalLight from "../svg/LogoHorizontalLight";

export function Header({ locale }) {
  const t = useTranslations();

  const dialogContent = {
    buttonText: t("dialogs.orderCallButtonText"),
    dialogTitle: t("dialogs.orderCallDialogTitle"),
    dialogContent: t("dialogs.orderCallDialogContent"),
    dialogButton: t("dialogs.orderCallDialogButton"),
    namePlaceholder: t("dialogs.namePlaceholder"),
    phonePlaceholder: t("dialogs.phonePlaceholder"),
    nameError: t("dialogs.nameError"),
    phoneError: t("dialogs.phoneError"),
    emailError: t("dialogs.emailError"),
    invalidPhoneNumberError: t("dialogs.invalidPhoneNumberError"),
  };

  return (
    <>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          className={clsx(styles.toolbar, styles.topToolbar)}
        >
          <Box>
            <Link href="tel:0037455111222" className={styles.phoneNumber}>
              + (374) 55 111222
            </Link>
            <BackCallDialog dialogContent={dialogContent} />
          </Box>
          <Box>
            <LocaleSwitcher locale={locale} />
          </Box>
        </Toolbar>
      </Container>
      <Container maxWidth="lg" className={styles.navBar}>
        <Toolbar
          disableGutters
          className={clsx(styles.toolbar, styles.bottomToolbar)}
        >
          <Link href="/">
            <LogoHorizontalLight width={260} height={90} />
          </Link>
          <List className={styles.navbar}>
            {pages.map(({ key, route }) => (
              <ListItem className={styles.navbarItems} key={key}>
                <NavLink
                  title={t(`navLinks.${key}`)}
                  route={route}
                  activeClassName="brandText"
                />
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </Container>
    </>
  );
}
