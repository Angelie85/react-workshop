import React from 'react'

const GithubList = (props)=>{
  return(
    <div style={{display:'flex', flexDirection:"column", width:'1000px', margin:'10px auto', textAlign:'left' }}>
      <table>
        <tbody>
      {props.githubList.map((item,i)=>{
        return(
          <tr  key={i}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.stargazers_count}</td>
          </tr>
        )
      })}
        </tbody>
      </table>
    </div>
  )

}

export default GithubList