import React from 'react';
import './AutoSuggest.scss';
import { UserDetails } from '../User/User';

interface AutoSuggestProps {
  users: UserDetails[];
  handleUserClick: (user: UserDetails) => void;
}
export const AutoSuggestEl = (props: AutoSuggestProps) => {

  const selectUser = (val: UserDetails) => {
    props.handleUserClick(val);
  }
  return (
      <div className="auto-suggest">
        {
            props.users.map((val, index) => {
                return (
                    <div className='as-user' key={index} onClick={() => selectUser(val)}>
                        {val.name}
                    </div>
                )
            })
        }
      </div>
  );
}
