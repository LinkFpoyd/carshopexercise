import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Addcar(props) {

  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand:'', model: '', color: '', fuel: '', year: '', price: ''
  })

  // comment for github testing purposes
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value})
  }

  const addCar = () => {
    props.saveCar(car);
    handleClose();
  }

  return(
    <div>
      <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Car
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Car</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="brand"
              value={car.brand}
              onChange={event => handleInputChange(event)}
              label="Brand"
              fullWidth
            />
            <TextField
              margin="dense"
              name="model"
              value={car.model}
              onChange={event => handleInputChange(event)}
              label="Model"
              fullWidth
            />
            <TextField
              margin="dense"
              name="color"
              value={car.color}
              onChange={event => handleInputChange(event)}
              label="Color"
              fullWidth
            />
            <TextField
              margin="dense"
              name="fuel"
              value={car.fuel}
              onChange={event => handleInputChange(event)}
              label="Fuel"
              fullWidth
            />
            <TextField
              margin="dense"
              name="year"
              value={car.year}
              onChange={event => handleInputChange(event)}
              label="Year"
              fullWidth
            />
            <TextField
              margin="dense"
              name="price"
              value={car.price}
              onChange={event => handleInputChange(event)}
              label="Price"
              fullWidth
            />
          </DialogContent>
        <DialogActions>
         <Button onClick={handleClose} color="primary">
           Cancel
         </Button>
         <Button onClick={addCar} color="primary">
           Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}