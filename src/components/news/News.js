import React from 'react'
// import axios from 'axios'
import NewsList from './NewsList'


class News extends React.Component{

  // fetchNews(){
  //   const TOP_STORY_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json'
  //   const params={params:{'api-key': "3f1f7f6973744c09b710a675f13068eb"}}
  //
  //   axios.get(TOP_STORY_URL, params)
  //     .then(response=>{
  //       this.setState({newsItem:response.data.results})
  //       console.log(response)
  //     })
  // }

  constructor(props){
    super(props)
    // this.state = {newsItem:[]}
    this.props.fetchNews()

  }

  render(){

    return(
      <div>
        <h1>News</h1>
        <NewsList newsItems={this.props.newsItems}/>
      </div>
    )
  }
}

export default News