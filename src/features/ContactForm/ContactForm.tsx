import * as React from 'react';
import Divider from '@mui/material/Divider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import StyledButton from '../../Components/StyledContactButton/StyledButton';
import StyledDialogContentText from '../../Components/StyledDialogContentText/StyledDialogContentText';
import StyledInput from '../../Components/StyledInput/StyledInput';
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
      <StyledButton
        width="119px"
        height="40px"
        weight={600}
        fontSize="13px"
        lineHeight="20px"
        letterSpacing="0.01em"
        onClick={handleClickOpen}
      >
        Contact Us
      </StyledButton>
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
          <StyledDialogContentText>
            Your Name
            <span className={style.star}> *</span>
          </StyledDialogContentText>
          <StyledInput
            id="name"
            type="text"
            placeholder="Your Name"
          />
          <StyledDialogContentText>
            Your Email
            <span className={style.star}> *</span>
          </StyledDialogContentText>
          <StyledInput
            id="email"
            type="email"
            placeholder="Your Email"
          />
          <StyledDialogContentText>
            Phone Number
          </StyledDialogContentText>
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
                color: '#FFFFFF'
              }}
              value="+1"
            />
          </InputGroup>
          <StyledDialogContentText>
            Your Message
          </StyledDialogContentText>
          <StyledInput
            id="message"
            type="text"
            placeholder="Your Message"
            multiline
            height="120px"
            margin="16px 0"
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <StyledButton
            width="480px"
            height="44px"
            padding="10px 24px"
            margin="0 30px 30px"
            weight={700}
            fontSize="16px"
            lineHeight="24px"
            onClick={handleClose}
          >
            Submit
          </StyledButton>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
