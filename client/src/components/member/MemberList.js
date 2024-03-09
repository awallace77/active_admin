import React, { Fragment, useState, useEffect } from 'react'
import MemberCard from './MemberCard';

const MemberList = () => {
  const memberApi = require('../../controllers/members');
  
  const [members, setMembers] = useState([]);
  useEffect(() => {
    memberApi.getMembers().then((res) =>{
      setMembers(res);
    }).catch((res) => console.log(res))
  }, [memberApi]);

  return (
    <Fragment>
      <div className='member-list-container'>
      <h3>Members</h3>
      {members.map((data, index) => {
        return <MemberCard key={index} name={data.name} email={data.email} />
      })}
      </div>
    </Fragment>
  )
}

export default MemberList