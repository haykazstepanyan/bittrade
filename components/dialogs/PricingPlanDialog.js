"use client";

import { useState } from "react";
import ContainedButton from "../shared/button/ContainedButton";
import styles from "./dialogs.module.css";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import validator from "validator";
import { numberRegEx } from "@/constants/common";

export default function PricingPlanDialog(props) {
  const { open, dialogContent, onClose } = props;
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  const handleClick = () => {
    if (phoneNumber && !validator.isMobilePhone(phoneNumber)) {
      console.log("here 1");

      setError({
        invalidPhoneNumber: true,
      });
      return;
    }

    if (email && !validator.isEmail(email)) {
      console.log("here 2");

      setError({
        invalidEmail: true,
      });
      return;
    }

    if (!name || !phoneNumber || !email) {
      console.log("here 3");
      setError({
        name: !name,
        phoneNumber: !phoneNumber,
        email: !email,
      });
      return;
    }

    setError({});
  };

  const handlePhoneNumberChange = (e) => {
    var { value } = e.target;
    if (value && !numberRegEx.test(value)) return;

    setPhoneNumber(value);
  };
  console.log(error);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      PaperProps={{
        classes: {
          root: styles.dialogPaper,
        },
      }}
    >
      <DialogTitle id="customized-dialog-title" className={styles.dialogTitle}>
        {dialogContent.dialogTitle}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <p className={styles.dialogContentText}>
          {dialogContent.pricingPlanDialogContent}
        </p>
        <FormControl fullWidth>
          <TextField
            variant="outlined"
            className={styles.input}
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={dialogContent.namePlaceholder}
            error={!!error.name}
            helperText={!!error.name && dialogContent.nameError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PermIdentityIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            className={styles.input}
            size="small"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder={dialogContent.phonePlaceholder}
            error={!!error.invalidPhoneNumber || !!error.phoneNumber}
            helperText={
              (!!error.invalidPhoneNumber &&
                dialogContent.invalidPhoneNumberError) ||
              (!!error.phoneNumber && dialogContent.phoneError)
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneForwardedIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            variant="outlined"
            className={styles.input}
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={dialogContent.emailPlaceholder}
            error={!!error.invalidEmail || !!error.email}
            helperText={
              (!!error.invalidEmail && dialogContent.invalidEmailError) ||
              (!!error.email && dialogContent.emailError)
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <ContainedButton className={styles.formButton} onClick={handleClick}>
            {dialogContent.dialogButton}
          </ContainedButton>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
}
