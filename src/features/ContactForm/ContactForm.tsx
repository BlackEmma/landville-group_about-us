/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import style from './ContactForm.module.css';

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    background: '#27282D',
    width: 540,
    height: 669,
    border: '1 solid rgba(255, 255, 255, 0.05)',
    boxShadow: '0 0 40 rgba(0, 0, 0, 0.1)',
    borderRadius: 12,
  },
  '& .MuiDialogActions-root': {
    padding: '0',
  },
}));

export default function ContactForm(): JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{
          background: '#264EB4',
          borderRadius: '4px',
          width: '119px',
          height: '40px',
          fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '13px',
          lineHeight: '20px',
          letterSpacing: '0.01em',
          color: '#FFFFFF',
          textTransform: 'none',
          boxShadow: 'none',
        }}
      >
        Contact Us
      </Button>
      <BootstrapDialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <div className={style.formName}>Contact Us</div>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider
          sx={{
            width: '540px',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.05)',
          }}
        />
        <DialogContent>
          <DialogContentText
            sx={{
              fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#FFFFFF',
            }}
          >
            Your Name
            <span className={style.star}> *</span>
          </DialogContentText>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            disableUnderline
            sx={{
              "& input": {
                color: '#777777',
              },
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1 solid rgba(255, 255, 255, 0.05)',
              borderRadius: '6px',
              width: '480px',
              height: '44px',
              padding: '11px 16px 13px',
              margin: '16px 0 20px',
            }}
          />
          <DialogContentText
            sx={{
              fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#FFFFFF',
            }}
          >
            Your Email
            <span className={style.star}> *</span>
          </DialogContentText>
          <Input
            id="email"
            type="email"
            placeholder="Your Email"
            disableUnderline
            sx={{
              "& input": {
                color: '#777777',
              },
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1 solid rgba(255, 255, 255, 0.05)',
              borderRadius: '6px',
              width: '480px',
              height: '44px',
              padding: '11px 16px 13px',
              margin: '16px 0 20px'
            }}
          />
          <DialogContentText
            sx={{
              fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#FFFFFF',
            }}
          >
            Phone Number
          </DialogContentText>
          <InputGroup
            className="mb-3"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              margin: '16px 0 20px',
              width: '480px',
              height: '44px',
            }}
          >
            <DropdownButton
              variant="outline-secondary"
              title="🇺🇸"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
            </DropdownButton>
            <Form.Control
              aria-label="Text input with dropdown button"
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
              value="+1"
            />
          </InputGroup>
          <DialogContentText
            sx={{
              fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#FFFFFF',
            }}
          >
            Your Message
          </DialogContentText>
          <Input
            id="message"
            type="text"
            multiline
            rows={4}
            placeholder="Your Message"
            disableUnderline
            sx={{
              "& .MuiInputBase-inputMultiline": {
                color: '#777777',
              },
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1 solid rgba(255, 255, 255, 0.05)',
              borderRadius: '6px',
              width: '480px',
              height: '120px',
              padding: '11px 16px 13px',
              margin: '16px 0'
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              background: '#264EB4',
              borderRadius: '4px',
              width: '480px',
              height: '44px',
              padding: '10px 24px',
              margin: '0 30px 30px',
              fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#FFFFFF',
              textTransform: 'none'
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
