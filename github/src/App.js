import React from 'react';
import './App.css';
import axios from 'axios';
import GithubCard from "./components/GithubCard"

class App extends React.Component {
  
    state = {
    users: [],
    userText: ''
  };
  
  


  componentDidMount() {

    // axios
    //   .get('https://api.github.com/users')
    //   .then(res => {
    //     // res.data.message
    //     console.log('users', res.data)
    //     this.setState({
    //       users: res.data
    //     });
    //   })
    //   .catch(err => console.log(err.message));

    axios
      .get('https://api.github.com/users/gnhossain/followers')
      .then(res => {
        // res.data.message
        console.log('users', res.data)
        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err.message));
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.users !== this.state.users) 
  //   {
  //     console.log('new user array');
  //     // if (this.state.userText === 'git-user') 
  //     // {
  //     //   console.log("userText",this.state.userText);
  //       axios
  //         .get(`https://api.github.com/users/${this.state.userText}`)
  //         .then(res => {
  //           // res.data.message
  //           console.log('user', res.data)
  //           this.setState({
  //             users: [res.data],
  //             userText: 'user'
  //           });
  //         })
  //         .catch(err => console.log(err.message));
  //     }
  

  // handleChanges = e => {
  //   this.setState({
  //     userText: e.target.value
  //   });
  // };

  // fetchUsers = e => {
  //   e.preventDefault();
  //   axios
  //     .get(`https://api.github.com/users`)
  //     .then(res => {
  //       // res.data.message
  //       this.setState({
  //         users: res.data
  //       });
  //     })
  //     .catch(err => console.log(err.message));
  // };

  render() {
    return (
      <div className="App">
        <h1>Hello Users</h1>
        {/* <input value={this.state.userText} onChange={this.handleChanges} />
        <button onClick={this.fetchUsers}>Fetch Users</button> */}
        <div className="users">
          {this.state.users.map(user => (
            // <img width="200" src={user.avatar_url} key={user} alt={user} />
            <GithubCard github={user}/>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
