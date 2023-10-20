"use client";

import clsx from "clsx";
import { Box, Container, Grid } from "@mui/material";
import OutlinedButton from "@/components/shared/button/OutlinedButton";
import styles from "./homePage.module.css";
import Horizontal from "../animations/Horizontal";
import PricingPlanDialog from "../dialogs/PricingPlanDialog";
import { useState } from "react";
import CheckSvg from "../svg/CheckSvg";

export default function Pricing({ pricingContent, dialogContent }) {
  const [open, setOpen] = useState(false);
  const [selectedPricingPlan, setSelectedPricingPlan] = useState("");

  const handleChange = (plan = "") => {
    setOpen(!open);
    setSelectedPricingPlan(plan);
  };

  return (
    <>
      <section className={clsx(styles.section, styles.relative)}>
        <Container maxWidth="lg">
          <Box>
            <Box className={styles.centeredText}>
              <h2 className={styles.sectionHeading}>
                {pricingContent.heading}
              </h2>
              <p
                className={clsx(
                  styles.description,
                  styles.sectionDescriptionText
                )}
              >
                {pricingContent.secondaryTitle}
              </p>
            </Box>
          </Box>
          <Grid container className={styles.spaceBetween}>
            {pricingContent.options.map((row) => (
              <Grid item md={4} key={row.id}>
                <Horizontal
                  hiddenProps={row.hiddenProps}
                  visibleProps={row.visibleProps}
                >
                  <Box
                    className={clsx(
                      styles.pricingItem,
                      row.id === 2
                        ? styles.centeredPricingPlan
                        : styles.edgePricingPlans
                    )}
                  >
                    <Box className={styles.pricingItemTop}>
                      <h6 className={styles.sectionItemTitle}>{row.name}</h6>
                      <p className={styles.price}>
                        <span
                          className={clsx("brandText", styles.priceBlueText)}
                        >
                          ${row.price}/
                        </span>
                        Monthly
                      </p>
                    </Box>
                    <Box className={styles.featuresContainer}>
                      {row.features.map((feature) => (
                        <Box
                          className={clsx(
                            styles.featuresItem,
                            styles.flexCenterAligned
                          )}
                          key={feature}
                        >
                          <CheckSvg fill="red" />
                          <span className={styles.featureText}>{feature}</span>
                        </Box>
                      ))}
                    </Box>
                    <OutlinedButton
                      className={styles.fullWidth}
                      buttonStyles={{
                        borderColor: "#cca75d",
                        color: "#cca75d",
                      }}
                      hoveredBgColor="#cca75d"
                      onClick={handleChange}
                    >
                      {pricingContent.button}
                    </OutlinedButton>
                  </Box>
                </Horizontal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      {open && (
        <PricingPlanDialog
          open={open}
          selectedPricingPlan={selectedPricingPlan}
          onClose={handleChange}
          dialogContent={dialogContent}
        />
      )}
    </>
  );
}
