import React from 'react'
import YTSearch from 'youtube-api-search'
const API_KEY='AIzaSyD8JhgADo6lLzl2OjaQIS1CZXf_gsjLf3k'

class YouTube extends React.Component{

  constructor(props){
    super(props)
    let initSearch='redux'
    this.state={searchText:initSearch, videos:[], selectedVideo:{snippet:{title:'', description:''}, id:{videoId:{}}}}
    this.VideoSearch(initSearch)
  }

  handleSearchChange(e){
    this.setState({searchText:e.target.value})
    this.VideoSearch(e.target.value)
  }

  VideoSearch(term){
    YTSearch({key:API_KEY, term}, data=>{
      console.log(data)
      this.setState({
        videos:data,
        selectedVideo:data[0]
      })
    })
  }

  handleSelectVideo(e,video){
    this.setState({selectedVideo:video})
  }


  render(){
    const STYLE={
      searchBox:{width:"800px", padding:"5px", margin:"10px"},
      youTubeDisplay:{display:'flex', width: '800px', margin:'auto'},
      youTubePlayer:{height:'280px', width:'500px'}
    }
    let youtubeURL = `https://www.youtube.com/embed/${this.state.selectedVideo.id.videoId}`
    return(
      <div>
        <h1>Youtube Player</h1><br/>
        <input style={STYLE.searchBox} type="text" placeholder="Search" onChange={e=>this.handleSearchChange(e)}/>
        <br/>
        <div style={STYLE.youTubeDisplay}>
          <div style={{textAlign:"left"}}>
            <iframe src={youtubeURL} style={STYLE.youTubePlayer} title='player'/>
            <br/>
            <div><b>{this.state.selectedVideo.snippet.title}</b></div>
            <br/>
            <div>{this.state.selectedVideo.snippet.description}</div>
          </div>
          <div style={{display:"flex",flexDirection:"column"}}>
            {
              this.state.videos.map(item => {
                let imgURL = item.snippet.thumbnails.default.url

                return (
                  <div style={{display:'flex', width:'300px', margin:"3px 0px 15px 0px",cursor:"pointer" }} key={item.id.videoId} onClick={e=>this.handleSelectVideo(e,item)}>
                    <div id={item.id.videoId} style={{padding: "5px"}} >
                      <img src={imgURL} alt={item.id.videoId} style={{width: "120px"}} />
                    </div>
                    <div style={{width:'200px',display:"flex",flexDirection:"column", textAlign:"left"}} alt={item.id.videoId}>
                      <div style={{fontSize:'9pt'}}><b>{item.snippet.title}</b></div>
                      <div style={{fontSize:'8pt'}}>{item.snippet.description}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default YouTube