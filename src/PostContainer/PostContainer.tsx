import React from 'react';
import { PostItem } from '../PostList/PostList';
import './PostContainer.scss';
import { UserDetails } from '../User/User';
import { Comment } from './Comment/Comment';

interface PostContainerProp {
  post: PostItem;
}

export interface PostComment {
  postid: number;
  id: number;
  name: string;
  email: string;
  body: string; 
}
interface PostContainerState {
  comments?: PostComment[];
  createdBy?: UserDetails;
}

export class PostContainer extends React.Component<PostContainerProp, PostContainerState> {
  constructor(props: PostContainerProp) {
    super(props);
    this.state = {
      comments: [],
      createdBy: undefined
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.post.id}/comments`)
    .then(response => response.json())
    .then(json => this.setState({
      comments: json,
    }));
    fetch(`https://jsonplaceholder.typicode.com/users/${this.props.post.userId}`)
    .then(response => response.json())
    .then(json => this.setState({
      createdBy: json,
    }));
  }

  render(){
    return (
      <div className="post-container">
        <div className="post-header">
          <h4>{this.props.post.title}</h4>
          <div className="author">
            <sub>Created By </sub> <h5>{this.state.createdBy && this.state.createdBy.name}</h5> 
          </div>
        </div>
        <div className="commentSection">
          {
            this.state.comments && this.state.comments.map((val, index) => {
              return <Comment item={val} key={index} />
            })
          }
        </div>

      </div>
   );  
  }
}

export default PostContainer;
