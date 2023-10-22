import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from "@/public/Images/About/Mission.jpg"
interface EmployeeCardProps {
  firstName: string;
  lastName: string;
  position: string;
  imgUrl: string;
}
export default function EmployeeCard({firstName,lastName,position,imgUrl}:EmployeeCardProps) {
  return (
    <Card className=' shadow-lg m-4' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={imgUrl}
          height={300}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className=' text-center' component="div">
            {position}
          </Typography>
          <Typography gutterBottom variant="body2" className=' text-center' component="div">
          {firstName} {lastName}
          </Typography>
          {/*<Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
  </Typography>*/}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}