import { ADD_DATE } from '../constants/action-types';

export const dates = [
    {name: "Wojciech", surname: "Dunaj", team: "Frontend 1", from: new Date(2018, 9, 12), to: new Date(2018, 9, 20), color: '#4286f4'},
    {name: "Mateusz", surname: "Witkowski", team: "Frontend 2", from: new Date(2018, 8, 12), to: new Date(2018, 8, 18), color: '#41f486'},
    {name: "Daria", surname: "Łabaj", team: "Frontend 2", from: new Date(2018, 8, 1), to: new Date(2018, 8, 6), color: '#f2d441'},
    {name: "Piotr", surname: "Nowak", team: "Backend 1", from: new Date(2018, 9, 14), to: new Date(2018, 9, 16), color: '#dd40f1'},
    {name: "Jakub", surname: "Pawłowski", team: "Testers", from: new Date(2018, 8, 20), to: new Date(2018, 8, 25), color: '#3ff0d9'},  
];

const datesReducer = (state = dates, action) => {
    switch(action.type){
        case ADD_DATE:
            return [...state, action.payload];
        default:
        return state;
    }
};

export default datesReducer;