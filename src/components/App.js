import React from 'react';
import _orderBy from 'lodash/orderBy';
import GamesList from './GamesList';
import GameForm from './GameForm';
import TopNavigation from './TopNavigation';
import Publishers from './Publishers';
import api from "../api"
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

class App extends React.Component {
  state = {
    games: [],
    showDesc: false,
    showGameForm: false,
    handleShow: false,
    selectedGame: {},
  };

  componentDidMount() {
    api.games
    .fetchAll() 
      .then(games => this.setState({ games: this.sortGames(games) }));
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
  showGameForm = () => this.setState({ showGameForm: true, selectedGame: {} });
  hideGameForm = () => this.setState({ showGameForm: false, selectedGame: {} });

  handleShow = () => this.setState({ showPublishers: true });

  selectedGameForEditing = game =>
    this.setState({ selectedGame: game, showGameForm: true });

  saveGame = game => (game._id ? this.updateGame(game) : this.addGame(game));

  addGame = game =>
    this.setState({
      games: this.sortGames([
        //appending the already existing games
        ...this.state.games,
        {
          ...game,
          _id: this.state.games.length + 1,
        },
      ]),
      showGameForm: false,
    });

  updateGame = game =>
    this.setState({
      games: this.sortGames(
        this.state.games.map(item => (item._id === game._id ? game : item)),
      ),
      showGameForm: false,
    });

  deleteGame = game =>
    this.setState({
      games: this.state.game.filter(item => item._id !== game._id),
    });

  render() {
    const numberOfColumns = this.state.showGameForm ? 'ten' : 'sixteen';
    return (
      <div className="ui container">
        <TopNavigation
          showGameForm={this.showGameForm}
          // showPublishers={this.showPublishers}
        />
        <div className="ui stackable grid">
          {this.state.showGameForm && (
            <div className="six wide column">
              <GameForm
                publishers={publishers}
                cancel={this.hideGameForm}
                submit={this.saveGame}
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
              deleteGame={this.deleteGame}
            />
            {this.state.showPublishers && <Publishers />}
          </div>
          <div />
        </div>

        <br />
      </div>
    );
  }
}

export default App;
