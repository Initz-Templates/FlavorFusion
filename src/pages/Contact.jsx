import React from 'react';
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
}));

const ContactUs = () => {
  const classes = useStyles();
  const [reason, setReason] = React.useState('');

  const handleChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = (event) => {
    
    
    // event.preventDefault();
    // Handle form submission logic
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Your Email"
              variant="outlined"
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
    </div>
  );
};

export default ContactUs;
