"use client";

import { languages } from "@/constants/locale";
import { FormControl, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";
import styles from "./localeSwitcher.module.css";

export default function LocaleSwitcher({ locale }) {
  const pathname = usePathname();

  return (
    <FormControl
      className={styles.formControl}
      sx={{ m: 1, maxWidth: 80 }}
      size="small"
    >
      <Select
        classes={{
          root: styles.root,
          select: styles.languages,
        }}
        value={locale}
      >
        {languages.map(({ id, Icon, title, locale: locOption }) => (
          <MenuItem
            key={id}
            value={locOption}
            className={styles.languageOption}
          >
            <Link
              href={pathname}
              locale={locOption}
              className={styles.optionLink}
            >
              <Icon width={12} height={12} />
              <span className={styles.languageName}>{title}</span>
            </Link>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
