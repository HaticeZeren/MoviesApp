import React from 'react'
import { Button , Form,Image } from 'semantic-ui-react'
import { AlertDeneme } from './AlertDeneme';
export class FormExampleForm extends React.Component{
     

    state={
      title:'',
      cover:'',
      error:{}
    };

    handleChange=(e)=>{
        console.log('event işlemlerii:',e.target);
        this.setState({
            [e.target.name]:e.target.value
        });
    }

     
    validate=()=>{
        const errors={};

        if(this.state.title==='') errors.title='Title Alanını Boş Bırakmayınız';
        if(this.state.cover==='') errors.cover='Cover Alanını Boş Bırakmayınız';

        return errors;
    }
    onSubmit=()=>{
        const errors=this.validate();
        this.setState({
            error:errors
        })

         if(Object.keys(errors).length===0 )  this.props.onNewMovies(this.state)  

    }

    render(){
        return(
    <div>
    <Form >
    <Form.Field>
      <label>Tittle</label>
      <input placeholder='title' value={this.state.title} id="title" name="title" onChange={this.handleChange} ref="someName"/>
    </Form.Field>
    <Form.Field>
      <label>Cover</label>
      <input placeholder='cover' value={this.state.cover}  id="cover" name="cover" onChange={this.handleChange} />
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
