const dates = [
      {name: "Wojciech", surname: "Dunaj", team: "devTeam1", from: new Date(2018, 9, 12), to: new Date(2018, 9, 20), color: '#4286f4'},
      {name: "Mateusz", surname: "Witkowski", team: "devTeam2", from: new Date(2018, 8, 12), to: new Date(2018, 8, 18), color: '#41f486'},
      {name: "Daria", surname: "Łabaj", team: "devTeam2", from: new Date(2018, 8, 1), to: new Date(2018, 8, 6), color: '#f2d441'},
      {name: "Piotr", surname: "Nowak", team: "backTeam1", from: new Date(2018, 9, 14), to: new Date(2018, 9, 16), color: '#dd40f1'},
      {name: "Jakub", surname: "Pawłowski", team: "backTeam1", from: new Date(2018, 8, 20), to: new Date(2018, 8, 25), color: '#3ff0d9'},
      
    ];

const datesReducer = (state = '', action) => {
    switch(action.type){
        case 'ADD_DATE':
            return dates.push(action.payload);
        default:
        return dates;
    }
   
};

export default datesReducer;