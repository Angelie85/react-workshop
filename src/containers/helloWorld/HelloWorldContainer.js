import { connect } from 'react-redux'
import HelloWorld from '../../components/helloWorld'
import { onButtonClick } from '../../actions'

function mapStateToProps(state){
  return{
    labelColor: state.myReducer.labelColor
  }
}

function mapDispatchToProps(dispatch){
  return{
    onButtonClick: (color)=>dispatch(onButtonClick(color))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)