import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  formControl: {
    minWidth: 200,
  },
  button: {
    marginTop: theme.spacing(2),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    textAlign: 'center',
    borderRadius: 8,
    outline: 'none', // Remove focus outline
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  const [reason, setReason] = useState('');
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic

    // Open modal on form submission success
    setOpen(true);

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="name"
              label="Your Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Your Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="reason-label">Reason for Contact</InputLabel>
              <Select
                labelId="reason-label"
                id="reason"
                value={reason}
                onChange={handleChange}
                label="Reason for Contact"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="reservation">Reservation</MenuItem>
                <MenuItem value="feedback">Feedback</MenuItem>
                <MenuItem value="question">Question</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="message"
              label="Your Message"
              multiline
              rows={4}
              variant="outlined"
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>

      {/* Modal for success message */}
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.modalContent}>
            <Typography variant="h6">Submission Successful!</Typography>
            <Typography>Your response has been recorded.</Typography>
            <Button onClick={handleClose} color="primary" variant="contained" className={classes.button}>
              OK
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ContactUs;
