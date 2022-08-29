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

export default function MediaCard({ data, setStateOfCart }) {
  const { name, descr, ram, image, price, rating, reviews, sold } = data;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    setStateOfCart({ name, image, price, rating })
  }

  return (
    <Card sx={{ maxWidth: 345 }} className="mx-2 border-gray-400">
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
        className="h-auto w-auto max-h-{140} max-w-{140}"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
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
