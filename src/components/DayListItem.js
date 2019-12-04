import React from "react";
import classnames from "classnames/bind";
import "components/DayListItem.scss";

export default function DayListItem(props) {


  // const dayListItemClass = classnames("dayListItem", {
  //   dayListItem: props.name
  // });

  let dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  let formatSpots = function() {
    if (props.spots === 0) {
      return `no spots remaining`;
    } else if (props.spots === 1) {
      return `1 spot remaining`;
    } else return `${props.spots} spots remaining`;
  };

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)} data-testid="day">
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
      
    </li>
  );
}
