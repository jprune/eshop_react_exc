import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button, Rating } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ItemModal({ open, setOpen, cart }) {
  const handleClose = () => setOpen(false);

  console.log(cart);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box
          sx={style}
          className="flex flex-col items-center"
        >
          <Typography>Do you want to proceed to checkout?</Typography>
          <div className="flex flex-row w-full">
            {
                cart.length <= 3
                  ? cart.map((item) => (
                    <div className="flex flex-col items-center justify-center">
                      <img src={item.cartItem.image} alt={item.cartItem.name} className="max-h-[300px]" />
                      <div>
                        <Typography>
                          {item.cartItem.name}
                        </Typography>
                        <Typography>
                          {item.cartItem.price} CHF
                        </Typography>
                        <Typography>
                          {item.cartItem.rating} / 5
                        </Typography>
                        <Rating name="read-only" value={item.cartItem.rating} readOnly />
                      </div>
                    </div>
                  )) : null
          }
          </div>
          <Button>Proceed to Checkout</Button>

          {/* <Typography id="transition-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
        </Box>
      </Fade>
    </Modal>
  );
}

export default ItemModal;
