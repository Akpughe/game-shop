import React, { Component } from 'react';

export default class GameForm extends Component { 

    state={
        name:'',
        description:""
    }

    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state)
    }

    handleChange =e=>this.setState({[e.target.name]: e.target.value});

    handleNameChange=(e)=> this.setState({name:e.target.value})
    handleDescriptionChange=(e)=> this.setState({description:e.target.value})
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
        <button className="ui button" type="submit">
            Create
        </button>
      </form>
    );
  }
}
