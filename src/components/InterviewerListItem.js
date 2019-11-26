import React from "react";
import classnames from "classnames/bind";
import "components/InterviewerListItem.scss";

// export default function DayListItem(props) {};

export default function InterviewerListItem(props) {
  const interviewerItemClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });
  const interviewerItemImageClass = classnames("interviewers__item-image", {
    "interviewers__item--selected-image": props.selected && props.image
  });

  return (
    <li className={interviewerItemClass} onClick={props.setInterviewer}>
      <img
        className={interviewerItemImageClass}
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
      <div>{props.selected ? props.name : ""}</div>
    </li>
  );
}
