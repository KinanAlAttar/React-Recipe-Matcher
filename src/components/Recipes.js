import React from 'react';

export default class Recipes extends React.Component {
  render () {
    const generic_food_img = "https://www.nicepng.com/png/detail/66-662781_chef-hat-transparent-clip-art-at-clker-chef.png"; 
    const recipes = this.props.recipes;
    return (
      <div className = "container">
        <hr />
        <div className = "card-columns">
           {recipes.map((recipe, index) => (
             <div key = {index}>
               <div className = "card bg-light mb-3"> 
                 <div className = "justify-content-center card-header"> 
                   <img className = "card-img-top rounded mx-auto d-block"
                        src       = {recipe.thumbnail !== "" ? recipe.thumbnail : generic_food_img } 
                        alt       = "Recipe"
                        style     = {{ height: "100px", width: "100px", display: "block" }}/>
                 </div> 
                 <div className = "card-body">
                   <h5 className = "card-title">
                     {recipe.title}
                   </h5>
                   <p className  = "font-weight-light card-text">
                     {recipe.ingredients}
                   </p>
                   <a href      = {recipe.href} 
                      className = "btn btn-danger">Learn More</a>
                 </div>
                 <div class="card-footer">
                   <small class="text-muted">#</small>
                 </div>
               </div>  
             </div>
             ))}
        </div>
      </div>
    );
  }
}

