import React from 'react';
import { Day, Number, Button, CurrentMounth, Line, Data, MainContainer } from './style';
import dateFns, { addMonths } from 'date-fns';
import { IconPicker } from '../../components/index';
import { connect } from 'react-redux';

const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Calendar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentDay: 0,
            numberOfDays: dateFns.getDaysInMonth(new Date()),
            firstDayOfMounth: dateFns.startOfMonth(new Date()).getDay() - 1,
            days: []
        }
    }

    getAllDays(){
        let table = [],
            start = this.state.firstDayOfMounth,
            end = start + this.state.numberOfDays;

        while(start < end){
            table.push({
                day: week[start % 7],
                month: dateFns.getMonth(addMonths(new Date(), this.state.currentDay)),
                year: dateFns.getYear(addMonths(new Date(), this.state.currentDay)),
                thisMounth: true
            });
            start++;
        }
        while(table[0].day !== week[0]){
            table.unshift({
                 day: week[week.indexOf(table[0].day) - 1],
                 thisMounth: false
            });

        }
        while(table[table.length - 1].day !== week[6]){
            table.push({
                 day: week[week.indexOf(table[table.length - 1].day) + 1],
                 thisMounth: false
            });
        }
        return table;
    }

    getFirstDayOfMonth(){
       return this.state.firstDayOfMounth.getDay();
    }

    showData(name, team, color){
        return(
            <Data color={color}>
                {name} <span>{team}</span>
            </Data>
        )
    }

    showVacation(year, month, day){
        const currentDate = new Date(year, month, day - 1);
        return this.props.date.map((element, index) => {
            return dateFns.isWithinRange(
                currentDate, element.from, element.to
            ) ? <Line key={index} color={element.color}>{this.showData(element.name, element.team, element.color, day)}</Line> : null;
        })

    }

    showCalendar(){
        let numer = 1;
        return(
            this.getAllDays().map((element, index) => {
                return(
                    <Day 
                    visible={element.thisMounth} 
                    day={element.day}
                    key={index}>
                        <Number>{element.thisMounth ? numer++ : null}</Number>
                        {this.showVacation(element.year, element.month, numer)}
                    </Day>
                    );
            })
        );
    }
    
    render(){
        return(
            <MainContainer>
                {week.map((element, index) => {
                    return <div key={index}>{element}</div>;
                })}
                {this.showCalendar()}

                <Button next={false} onClick={() => this.changeMounth(false)}>
                    <IconPicker name="arrow-left" width={20} height={20}/>
                </Button>
                <CurrentMounth>
                    <span>{months[dateFns.getMonth(addMonths(new Date(), this.state.currentDay))]}</span> {dateFns.getYear(addMonths(new Date(), this.state.currentDay))}
                </CurrentMounth>
                <Button next={true} onClick={() => this.changeMounth(true)}>
                    <IconPicker name="arrow-right" width={20} height={20}/>
                </Button>
            </MainContainer>
        )
    }

    changeMounth(next){
        let currentDay = this.state.currentDay;
        next ? currentDay++ : currentDay--;

        this.setState({
            currentDay: currentDay,
            numberOfDays: dateFns.getDaysInMonth(addMonths(new Date(), currentDay)),
            firstDayOfMounth: dateFns.startOfMonth(addMonths(new Date(), currentDay)).getDay()
        });
    }
}

const mapStateToProps = (state) => {
    return {
        date: state.date
    }
}

export default connect(mapStateToProps)(Calendar);