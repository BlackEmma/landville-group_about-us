/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
      <Button variant="contained" onClick={handleClickOpen}>
        Contact Us
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Us</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            Your Name
            <span> *</span>
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            type="text"
            variant="outlined"
            placeholder="Your Name"
          />
          <DialogContentText>
            Your Email
            <span> *</span>
          </DialogContentText>
          <TextField
            margin="dense"
            id="email"
            type="email"
            variant="outlined"
            placeholder="Your Email"
          />
          <DialogContentText>
            Phone Number
          </DialogContentText>
          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title="🇺🇸"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </DropdownButton>
            <Form.Control aria-label="Text input with dropdown button" placeholder="+1" />
          </InputGroup>
          <DialogContentText>
            Your Message
          </DialogContentText>
          <TextField
            margin="dense"
            id="message"
            type="text"
            multiline
            rows={3}
            variant="outlined"
            placeholder="Your Message"
          />
          {/* <Form.Control as="textarea" rows={3} /> */}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Submite</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
