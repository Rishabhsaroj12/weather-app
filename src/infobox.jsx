import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import "./infobox.css";

export default function InfoBox({ info}) { 
    const Init_url = "https://media.istockphoto.com/id/2165741070/photo/scenic-views-of-mumbai-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=tZV0KNW-nmP5r2HXrAf_f8LS8rZwf3U6sCJWlgXqRVk=";
    const HotURL = "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";

    const coldURl = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const rainURL = "https://images.unsplash.com/photo-1718917911088-23f5d4b0bacc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="infobox">
            <div className="cardcontainer">

          
             <Card sx={{ maxWidth: 345, borderRadius: '20px', boxShadow: 5, backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>

     <CardMedia
  component="img"
  image={info.humidity > 80 ? rainURL : info.temp > 15 ? HotURL : coldURl}
  alt="Weather"
   sx={{
    width: '90%',
    height: 180,
    borderRadius: '12px',
    margin: '10px auto 0',
    display: 'block',
    objectFit: 'cover'
  }}
/>


  <CardContent sx={{ padding: '20px' }}>
  <Typography
    gutterBottom
    variant="h5"
    component="div"
    sx={{ fontWeight: 600, fontSize: '1.8rem', color: '#333' }}
  >
    {info.city}
  </Typography>

  <Typography
    variant="body2"
    component="div"
    sx={{ fontSize: '1rem', color: '#444', lineHeight: 1.6 }}
  >
    <div>🌡️ Temperature: {info.temp}&deg;C</div>
    <div>💧 Humidity: {info.humidity}%</div>
    <div>🌡️ Min Temp: {info.temp_min}&deg;C</div>
    <div>🌡️ Max Temp: {info.temp_max}&deg;C</div>
    <p>
      🌥️ The weather is <i>{info.weather}</i> <br />
      🤒 Feels like: {info.feelslike}&deg;C
    </p>
  </Typography>
</CardContent>

      
    </Card>
      </div>
        </div>
    );
}