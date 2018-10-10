import axios from 'axios'
export const ON_BTN_CLK = 'ON_BTN_CLK'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'

export const onButtonClick = (color)=>{return{type: ON_BTN_CLK, color:color}}
export const fetchSuccss = (payload)=>{return{type: FETCH_NEWS_SUCCESS, payload}}

export const fetchNews=()=>{
  return (dispatch)=> {
    const TOP_STORY_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json'
    const params = {params: {'api-key': "3f1f7f6973744c09b710a675f13068eb"}}
    axios.get(TOP_STORY_URL, params)
      .then(response => {
        dispatch(fetchSuccss(response.data.results))
        console.log(response)
      })

  }
}
