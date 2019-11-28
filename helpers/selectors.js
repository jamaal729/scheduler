export const getAppointmentsForDay = (state, day) => {
  const days = state.days.filter(day => day.name === day)[0];
  if (! state.days === [] || ! days === undefined) {
    return days.appointments.forEach(id =>
      results.push(state.appointments[id])
    );
  }
  return [];
};

