import React from 'react';
import './Comment.scss';
import { PostComment } from '../PostContainer';

export const Comment = (props:{item:  PostComment}) => {
    return (
        <div className='comment-cont'>
            <div className='comment-author'>
                <h5 className="subject">
                    {props.item.name}
                </h5>
                <div className='author-name'>
                    {props.item.email}
                </div>
            </div>
            <div className="body">
                {props.item.name}
            </div>
        </div>
    )
}