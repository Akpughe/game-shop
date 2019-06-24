import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from './GamesList';
import GameForm from './GameForm';
import TopNavigation from './TopNavigation';
// import Featured from './Featured';

const publishers = [
  {
    _id: 1,
    name: 'Days of Wonder',
  },
  {
    _id: 2,
    name: 'Rio Grande Games',
  },
  {
    _id: 3,
    name: 'EA Sports',
  },
  {
    _id: 4,
    name: 'Unity Games',
  },
];

const games = [
  {
    _id: '1',
    name: 'Quadropolis',
    publishers: 1,
    descs: 'I am QUAD',
    featured: true,
    thumbnail:
      'https://cf.geekdo-images.com/imagepage/img/imtRW8htetQkrekOqgHuZSTIWhw=/fit-in/900x600/filters:no_upscale()/pic2840020.jpg',
    price: 32.99,
    players: '2-4',
    duration: 60,
  },
  {
    _id: '2',
    name: 'Five Tribes',
    publishers: 2,
    descs: 'I am TRIBES',
    featured: false,
    thumbnail:
      'https://cf.geekdo-images.com/imagepage/img/zemPGqup_Yeve-4N-H0ufktr9Fg=/fit-in/900x600/filters:no_upscale()/pic2055255.jpg',
    price: 51.0,
    players: '2-4',
    duration: 80,
  },
  {
    _id: '3',
    name: 'Roll for the Galaxy',
    publishers: 4,
    descs: 'I am GALAXY',
    featured: false,
    thumbnail:
      'https://cf.geekdo-images.com/imagepage/img/imtRW8htetQkrekOqgHuZSTIWhw=/fit-in/900x600/filters:no_upscale()/pic2840020.jpg',
    price: 29.99,
    players: '2-5',
    duration: 45,
  },
];

class App extends React.Component {
  state = {
    games: [],
    showDesc: false,
    showGameForm: false,
    selectedGame:{}
  };

  componentDidMount() {
    this.setState({
      games: this.sortGames(games),
    });
  }

  sortGames(games) {
    return _orderBy(games, ['featured', 'name'], ['desc', 'asc']);
  }

  toggleFeatured = gameId => {
    const newGames = this.state.games.map(game => {
      if (game._id === gameId) return { ...game, featured: !game.featured };
      return game;
    });
    this.setState({ games: this.sortGames(newGames) });
  };

  toggleDesc = gameId => {
    const newDesc = this.state.games.map(game => {
      if (game._id === gameId) return { ...game, descs: !game.descs };
      return game;
    });
    this.setState({ games: newDesc });
  };

  descToggle() {
    this.setState({ showDesc: !this.state.showDesc });
  }
  showGameForm = () => this.setState({ showGameForm: true, selectedGame:{} });
  hideGameForm = () => this.setState({ showGameForm: false,selectedGame:{} }); 


  selectedGameForEditing = game => this.setState({selectedGame:game, showGameForm: true})

  addGame = game => this.setState({
    games:this.sortGames([
      //appending the already existing games
      ...this.state.games,
      {
        ...game ,
        _id: this.state.games.length +1
      }
    ]),
    showGameForm: false,
  })
  render() {
    const numberOfColumns = this.state.showGameForm ? 'ten' : 'sixteen';
    return (
      <div className="ui container">
        <TopNavigation showGameForm={this.showGameForm} />
        <div className="ui stackable grid">
          {this.state.showGameForm && (
            <div className="six wide column">
              <GameForm publishers={publishers} cancel={this.hideGameForm} 
              submit = {this.addGame}
              game={this.state.selectedGame}
              />
            </div>
          )}
          <div className={`${numberOfColumns} wide column`}>
            <GamesList
              games={this.state.games}
              a={this.toggleFeatured}
              desc={this.toggleDesc}
              ccdesc={this.descs}
              showDesc={this.state.showDesc}
              descToggle={this.descToggle.bind(this)}
              editGame={this.selectedGameForEditing}
            />
          </div>
        </div>

        <br />
      </div>
    );
  }
}

export default App;
