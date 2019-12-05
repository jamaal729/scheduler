import { useReducer, useEffect } from "react";
import axios from "axios";

import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW
} from "reducers/application";

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => dispatch({ type: SET_DAY, value: day });

  useEffect(() => {
    Promise.all([
      Promise.resolve(axios.get("/api/days")),
      Promise.resolve(axios.get("/api/appointments")),
      Promise.resolve(axios.get("/api/interviewers"))
    ]).then(all => {
      dispatch({ type: SET_APPLICATION_DATA, value: all });
    });
  }, []);

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() => {
      dispatch({ type: SET_INTERVIEW, value: appointments });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`).then(() => {
      dispatch({ type: SET_INTERVIEW, value: appointments });
    });
  }

  return { state, setDay, updateSpots, bookInterview, cancelInterview };
}

function updateSpots(appointments, days, day) {
  const currentDay = days.find(target => target.name === day.name);
  const currentAppointments = [...currentDay.appointments];

  const allSpots = currentAppointments.length;
  const usedSpots = Object.values({ ...appointments }).reduce(
    (total, appointment) => {
      if (currentAppointments.includes(appointment.id)) {
        if (appointment.interview) {
          return ++total;
        }
      }
      return total;
    },
    0
  );
  return allSpots - usedSpots;
}
