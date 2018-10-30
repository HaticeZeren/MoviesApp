import React from 'react';
import {CardExampleCard} from '../view/CardExampleCard'
import  '../css/card.css'
import { Grid, Image } from 'semantic-ui-react';


function yaz(props){
if(props.movies.movies.movies){
 // props.movies.movies.movies.map((movie)=>{console.log(movie)})
  return props.movies.movies.movies;

}
return [];
}

export  const  MoviesList=(props)=>{

    const dizi= yaz(props);

     console.log('===========',props);

    const emptyMessage=(
		<div>Henüz Bir Film Listesi Yok...</div>
        ); 


        
    const moviesList=(
        <div>
           {
                props.movies.error.response ? <h3>hata</h3>:<Grid stackable columns={3}>{dizi.map( movie=> <Grid.Column key={movie._id}  className="deneme"><CardExampleCard   movies={movie}   key={movie._id} sil={props.deleteMovie} /> </Grid.Column>)}</Grid>
           }
        </div>
        
    )
    return(
        <div>
               { props.movies.length===0 ? emptyMessage:moviesList }
        </div>
    );
} ;