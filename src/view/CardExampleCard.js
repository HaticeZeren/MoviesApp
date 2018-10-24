import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import  '../css/card.css'

export class CardExampleCard extends React.Component{


  
  render(){
    console.log('/////////////////',this.props.movies.userId)
    return(
      <div className="cardd">
 <Card >
    <Image src='https://react.semantic-ui.com/logo.png' />
    <Card.Content >
      <Card.Header>{this.props.movies.id}</Card.Header>
      <Card.Meta>
        <span className='date'>{this.props.movies.title}</span>
      </Card.Meta>
      <Card.Description>{this.props.title}</Card.Description>
    </Card.Content>
    
  </Card>
      </div>
    );
  }
}

