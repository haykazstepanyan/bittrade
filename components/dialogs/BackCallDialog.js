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
import validator from "validator";
import { numberRegEx } from "@/constants/common";

export default function BackCallDialog({ dialogContent }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState({});

  const handleChangeDialog = () => setOpen(!open);

  const handleClick = () => {
    if (phoneNumber && !validator.isMobilePhone(phoneNumber)) {
      setError({
        invalidPhoneNumber: true,
      });
      return;
    }

    if (!name || !phoneNumber) {
      setError({
        name: !name,
        phoneNumber: !phoneNumber,
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

  return (
    <>
      <ContainedButton
        className={styles.backCall}
        padding="4px 12px"
        onClick={handleChangeDialog}
      >
        {dialogContent.buttonText}
      </ContainedButton>
      <Dialog
        open={open}
        onClose={handleChangeDialog}
        aria-labelledby="customized-dialog-title"
        PaperProps={{
          classes: {
            root: styles.dialogPaper,
          },
        }}
      >
        <DialogTitle
          id="customized-dialog-title"
          className={styles.dialogTitle}
        >
          {dialogContent.dialogTitle}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleChangeDialog}
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
            {dialogContent.dialogContent}
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
            <ContainedButton
              className={styles.formButton}
              onClick={handleClick}
            >
              {dialogContent.dialogButton}
            </ContainedButton>
          </FormControl>
        </DialogContent>
      </Dialog>
    </>
  );
}
