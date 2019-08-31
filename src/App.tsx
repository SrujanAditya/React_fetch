import React from 'react';
import './App.scss';
import HeaderEl from './HeaderEl/HeaderEl';
import PostList, { PostItem } from './PostList/PostList';
import User, { UserDetails } from './User/User';
import PostContainer from './PostContainer/PostContainer';
import { AutoSuggestEl } from './AutoSuggest/AutoSuggest';

interface AppState {
  user?: UserDetails;
  post?: PostItem;
  searchText: string;
  users: UserDetails[];
  asUsers: UserDetails[];
}
interface AppProps {
}
export class App extends React.Component<AppProps, AppState> {
  
  constructor(props:AppProps, state:AppState){
    super(props, state);
    this.state = {
      user: undefined,
      post: undefined,
      asUsers: [],
      users: [],
      searchText: ''
    }
  }

  selectUser = (user: UserDetails) => {
    const users = this.state.users;
    this.setState({
      user: user,
      post: undefined,
      searchText: '',
      asUsers: users
    });
  }

  selectPost = (post: PostItem) => {
    this.setState({
      post: post,
      user: undefined,
      searchText: ''
    });
  }

  resetState = () => {
    this.setState({
      user: undefined,
      post: undefined,
      searchText: ''
    });
  }

  handleUserSearch = (userName: string) => {
    const searchedUser = this.state.users && this.state.users.filter((val) => {
      return (val.name.includes(userName));
    });
    this.setState({
      asUsers: searchedUser,
      searchText: userName
    });
  }

  handleUserClick = (user: UserDetails) => {
    this.selectUser(user);

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({
      asUsers: json,
      users: json,
    }));
  }

  render(){
    const {user, post, searchText, asUsers} = this.state;
    return (
      <div className="container">
        <HeaderEl 
          showBackButton={!!user || !!post}
          handleBackClick={this.resetState}
          handleUserSearch={this.handleUserSearch}
        />
        {
          !!searchText.length && <AutoSuggestEl 
            users={asUsers}
            handleUserClick={this.handleUserClick}
          />
        }
        {
          !user && !post && <PostList
            selectUser={this.selectUser}
            selectPost={this.selectPost}
          />
        }
        {
          !!user && <User user={user} />
        }
        {
          !!post && <PostContainer 
            post={post} 
          />
        }
      </div>
    );
  }
  
}

export default App;
