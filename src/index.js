import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Reddit extends React.Component {
    state = {
      posts: []
    };
  
    componentDidMount() {
      axios.get(`https://www.reddit.com/r/reactjs.json`).then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
    }
  
    render() {
      return (
        <div>
          <h1>/r/reactjs</h1>
          <ul>
            {this.state.posts.map(post => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ul>
        </div>
      );
    }
  }
   

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
