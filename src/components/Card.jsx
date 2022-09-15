import * as React from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import ItemModal from './ItemModal';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function MediaCard({ data, setStateOfCart, cart }) {
  const { name, descr, ram, image, price, rating, reviews, sold } = data;
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    setStateOfCart({ name, image, price, rating })
    setOpen(!open)
  }

  return (
    <Card 
    sx={{ border: '1px solid rgba(0,0,0,0.2)' }} 
    className={ !expanded 
    ? "flex flex-col justify-start items-center w-[350px] h-[500px]"
    : "flex flex-col justify-start items-center w-[350px]"
    }>
      <CardMedia
        component="img"
        image={image}
        alt={name}
        className="object-scale-down h-[250px]"
      />
      <CardContent className='flex flex-col items-center'>
        <Typography gutterBottom variant="h5" component="div" className='text-center'>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className='text-center'>
          {descr}
        </Typography>
      </CardContent>
      <CardActions className='flex justify-center items-center'>
        <IconButton size="small" onClick={handleClick}><AddShoppingCartIcon /></IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <ItemModal open={open} setOpen={setOpen} cart={cart}/>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 justify-center justify-items-start">
          <Typography  className="bg-gray-400 rounded-md px-2 py-1">
            {ram}
          </Typography>
          <Typography  className="bg-gray-400 rounded-md px-2 py-1">
            {`${sold} sold till now`}
          </Typography>
          <Typography  className="bg-gray-400 rounded-md px-2 py-1">
            {`${price} CHF`}
          </Typography>
          <Typography  className="bg-gray-400 rounded-md px-2 py-1">
            {`${rating} / 5 `}
          </Typography>
          <Typography  className="bg-gray-400 rounded-md px-2 py-1">
            {`${reviews} by our users`}
          </Typography>
        </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
