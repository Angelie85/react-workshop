import React from 'react'

const NewsList =(props)=>{
  return(
    <div style={{textAlign:'left', margin:"10px"}}>
      {props.newsItems.length>0?props.newsItems.map((item,i)=>{
        return(
          <div style={{display:"flex"}} key={i}>
            <div>
              <img src={item.multimedia &&item.multimedia[0]? item.multimedia[0].url:""}
                   alt={item.multimedia&&item.multimedia[0]? "thumbnail":""}
              />
            </div>

            <div>
              {item.title}
            </div>
          </div>
        )
      }):"Empty Array"}
    </div>
  )
}

export default NewsList