import React from 'react'
import { Card, Icon, Image ,Button} from 'semantic-ui-react'
import  '../css/card.css'
import {Link} from 'react-router-dom'
export class CardExampleCard extends React.Component{

  constructor(props){
    super(props);

    this.deneme=this.deneme.bind(this);
  }
  deneme(){
     console.log(this.props);
      this.props.sil(this.props.movies._id);
   }
  render(){
      const kimlik=(id)=>{
      var isim='/movie/'+id;
      return isim;
    }

    console.log('render()',this.props);
    
    return(
      <div >
    <Card >
    <Image src='https://react.semantic-ui.com/logo.png' />
    <Card.Content >
      <Card.Header>{this.props.movies.title}</Card.Header>
    </Card.Content>
    <Card.Content extra>
        <div className='ui two buttons' >
          <Button basic color='green' as={Link} to={kimlik(this.props.movies._id)}>Edit
          </Button>
          <Button basic color='red'  onClick={()=>{this.props.sil(this.props.movies._id)}} >Delete
          </Button>
        </div>
      </Card.Content>
  </Card>
 
      </div>
    );
  }
}

