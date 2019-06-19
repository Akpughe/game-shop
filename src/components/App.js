import React from 'react'
import _orderBy from "lodash/orderBy"
import GamesList from "./GamesList"
import Featured from './Featured'
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
            this.setState({
                games:this.sortGames(games)
            })
        }

        sortGames(games){
            return _orderBy(games, ['featured','name'], ['desc', 'asc']);
        }

        toggleFeatured=(gameId)=>{
            const newGames = this.state.games.map(game=>{
                if(game._id === gameId) return {...game, featured: !game.featured};
                return game;
            })
            this.setState({games:this.sortGames(newGames) })
        }

      render(){
          return(
            <div className="ui container">
                <GamesList 
                games={this.state.games} 
                a={this.toggleFeatured}
                />
            </div>
          )
        
      }
  }

export default App;
