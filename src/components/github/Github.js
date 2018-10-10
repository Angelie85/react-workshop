import React from 'react'
import axios from 'axios'


class Github extends React.Component{

  fetchGithub(term){
    const GITHUB_URL = `https://api.github.com/search/repositories?q=${term}&sort=stars&order=desc&page=1&per_page=10`
    axios.get(GITHUB_URL)
      .then(response=>{
        console.log('gitHub'+response.data.items)
      })
  }

  render(){
    return(
      <div>
        <h1>GitHub page</h1>
        <input type="text"/><button>Search GitHub</button>
      </div>
    )
  }
}

export default Github