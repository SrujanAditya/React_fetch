import React from 'react';
import { PostItem } from '../PostList';
import { Avatar } from '../../Avatar/Avatar';
import './PostItem.scss';
import { UserDetails } from '../../User/User';

interface PostItemProp {
    item: PostItem;
    selectUser: (user:UserDetails) => void;
    selectPost: (post:PostItem) => void;
}

interface PostItemState {
    user: any;
}

export class PostItemEl extends React.Component<PostItemProp, PostItemState> {

  constructor(props:PostItemProp){
    super(props);
    this.state = {
        user : {}
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/'+this.props.item.userId)
    .then(response => response.json())
    .then(json => this.setState({
        user: json
    }));
  }

  selectUser = () => {
      this.props.selectUser(this.state.user);
  }

  selectPost = () => {
    this.props.selectPost(this.props.item);
}

  render() {
    return (
      <div className="post-item">
        <div className="content" onClick={this.selectPost}>{this.props.item.title}</div>
        {!!this.state.user.name && <Avatar 
            name={this.state.user.name} 
            selectUser={this.selectUser}
        />}
      </div>
    );  
  }
}

export default PostItemEl;
