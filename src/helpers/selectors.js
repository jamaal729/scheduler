export const getAppointmentsForDay = (state, stateday) => {
  const appointments = [];

  const day = state.days.filter(d => d.name === stateday);
  if (day.length === 0) {
    return appointments;
  }
  day[0].appointments.map(id => appointments.push(state.appointments[id]));
  return appointments;
};

export const getInterview = (state, stateinterview) => {
  if (stateinterview)
    return {
      student: stateinterview.student,
      interviewer: state.interviewers[stateinterview.interviewer]
    };
  return null;
};
