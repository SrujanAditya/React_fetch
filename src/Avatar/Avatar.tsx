import React from 'react';
import './Avatar.scss';

export const Avatar = (props: {
    name: string,
    selectUser: () => void;
}) => {
    const splittedName: string[] = props.name.split(" ");
    const avatarText = splittedName[0].charAt(0)+splittedName[1].charAt(0);
    return(
        <div className='avatar' onClick={props.selectUser}>{avatarText}</div>
    )
}