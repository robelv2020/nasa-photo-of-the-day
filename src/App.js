import React, {useState, useEffect} from "react";

// Importing the style
import "./App.css";

// setting up for Components
import Card from './components/Cards.js'

// setting up for API
import axios from 'axios'

import styled from 'styled-components'

const showBoxDiv = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`

function App() {
  const [image, setImage] = useState([])
  const [date, setDate] = useState([])
  const [exp, setExp] = useState([])
  const [title, setTitle] = useState([])

  //useEffect
useEffect(() => {
  axios
    .get(
      `https://api.nasa.gov/planetary/apod?date=${date}&api_key=nsgoV8jb5FEeibHFBrKf2IpoDDWzanILaYUbaiCJ`
    )
    .then(res => {
      setImage(res.data.url);
      setExp(res.data.explanation);
      setTitle(res.data.title);
      setDate(res.data.date);
    })
    .catch(err => console.log(err));
},[date])

  return (
    <showBoxDiv className = 'App'>
      <h1>Photo of the Day</h1>
        <card
          image = {image}
          date = {date}
          title = {title}
          exp = {exp}
           
        />
    </showBoxDiv>
  );
}

export default App;
