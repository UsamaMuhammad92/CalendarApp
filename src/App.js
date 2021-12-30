import './App.css';

import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from 'axios';

const localizer = momentLocalizer(moment);

const myEventsList = [
  { start: new Date(), end: new Date()}
];

 class App extends Component {
  // state = {
  //   holidays: [ ]
  // } 

  // getting data from api
  componentDidMount(){
    axios.get('https://calendarific.com/api/v2/holidays?&api_key=b995055914b670df81b3f1ad17ce450671d47317&country=PK&year=2022')
      .then(response => { // saving response 
        console.log(response)
        this.setState({
          holidays:response.data
        })
      })
  }
  
  render() {
    // const { holidays } = this.state;
    // const holidaysList = holidays.length ? (
    //   holidays.map(holiday => {
    //       return(
    //         <div key={holiday.name}>
    //           <p>{holiday.description}</p>
    //         </div>  
    //       )
    //   })
    // ) : (<p></p>)
    return(
      <div className="App">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      {/* { holidaysList } */}
    </div>
    )
  } 
    
  
}

export default App;