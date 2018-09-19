const dates = [
      {name: "Wojciech", surname: "Dunaj", team: "devTeam1", from: new Date(2018, 9, 12), to: new Date(2018, 9, 20)},
      {name: "Mateusz", surname: "Witkowski", team: "devTeam2", from: new Date(2018, 8, 12), to: new Date(2018, 8, 18)},
      {name: "Daria", surname: "Łabaj", team: "devTeam2", from: new Date(2018, 8, 1), to: new Date(2018, 8, 6)},
      {name: "Piotr", surname: "Nowak", team: "backTeam1", from: new Date(2018, 9, 14), to: new Date(2018, 9, 16)},
      {name: "Jakub", surname: "Pawłowski", team: "backTeam1", from: new Date(2018, 8, 20), to: new Date(2018, 8, 25)},
      
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