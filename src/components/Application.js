import React, { useState, useEffect } from "react";

import axios from "axios";

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";

// const appointments = [
//   {
//     id: 1,
//     time: "12pm"
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png"
//       }
//     }
//   },
//   {
//     id: 3,
//     time: "2pm"
//   },
//   {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Michael Atkins",
//       interviewer: {
//         id: 3,
//         name: "Mildred Nazir",
//         avatar: "https://i.imgur.com/T2WwVfS.png"
//       }
//     }
//   },
//   {
//     id: 5,
//     time: "4pm"
//   }
// ];

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });
  // const setDays = (days, prev) => setState({ ...prev, days });
  // setState(prev => ({ ...prev, days }));

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get("http://localhost:8001/api/days")),
      Promise.resolve(axios.get("http://localhost:8001/api/appointments")),
      Promise.resolve(axios.get("http://localhost:8001/api/interviewers"))
    ]).then(all => {
      console.log(all[0]); // first
      console.log(all[1]); // second
      console.log(all[2]); // third
      const [days, appointments, interviewers] = all;
      console.log(days, appointments, interviewers);

      setState(prev => ({
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  });

  // useEffect(() => {
  //   axios.get("http://localhost:8001/api/days").then(response => {
  //     setDays(response.data);
  //   });
  // });

  // useEffect(() => {
  //   axios
  //     .get("http://locslhost:8001/api/days")
  //     .then(response => setDays(response.data));
  // }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          {<DayList days={state.days} day={state.day} setDay={setDay} />}
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map(appointment => (
          <Appointment key={appointment.id} {...appointment} />
        ))}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
