import React, { Component } from 'react'
import Display from './Display'
import Thumbnail from './Thumbnail'


export class Imager extends Component {
    state=  {
        images: ['images/driadaMandala.jpg', 'images/fivePointMandala.jpg', 'images/goldenMandala.jpg', 'images/hobbiiMandela.jpg', 'images/lotusMandala.jpg', 'images/mandala.jpg', 'images/mandalaFlores.jpg', 'images/mueMundoMandala.jpg', 'images/purpleMandala.jpg', 'images/starDream.jpg', 'images/sunMandala.jpg', 'images/sunnyMandala.jpg', 'images/unseenMandala.jpg'],
        imageNumber: 0,
        displayImage: ''
    }

    componentDidMount(){
        this.setState({
            displayImage: this.state.images[this.state.imageNumber]
        })
    }
    componentDidUpdate(prevProps, prevState){
       if(prevState.imageNumber !== this.state.imageNumber){
         this.setState({
           displayImage: this.state.images[this.state.imageNumber]
         })
       }
       if(this.state.imageNumber > 12){
         this.setState({
           imageNumber: 0
         })
       }
       if(this.state.imageNumber < 0){
         this.setState({
           imageNumber: 11
         })
       }
    }
    displayImageClicked=(index)=>{
       this.setState({
         imageNumber: index
       })
       
    }


  render() {
    return (
      <div>
        <Display path={this.state.displayImage}/>
        <div style={{display: 'flex', justifyContent: 'space-around'}} className='buttons'></div>
        <button onClick={()=>this.setState({imageNumber: Math.floor(Math.random()*13)})}>Random</button>
        <div className='arrowButtons'>
            <button onClick={()=>this.setState({imageNumber: this.state.imageNumber-1})}>{'<'}</button>
            <button onClick={()=>this.setState({imageNumber: this.state.imageNumber+1})}>{'>'}</button>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', width: '80vw', justifyContent: 'center'}} className='images'>
            {this.state.images.map((path, i)=>{
                return (
                    <Thumbnail imageNumber={i} clickFunc={this.displayImageClicked} path={path}/>
                )
            })}
        </div>
      </div>
      
    )
  }
}

export default Imager