import React from "react";
import classnames from "classnames/bind";
import "components/InterviewerListItem.scss";

// export default function DayListItem(props) {};

export default function InterviewerListItem(props) {
  const interviewerItemClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });
  return (
    <li
      className={interviewerItemClass}
      onClick={() => props.setInterviewer(props.name)}
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
