import React, { ReactNode } from 'react';
import PostItemEl from './PostItem/PostItem';
import "./PostList.scss";
import { UserDetails } from '../User/User';

export interface PostItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostListState {
  postList: PostItem[];
}
interface PostListProp {
  selectUser: (user:UserDetails) => void;
  selectPost: (post:PostItem) => void;
}
export class PostList extends React.Component<PostListProp, PostListState> {

  constructor(props:PostListProp, state:PostListState){
    super(props, state);
    this.state = {
      postList:[]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => this.setState({
    postList: json
  }));
  }

  generatePost():ReactNode {
    return this.state.postList.map((item, index)=>{
      return(
        <PostItemEl
          key={index}
          item={item}
          selectPost={this.props.selectPost}
          selectUser={this.props.selectUser}
        />
      )
    })
  }

  render() {
    return (
      <section className="post-list">
        {
          this.generatePost()
        }
      </section>
    );  
  }
}

export default PostList;
