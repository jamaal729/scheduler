export const getAppointmentsForDay = (state, stateday) => {
  const appointments = [];
  const day = state.days.filter(d => d.name === stateday);
  if (day.length === 0) {
    return appointments;
  }
  day[0].appointments.map(id => appointments.push(state.appointments[id]));
  return appointments;
};

export const getInterviewersForDay = (state, stateday) => {
  const interviewers = [];
  const day = state.days.filter(d => d.name === stateday);
  if (day.length === 0) {
    return interviewers;
  }
  day[0].interviewers.map(id => interviewers.push(state.interviewers[id]));
  return interviewers;
};

export const getInterview = (state, stateinterview) => {
  if (stateinterview)
    return {
      student: stateinterview.student,
      interviewer: state.interviewers[stateinterview.interviewer]
    };
  return null;
};
