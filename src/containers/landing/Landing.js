import React, { Component } from 'react';

// Components
import Tampon from '../../components/tampon/Tampon';
import Toalla from '../../components/toalla/Toalla';
import Copa from '../../components/copa/Copa';
import Tissu from '../../components/tissu/Tissu';

// Assets
import logo_bloody_copy from "../../assets/logo_bloody_copy.png";

// .CSS
import './Landing.css'

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPostion: 1
    };
  }
  
  componentDidMount(){
    const home = document.querySelector('#home')
    const options = {
      rootMargin: '0px 0px 0px 0px',
      threshold: .4,
    }
    const callback = (entries, observer) => {
      
      if (entries[0].isIntersecting && this.props.location.hash === '') {
        // debugger
        // if (!window.ismobile()) {
        //   home.scrollIntoView({block: "start", behavior: "smooth"}); 
        // }

        document.getElementById("firstCircle").style.width = "10px"
        document.getElementById("firstCircle").style.height = "10px"
        document.getElementById("firstCircle").style.opacity = "1"

        document.getElementById("secondCircle").style.width = "8px"
        document.getElementById("secondCircle").style.height = "8px"
        document.getElementById("secondCircle").style.opacity = "0.9"

        document.getElementById("thirdCircle").style.width = "6px"
        document.getElementById("thirdCircle").style.height = "6px"
        document.getElementById("thirdCircle").style.opacity = "0.8"

        document.getElementById("fourCircle").style.width = "5px"
        document.getElementById("fourCircle").style.height = "5px"
        document.getElementById("fourCircle").style.opacity = "0.7"

        document.getElementById("fifthCircle").style.width = "4px"
        document.getElementById("fifthCircle").style.height = "4px"
        document.getElementById("fifthCircle").style.opacity = "0.6"
      }
      // else if(window.location.hash === "#home"){
      //   window.location.hash = ''
      // }
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(home)

    // window.addEventListener("wheel", (event) => { this.eventScrollNav(event)}, { passive: false} )

  }

//   eventScrollNav = (e) => {
//     e.preventDefault()
//     // const order = ['#home', '#tampon', '#toalla', '#copa', '#tissu']
//     const order = ['home', 'tampon', 'toalla', 'copa', 'tissu']
    
//     console.log(e.deltaY);
//     console.log(e.deltaY <= -16);
//     console.log(this.state.currentPostion);
    
//     // if () {
//     // }
      
//       if (e.deltaY.toFixed() >= 16 && this.state.currentPostion !== 4) {
//         // window.location.hash = "#tissu"
//         // window.location.hash = order[this.state.currentPostion]
//         document.getElementById(order[this.state.currentPostion+1]).scrollIntoView({behavior: "smooth"});
//         this.setState({currentPostion: this.state.currentPostion +1})
//         // window.location.hash = "#tissu"
//       }else if (e.deltaY <= -16 && this.state.currentPostion !== 0) {
//           // window.location.hash = "#home"
//           // window.location.hash = order[this.state.currentPostion]
//           document.getElementById(order[this.state.currentPostion -1]).scrollIntoView({behavior: "smooth"});
//           this.setState({currentPostion: this.state.currentPostion -1})
//           // window.location.hash = "#home"
//       }
//       else if(e.deltaY >= -16 ){
//         // this.setState({currentPostion: this.state.currentPostion -1})
//         document.getElementById("footer").scrollIntoView({behavior: "smooth"});
//       }
    
// }

  render() {
    
    return (

        <div className="container-landing-page" >
            
            <div className="container-circle-header" style={{ display: this.props.country === 'PR' ? 'flex' : 'none' }}>
                    <a href="#home">  <div className="circle-header first-circle" id="firstCircle" ></div> </a> 
                    <a href="/#tampon">  <div className="circle-header second-circle" id="secondCircle" ></div> </a> 
                    <a href="/#toalla">  <div className="circle-header third-circle" id="thirdCircle" ></div> </a> 
                    <a href="/#copa">  <div className="circle-header four-circle" id="fourCircle" ></div> </a> 
                    <a href="/#tissu">  <div className="circle-header fifthCircle-circle" id="fifthCircle" ></div> </a> 
            </div>

            <div id="home" className="container-home-landing-page">
              <img src={logo_bloody_copy} alt="logo bloody data"/>
              <span> {this.props.country === 'PR' ? <span className="hi"> </span> : <span> mujeres sangren es asqueroso </span>} </span>
            </div>
            
            {this.props.country === 'PR' &&
              <Tampon  {...this.props} handlerModalEvent={(e)=>{ this.props.handlerModalEvent(e) }}  country={this.props.country} />
            }
            
            <Toalla  {...this.props} handlerModalEvent={(e)=>{ this.props.handlerModalEvent(e) }}  country={this.props.country} />

            {this.props.country === 'PR' &&
              <Copa  {...this.props} handlerModalEvent={(e)=>{ this.props.handlerModalEvent(e) }}  country={this.props.country} />
            }

            {this.props.country === 'PR' &&
              <Tissu  {...this.props} handlerModalEvent={(e)=>{ this.props.handlerModalEvent(e) }}  country={this.props.country} />
            }
        </div>
    )
  }
}

export default Landing;
