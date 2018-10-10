import React from 'react'

class HelloWorld extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state={
  //     labelColor:'#000000'
  //   }
  // }
  //
  // onColorChange(e){
  //   this.setState({labelColor:this.state.labelColor==='#000000'? "#ff0000":"#000000"})
  // }

  render(){
    return(
      <div>
        <h1 style={{color:this.props.labelColor}}>Hello World</h1>
        <button onClick={()=>this.props.onButtonClick(this.props.labelColor==="#000000"?"#ff0000":"#000000")}>Change Color</button>
      </div>

    )
  }
}

export default HelloWorld;