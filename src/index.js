import React, { Component } from 'react';
import {render} from "react-dom";
import GameCard from "./components/GameCard"
// import ReactDOM from 'react-dom'

// import './css/style.css'
import "semantic-ui-css/semantic.min.css"

    const games = [
        {
        //   _id: '1',
          name: 'Quadropolis',
          thumbnail:
            'https://cf.geekdo-images.com/imagepage/img/imtRW8htetQkrekOqgHuZSTIWhw=/fit-in/900x600/filters:no_upscale()/pic2840020.jpg',
          price: 32.99,
          players: '2-4',
          duration: 60
        },
        {
        //   _id: '2',
          name: 'Five Tribes',
          thumbnail:
            'https://cf.geekdo-images.com/imagepage/img/zemPGqup_Yeve-4N-H0ufktr9Fg=/fit-in/900x600/filters:no_upscale()/pic2055255.jpg',
          price: 51.00,
          players: '2-4',
          duration: 80
        },
        {
        //   _id: '3',
          name: 'Roll for the Galaxy',
          thumbnail:
            'https://cf.geekdo-images.com/imagepage/img/imtRW8htetQkrekOqgHuZSTIWhw=/fit-in/900x600/filters:no_upscale()/pic2840020.jpg',
          price: 29.99,
          players: '2-5',
          duration: 45
        }
      ];

render(<GameCard game={games[0]}/>, document.getElementById("root")); 