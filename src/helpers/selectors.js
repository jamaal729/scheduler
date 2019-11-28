export const getAppointmentsForDay = (state, stateday) => {
  let results = [];
  const days = state.days.filter(day => day.name === stateday)[0];
  if (!state.days === [] || !days === undefined) {
    results = days.appointments.forEach(id =>
      results.push(state.appointments[id])
    );
  }
  return results;
};

export const getInterview = (state, stateinterview) => {
  console.log("getInterview .....");
  if (stateinterview === null) {
    return null;
  }
  const interview_obj = { ...stateinterview };

  interview_obj.interviewer = state.interviewers[interview_obj.interviewer];
  return interview_obj;
};
