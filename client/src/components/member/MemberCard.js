import React, { Fragment } from "react";
import './Member.css';

const MemberCard = ({name, email}) => {
  return(
    <Fragment>
      <div className="member-card-container">
        <h4>{ name }</h4>
        <p>{ email }</p>
      </div>
    </Fragment>
  )
}

export default MemberCard;