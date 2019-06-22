import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';
import FormInlineMessage from './FormInlineMessage.js';

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
    data: {
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
    },
    errors: {},
    // email: '',
    // password: '',
  };

  validate(data) {
    const errors = {};

    if (!data.name) errors.name = "This field can't be blank";
    if (!data.players) errors.players = "This field can't be blank";
    if (!data.publisher) errors.publisher = "This field can't be blank";
    if (!data.thumbnail) errors.thumbnail = "This field can't be blank";
    if (data.price <= 0) errors.price = "Too cheap, don't you think";
    if (data.duration <= 0) errors.duration = "Too short, isn't it";

    return errors;
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  handleStringChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  handleNumberChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });
  handleCheckboxChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.checked },
    });
  // toggleTag = tag =>
  //   this.state.tags.includes(tag._id)
  //     ? this.state({ tags: this.state.tags.filter(id => id !== tag._id) })
  //     : this.setState({ tags: [...this.state.tags, tag._id] });
  // handleGenreChange = genre => this.setState({ genre: genre._id });

  render() {
    const { data, errors } = this.state;
    return (
      <>
        <form action="" className="ui form" onSubmit={this.handleSubmit}>
          <div className="ui grid">
            <div className="twelve wide column">
              <div className={errors.name ? 'field error' : 'field'}>
                <label htmlFor="">
                  Game Title
                  <input
                    id="name"
                    name="name"
                    placeholder="Full Game Title"
                    type="text"
                    value={data.name}
                    onChange={this.handleStringChange}
                  />
                </label>
                <FormInlineMessage content={errors.name} type="error" />
              </div>
              <div className={errors.description ? 'field error' : 'field'}>
                <label htmlFor="">
                  Description
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Game Description"
                    type="text"
                    value={data.description}
                    onChange={this.handleStringChange}
                  />
                </label>
                <FormInlineMessage
                  content={errors.descriptionthumbnail}
                  type="error"
                />
              </div>
            </div>
            <div className="four wide column">
              <ReactImageFallback
                src={data.thumbnail}
                fallbackImage="http://via.placeholder.com/250x250"
                alt="Thumbnail"
                className="ui image"
              />
            </div>
          </div>

          <div className={errors.thumbnail ? 'field error' : 'field'}>
            <label htmlFor="">
              Thumbnail
              <input
                id="thumbnail"
                name="thumbnail"
                placeholder="Image URL"
                type="text"
                value={data.thumbnail}
                onChange={this.handleStringChange}
              />
            </label>
            <FormInlineMessage content={errors.thumbnail} type="error" />
          </div>

          <div className="three fields">
            <div className={errors.price ? 'field error' : 'field'}>
              <label htmlFor="">
                Price
                <input
                  id="price"
                  name="price"
                  placeholder="Price"
                  type="number"
                  value={data.price}
                  onChange={this.handleNumberChange}
                />
              </label>
              <FormInlineMessage content={errors.price} type="error" />
            </div>
            <div className={errors.duration ? 'field error' : 'field'}>
              <label htmlFor="">
                Duration
                <input
                  id="duration"
                  name="duration"
                  placeholder="Duration"
                  type="number"
                  value={data.duration}
                  onChange={this.handleNumberChange}
                />
              </label>
              <FormInlineMessage content={errors.duration} type="error" />
            </div>
            <div className={errors.players ? 'field error' : 'field'}>
              <label htmlFor="">
                No of players
                <input
                  id="players"
                  name="players"
                  placeholder="Players"
                  type="text"
                  value={data.players}
                  onChange={this.handleStringChange}
                />
              </label>
              <FormInlineMessage content={errors.players} type="error" />
            </div>
          </div>

          <div className="inline field">
            <input
              id="featured"
              name="featured"
              type="checkbox"
              checked={data.featured}
              onChange={this.handleCheckboxChange}
            />
            <label htmlFor="featured">Featured?</label>
          </div>

          {/* <div className="field">
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
          </div> */}

          {/* <div className="field">
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
          </div> */}

          <div className={errors.name ? 'field error' : 'field'}>
            <label htmlFor="">Publisher</label>
            <select
              name="publisher"
              value={data.publisher}
              onChange={this.handleNumberChange}
            >
              <option value="0">Choose Publisher</option>
              {this.props.publishers.map(publisher => (
                <option value={publisher._id} key={publisher._id}>
                  {publisher.name}
                </option>
              ))}
            </select>
            <FormInlineMessage content={errors.name} type="error" />
          </div>

          <div className="ui fluid buttons">
            <button className="ui button primary" type="submit">
              Create
            </button>
            <div className="or" />
            <a className="ui button" onClick={this.props.cancel}>
              Cancel
            </a>
          </div>
        </form>
        {/* <form action="" className="ui form" onSubmit={this.handleSubmit}>
          <div className="ui grid">
            <div className="twelve wide column">
              <div className="field">
                <label htmlFor="">
                  Email
                  <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleStringChange}
                  />
                </label>
                <label htmlFor="">
                  Password
                  <input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleStringChange}
                  />
                </label>
                <label htmlFor="">
                  Confirm Password
                  <input
                    id="password"
                    name="password"
                    placeholder="Confirm Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleStringChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="ui fluid buttons">
            <button className="ui button primary" type="submit">
              Sign Up
            </button>
            <div className="or" />
            <a className="ui button" onClick={this.props.cancel}>
              Cancel
            </a>
          </div>
        </form> */}
      </>
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
  // email: PropTypes.string,
  // password: PropTypes.string,
  cancel: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};
GameForm.defaultProps = {
  publishers: [],
};
