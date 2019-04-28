import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    posts: null,
    post: null
  }
  componentDidMount = () => {
    axios.get('https://yubanet.com/wp-json/wp/v2/posts').then(res => {
      console.log('res', res)
      this.setState({ posts: res.data })
    })
  }

  render() {
    const { posts, post } = this.state || []
    return (
      <div className="App">
        <header className="App-header">
          <h1 onClick={() => this.setState({ post: null })}>YubaNet Clone</h1>
          {post ? <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div> :
            posts && posts.map((p, i) => <h3 key={i} onClick={() => this.setState({ post: p })}>{p.title.rendered}</h3>)}
        </header>
      </div>
    );
  }
}

export default App;
