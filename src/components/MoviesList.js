import React from 'react';


export  const  MoviesList=(props)=>{
    const emptyMessage=(
		<div>Henüz Bir Film Listesi Yok...</div>
        );

    const moviesList=(
        <div>Movies List</div>
        
    )
    
    return(
        <div>
            { props.movies.length===0 ? emptyMessage:moviesList }
        </div>
    );
} ;