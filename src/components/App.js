import React from 'react'
import _orderBy from "lodash/orderBy"
import GamesList from "./GamesList"
const games = [
    {
      _id: '1',
      name: 'Quadropolis',
    featured:true,
      thumbnail:
        'https://cf.geekdo-images.com/imagepage/img/imtRW8htetQkrekOqgHuZSTIWhw=/fit-in/900x600/filters:no_upscale()/pic2840020.jpg',
      price: 32.99,
      players: '2-4',
      duration: 60
    },
    {
      _id: '2',
      name: 'Five Tribes',
        featured:false,
      thumbnail:
        'https://cf.geekdo-images.com/imagepage/img/zemPGqup_Yeve-4N-H0ufktr9Fg=/fit-in/900x600/filters:no_upscale()/pic2055255.jpg',
      price: 51.00,
      players: '2-4',
      duration: 80
    },
    {
      _id: '3',
      name: 'Roll for the Galaxy',
        featured:false,
      thumbnail:
        'https://cf.geekdo-images.com/imagepage/img/imtRW8htetQkrekOqgHuZSTIWhw=/fit-in/900x600/filters:no_upscale()/pic2840020.jpg',
      price: 29.99,
      players: '2-5',
      duration: 45
    }
  ];

  class App extends React.Component{
        state={
            games:[]
        };

        componentDidMount(){
            this.setState({games:_orderBy(games, ['featured','name'], ['desc', 'asc'])})
        }

      render(){
          return(
            <div className="ui container">
                <GamesList games={this.state.games}/>
            </div>
          )
        
      }
  }

export default App;
