import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';

const tags = [
  { _id: 1, name: 'dice' },
  { _id: 2, name: 'economics' },
  { _id: 3, name: 'family' },
];
const genres = [
  { _id: 1, name: 'abstract' },
  { _id: 2, name: 'euro' },
  { _id: 3, name: 'ameritrash' },
];

export default class GameForm extends Component {
  state = {
    name: '',
    description: '',
    price: 0,
    duration: 0,
    players: '',
    featured: false,
    tags: [],
    genre: 1,
    publisher: 0,
    thumbnail: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleStringChange = e => this.setState({ [e.target.name]: e.target.value });
  handleNumberChange = e =>
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) });
  handleCheckboxChange = e =>
    this.setState({ [e.target.name]: e.target.checked });
  toggleTag = tag =>
    this.state.tags.includes(tag._id)
      ? this.state({ tags: this.state.tags.filter(id => id !== tag._id) })
      : this.setState({ tags: [...this.state.tags, tag._id] });
  handleGenreChange = genre => this.setState({ genre: genre._id });

  render() {
    return (
      <form action="" className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
            <div className="field">
              <label htmlFor="">
                Game Title
                <input
                  id="name"
                  name="name"
                  placeholder="Full Game Title"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleStringChange}
                />
              </label>
            </div>
            <div className="field">
              <label htmlFor="">
                Description
                <textarea
                  id="description"
                  name="description"
                  placeholder="Game Description"
                  type="text"
                  value={this.state.description}
                  onChange={this.handleStringChange}
                />
              </label>
            </div>
          </div>
          <div className="four wide column">
            <ReactImageFallback
              src={this.state.thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="Thumbnail"
              className="ui image"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="">
            Thumbnail
            <input
              id="thumbnail"
              name="thumbnail"
              placeholder="Image URL"
              type="text"
              value={this.state.thumbnail}
              onChange={this.handleStringChange}
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
                onChange={this.handleNumberChange}
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
                onChange={this.handleNumberChange}
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
                onChange={this.handleStringChange}
              />
            </label>
          </div>
        </div>

        <div className="inline field">
          <input
            id="featured"
            name="featured"
            type="checkbox"
            checked={this.state.featured}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="featured">Featured?</label>
        </div>

        <div className="field">
          <label>Tags</label>
          {tags.map(tag => {
            return (
              <div key={tag._id} className="inline field">
                <input
                  id={`tag-${tag._id}`}
                  type="checkbox"
                  checked={this.state.tags.includes(tag._id)}
                  onChange={() => this.toggleTag(tag)}
                />
                <label htmlFor={`tag-${tag._id}`}>{tag.name}</label>
              </div>
            );
          })}
        </div>

        <div className="field">
          <label htmlFor="">Genre</label>
          {genres.map(genre => {
            return (
              <div key={genre._id} className="inline field">
                <input
                  id={`genre-${genre._id}`}
                  type="radio"
                  checked={this.state.genre === genre._id}
                  onChange={() => this.handleGenreChange(genre)}
                />
                <label htmlFor={`ganre-${genre._id}`}>{genre.name}</label>
              </div>
            );
          })}
        </div>

        <div className="field">
          <label htmlFor="">Publisher</label>
          <select
            name="publisher"
            value={this.state.publisher}
            onChange={this.handleNumberChange}
          >
            <option value="0">Choose Publisher</option>
            {this.props.publishers.map(publisher => (
              <option value={publisher._id} key={publisher._id}>
                {publisher.name}
              </option>
            ))}
          </select>
        </div>

        <div className="ui fluid buttons">
          <button className="ui button primary" type="submit">
            Create
          </button>
          <div className="or" />
          <a className="ui button" onClick={this.props.cancel}>Cancel</a>
        </div>
      </form>
    );
  }
}

GameForm.propTypes = {
  publishers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
  cancel: PropTypes.func.isRequired
};
GameForm.defaultProps = {
  publishers: [],
};
