import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { addDate } from '../../action/index';
import dateFns from 'date-fns';
import { Modal } from '../index';
import { Form, Title, FieldInput, FieldSelect, Button } from './style';

class Reservation extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: null,
            surname: null,
            team: null,
            from: null,
            to: null,
            color: 'red',
            isOpen: false
        }
        this.handleChange = this.handleChange.bind(this);
    };

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }    
    
    handleChange = (event) => {
        console.log(this.state);
        this.setState({[event.target.name]: event.target.value});
    }

    handleChangeDate = (event) =>{
        this.setState({[event.target.name]: dateFns.parse(event.target.value)});
        console.log(this.state);
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

    renderSelect(field){
        return(
            <FieldSelect error={(field.meta.touched && field.meta.error) ? 'bad' : 'good'}>
                <select {...field.input}>
                    <option>{field.placeholder}</option>
                    <option value="Frontend 1">Frontend 1</option>
                    <option value="Frontend 2">Frontend 2</option>
                    <option value="Backend 1">Backend 1</option>
                    <option value="Testers 1">Testers 1</option>
                </select>
                {field.meta.touched && field.meta.error && <span>{field.meta.error}</span>}
            </FieldSelect>
        );
    }

    checkingDates(values){
        const sameTeam = this.props.date.filter(element => {
            return element.team === values.team;
        });
        
        return sameTeam.some(element => {
            return dateFns.areRangesOverlapping(
                 element.from, element.to, values.from, values.to
              );
        })
    }

    onSubmit(values){
        const valid = this.checkingDates(values);
        if(!valid){
            values.color = this.state.color;
            this.props.addDate(values);
            this.props.history.push('/calendar');
        }else{
            this.toggleModal();
        }
    }

    render(){
        const { handleSubmit } = this.props;
    
        return(
            <Fragment>
                <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Title>Korpex Calendar</Title>
                    <Field 
                        name="name" 
                        type="text" 
                        component={this.renderInput} 
                        index={1} 
                        placeholder="Name" 
                        onChange={this.handleChange}
                    />
                    <Field 
                        name="surname" 
                        type="text" 
                        component={this.renderInput} 
                        index={2} 
                        placeholder="Surname" 
                        onChange={event => this.handleChange(event)}
                    />
                    <Field 
                        name="team" 
                        type="select" 
                        component={this.renderSelect}
                        onChange={event => this.handleChange(event)}
                        placeholder="Choose Your team"
                    >
                       
                    </Field>
                    <Field 
                        name="from" 
                        type="date" 
                        component={this.renderInput} 
                        index={3}
                        onChange={event => this.handleChangeDate(event)}
                        placeholder="From" 
                        justify="right" 
                    />
                    <Field 
                        name="to" 
                        type="date" 
                        component={this.renderInput} 
                        index={4}
                        onChange={event => this.handleChangeDate(event)}
                        placeholder="To"
                        justify="left"
                    />
                    <Button type="submit">Submit</Button>
                </Form>
                <Modal 
                    show={this.state.isOpen}
                    onClose={this.toggleModal}
                >
                   Your teammates took a vacation in same date range :(
                </Modal>
            </Fragment>
        )
    }
}

const validate = (value) => {
    const errors = {};
    if(!value.name){
        errors.name = "Name is required.";
    }
    if(!value.surname){
        errors.surname = "Surname is required.";
    }
    if(!value.team){
        errors.team = "Team is required.";
    }
    if(!value.from){
        errors.from = "Start date is required.";
    }
    if(!value.to){
        errors.to = "End date is required.";
    }else if(dateFns.parse(value.from) > dateFns.parse(value.to)){
        errors.to = "You gave the wrong range";
        errors.from = "You gave the wrong range";
    }
    return errors;
}

const mapStateToProps = state => {
    return{
        date: state.date
    }
}

export default reduxForm({
    validate,
    form: 'DateNewForm'
  })(connect(mapStateToProps, {addDate})(Reservation));