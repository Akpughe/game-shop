import React, { Component } from 'react';

export default class GameForm extends Component {
  state = {
    name: '',
    description: '',
    price: 0,
    duration: 0,
    players: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.type === "number" 
  ? parseInt(e.target.value, 10)
  :e.target.value });

  
  render() {
    return (
      <form action="" className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="">
            Game Title
            <input
              id="name"
              name="name"
              placeholder="Full Game Title"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="">
            Description
            <textarea
              id="description"
              name="description"
              placeholder="Game Description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="three fields">
          <div className="field">
            <label htmlFor="">
              Price
              <input
                id="price"
                name="price"
                placeholder="Price"
                type="number"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="field">
            <label htmlFor="">
              Duration
              <input
                id="duration"
                name="duration"
                placeholder="Duration"
                type="number"
                value={this.state.duration}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="field">
            <label htmlFor="">
              No of players
              <input
                id="players"
                name="players"
                placeholder="Players"
                type="text"
                value={this.state.players}
                onChange={this.handleChange}
              />
            </label>
          </div>
        </div>

        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}
