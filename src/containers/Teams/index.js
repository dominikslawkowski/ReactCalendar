import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addTeam } from '../../action/index';
import { Container, Title, FieldInput, Button, MainContainer } from './style';
import { IconPicker } from '../../components/index';
import { Modal } from '../../components/index';

class Teams extends React.Component {
    
    state = {
        isOpen: false,
        name: ''
    }

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    renderMembers(teamName){
        return(
            this.props.date
                .filter(element => element.team === teamName)
                .map((element, key) => {
                    return(
                        <div key={key}>{element.name} {element.surname}</div>
                    );
                })
        );
    }

    renderInput(field){
        return(
            <FieldInput 
                index={field.index} 
                justify={field.justify} 
                error={(field.meta.touched && field.meta.error) ? 'bad' : 'good'}
            >
                <input
                    {...field.input}
                    type={field.type}
                    placeholder={field.placeholder}
                />
                {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
           </FieldInput>
        );
    }

    renderTeams(){
        return(
            this.props.team.map((element, index) => {
                return(
                    <Container key={index} opacity="1">
                        <Title>{element}</Title>
                        {this.renderMembers(element)}
                    </Container>
                );
            })
        );
    }

    onSubmit(values){
       this.props.addTeam(values.name);
       this.toggleModal();
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <MainContainer>
                {this.renderTeams()}
                
                <Container last="true" onClick={()=>this.toggleModal()}>
                    <Title color="#ccc">Add team</Title>
                    <IconPicker name="add" width={40} height={40}/>
                </Container>
                <Modal id="test" show={this.state.isOpen} onClose={this.toggleModal} marginTop="35px" marginBottom="10px">
                   <form id="form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                       <Field name="name" type="text" placeholder="Team name" component={this.renderInput} onChange={event => this.handleChange(event)}/>
                       <Button type="submit" style={{marginTop: '8px'}}>Add</Button>
                   </form>
                </Modal>
            </MainContainer>
        );
    }
}

const validate = (value) => {
    const errors = {};
    if(!value.name){
        errors.name = "Name is required.";
    }
    return errors;
}

const mapStateToProps = (state) => {
    return {
        team: state.team,
        date: state.date
    }
}

export default reduxForm({
    validate,
    form: 'TeamNewForm'
  })(connect(mapStateToProps, {addTeam})(Teams));