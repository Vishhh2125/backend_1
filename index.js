import express from "express"

import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port =process.env.PORT;

const data =[
  {
    "id": 1,
    "title": "Inception",
    "year": 2010,
    "genre": "Science Fiction",
    "rating": 8.8,
    "description": "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    "id": 2,
    "title": "The Shawshank Redemption",
    "year": 1994,
    "genre": "Drama",
    "rating": 9.3,
    "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    "id": 3,
    "title": "The Dark Knight",
    "year": 2008,
    "genre": "Action",
    "rating": 9.0,
    "description": "When the menace known as the Joker wreaks havoc on Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    "id": 4,
    "title": "Interstellar",
    "year": 2014,
    "genre": "Adventure",
    "rating": 8.6,
    "description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    "id": 5,
    "title": "Parasite",
    "year": 2019,
    "genre": "Thriller",
    "rating": 8.6,
    "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
  }
]

app.listen(port,()=>{
    console.log("listening on port ",port);
})

app.get("/",(req,res)=>{
    res.send("hello this is vishnu speaking ");

})

app.get("/movie",(req,res)=>{
    res.json(data)

})