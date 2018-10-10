import { connect } from 'react-redux'
import News from '../../components/news/News'
import { fetchNews } from '../../actions'

function mapStateToProps(state){
  return{
    newsItems: state.myReducer.newsItems
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchNews: ()=>dispatch(fetchNews())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)