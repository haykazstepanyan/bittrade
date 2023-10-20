"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import styles from "./homePage.module.css";
import Horizontal from "../animations/Horizontal";

export default function FAQ({ faqContent }) {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (isExpanded, panelName) => {
    setExpanded(isExpanded ? panelName : false);
  };

  return (
    <section className={clsx(styles.section, styles.faqSection)}>
      <Container maxWidth="lg">
        <Box className={clsx(styles.centeredText, styles.relative)}>
          <h2 className={styles.sectionHeading}>{faqContent.title}</h2>
          <p className={clsx(styles.description, styles.faqDescription)}>
            {faqContent.description}
          </p>
        </Box>
        <Box className={clsx(styles.flexCenterAligned, styles.faqWrapper)}>
          <Horizontal
            hiddenProps={{
              opacity: 0,
              x: -75,
            }}
            visibleProps={{
              opacity: 1,
              x: 0,
            }}
            className={styles.faqContentItem}
          >
            <Box>
              {faqContent.list.map(({ id, panelName, question, answer }) => (
                <Accordion
                  key={id}
                  disableGutters
                  expanded={expanded === panelName}
                  className={styles.accordion}
                  onChange={(_, isExpanded) =>
                    handleAccordionChange(isExpanded, panelName)
                  }
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === panelName ? (
                        <RemoveCircleOutlineIcon
                          className={styles.brandColor}
                        />
                      ) : (
                        <AddCircleOutlineIcon className={styles.brandColor} />
                      )
                    }
                    className={clsx({
                      [styles.brandColor]: expanded === panelName,
                    })}
                  >
                    {question}
                  </AccordionSummary>
                  <AccordionDetails
                    className={clsx(
                      styles.descriptionNoMargin,
                      styles.faqAnswer
                    )}
                  >
                    {answer}
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Horizontal>
          <Horizontal
            hiddenProps={{
              opacity: 0,
              translateX: 75,
            }}
            visibleProps={{
              opacity: 1,
              translateX: 0,
            }}
            className={styles.faqContentItem}
          >
            <Box>
              <Image src="/faq.png" alt="FAQ" width={440} height={370} />
            </Box>
          </Horizontal>
        </Box>
      </Container>
    </section>
  );
}
