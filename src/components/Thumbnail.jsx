// import React, { Component } from 'react'

// export class Thumbnail extends Component {
//   render() {
//     return (
//       <div>Thumbnail</div>
//     )
//   }
// }

// export default Thumbnail
import React from 'react'

function Thumbnail(props) {
  return (
    <>
        <img key={props.path} onClick={()=>props.clickFunc(props.imageNumber)} style={{width: 150, padding: 20}} src={props.path} />
    </>
  )
}

export default Thumbnail