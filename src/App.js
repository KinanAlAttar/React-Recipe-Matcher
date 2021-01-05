import React from 'react';
import Recipes from './components/Recipes'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      query: '',
      ingredients: '',
      recipes: []
    };
  }

  handleSubmit = (e) => {
    fetch(
    `/api?i=${this.state.ingredients.replace(/ /g,'')}&q=${this.state.query}`)
    .then(res => res.json())
    .then((data) => {
      this.setState({ recipes: data.results })
    })
    .catch(console.log)
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }
  
  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <div className = "form-group mb-2">
            <label>
              Enter Type Of Dish:
              <input 
                name        = "query"
                value       = {this.state.query}
                type        = "text"
                onChange    = {this.handleChange}
                className   = "mt-1 form-control"
                placeholder = "e.g. Turkey Sandwich"
              />
            </label>
          </div>
          <div className = "form-group mb-2">
            <label> 
              Enter Ingredients:
              <input 
                name        = "ingredients"
                value       = {this.state.ingredients}
                type        = "text"
                onChange    = {this.handleChange}
                className   = "mt-1 form-control" 
                placeholder = "e.g. Onions, Eggs, .."/>
            </label>
          </div>
          <button 
              className = "btn btn-dark"
              type      = "submit">Submit</button>
        </form>
        <Recipes recipes = {this.state.recipes}/>
      </div>
    );
  }
}
