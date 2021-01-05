import React from 'react';

export default class Recipes extends React.Component {
  render () {
    const recipes = this.props.recipes;
    return (
     <div className = "container">
       <hr /> 
       <div className = "row">
         {recipes.map((recipe, index) => (
           <div key = {index} className = "mr-2 ml-4 mb-3 col">
             <div className = "card" style = {{ width: "18rem" }}>
               <img className = "card-img-top"
                    src       = {recipe.thumbnail} 
                    alt       = "Recipe"/>
               <div className = "card-body">
                 <h5 className = "card-title">
                   {recipe.title}
                 </h5>
                 <p className  = "card-text">
                   {recipe.ingredients}
                 </p>
                 <a href      = {recipe.href} 
                    className = "btn btn-primary">Learn More</a>
               </div>
             </div>  
           </div>
         ))}
       </div>
     </div>
    );
  }
}
