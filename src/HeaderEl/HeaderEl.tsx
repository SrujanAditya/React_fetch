import React, { ChangeEvent } from 'react';
import './Header.scss';

interface HeaderProps {
  showBackButton: boolean;
  handleBackClick: () => void;
  handleUserSearch: (userName: string) => void;
}
const HeaderEl = (props: HeaderProps) => {
  const searchUser=($event: ChangeEvent<HTMLInputElement>)=>  {
    props.handleUserSearch($event.currentTarget.value);
  }
  return (
      <header className="App-header">
        {
          props.showBackButton && (<div className="backBtn" onClick={props.handleBackClick}>
          <div className="leftArrow"></div>
            Back
          </div>)
        }
        <div className="seach-user">
          <input className='user-as' onChange={(e: ChangeEvent<HTMLInputElement>) => searchUser(e)} placeholder="Search User"/>
        </div>
      </header>
  );
}

export default HeaderEl;
