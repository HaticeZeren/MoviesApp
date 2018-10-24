import React from 'react';
import {CardExampleCard} from '../view/CardExampleCard'
import  '../css/card.css'
import { Grid, Image } from 'semantic-ui-react';

export  const  MoviesList=(props)=>{
    const emptyMessage=(
		<div>Henüz Bir Film Listesi Yok...</div>
        ); 

       
    const moviesList=(
        <div>
            {
                props.movies.error.response ? <h3>hata</h3>:<Grid stackable columns={3}>{props.movies.movies.map( movie=> <Grid.Column key={movie.id}  className="deneme"><CardExampleCard   movies={movie} /> </Grid.Column>)}</Grid>
            }
        </div>
        
    )
    return(
        <div>
            { props.movies.length===0 ? emptyMessage:moviesList }
        </div>
    );
} ;