import React from 'react'
import { Button , Form,Image } from 'semantic-ui-react'
import { AlertDeneme } from './AlertDeneme';

import {Redirect} from 'react-dom'
export class FormExampleForm extends React.Component{

    
     
        state={
            title:  '',
            cover:  '',
            _id:'',
            error:{},
            done:true
          };
    
        
    handleChange=(e)=>{
        console.log('event işlemlerii:',e.target);
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWill-----------',nextProps.movie);
		const movie = nextProps.movie;
		if (
            movie
            &&
			movie.title
			&&
			movie.title !== this.state.title
		) {
			this.setState({
				title: movie.title,
                cover: movie.cover,
                _id:movie._id
			});
 		}
	}
    validate=()=>{
        const errors={};

        if(this.state.title==='') errors.title='Title Alanını Boş Bırakmayınız';
        if(this.state.cover==='') errors.cover='Cover Alanını Boş Bırakmayınız';

        return errors;
    }

     
        
    onSubmit=()=>{
        const errors=this.validate();
        console.log(this.state._id);
       


        // if(Object.keys(errors).length===0 ) this.props.onNewMovies(this.state) 

         (this.state._id=='' && Object.keys(errors).length===0)? this.props.onNewMovies(this.state) :this.props.updateMovies(this.state);

    }
     
   
    render(){

        return(
    <div>
    <Form >
    <Form.Field>
      <label>Tittle</label>
      <input placeholder='title' value={this.state.title} name="title"  onChange={this.handleChange} />
    </Form.Field>
    <Form.Field>
      <label>Cover</label>
      <input placeholder='cover' value={this.state.cover}  name="cover"  onChange={this.handleChange} />
    </Form.Field>
    <Button type='submit' primary onClick={this.onSubmit}>Submit</Button>
    </Form>

    <br></br>
     <Image src={this.state.cover} size='small' wrapped />
      
      {
         JSON.stringify(this.state.error) === JSON.stringify({}) ? <div></div> : <AlertDeneme error={this.state.error}/> 
         

      }

    </div>

        );

    }
}
