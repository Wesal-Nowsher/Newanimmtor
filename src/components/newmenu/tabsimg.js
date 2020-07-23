import React,{Component} from 'react';

class imgcondition extends Component{
    render(){
        return(
            <>{
                  this.props.color === "black" &&
                  <img src={require(`../../Assets/newmenu/allcolors/Black/${this.props.imgname}.png`)}
                       alt="cute dog"
                       className={this.props.imgname==="launcher" ? "tabs-imge":"tabs-img"}
                       width="5px" />
              }
              {
                  this.props.color === "blue" &&
                  <img src={require(`../../Assets/newmenu/allcolors/Blue/${this.props.imgname}.png`)}
                       alt="cute dog"
                       className={this.props.imgname==="launcher" ? "tabs-imge":"tabs-img"}
                       width="5px"
                  />
              }
              {
                  this.props.color === "grey" &&
                  <img src={require(`../../Assets/newmenu/allcolors/Grey/${this.props.imgname}.png`)}
                       alt="cute dog"
                       className={this.props.imgname==="launcher" ? "tabs-imge":"tabs-img"}
                       width="5px" />
              }
              {
                  this.props.color === "lightgrey" &&
                  <img src={require(`../../Assets/newmenu/allcolors/lightgrey/${this.props.imgname}.png`)}
                       alt="cute dog"
                       className={this.props.imgname==="launcher" ? "tabs-imge":"tabs-img"}
                       width="5px" />
              }
              {
                  this.props.color === "lightgreen" &&
                  <img src={require(`../../Assets/newmenu/allcolors/lightgreen/${this.props.imgname}.png`)}
                       alt="cute dog"
                       className={this.props.imgname==="launcher" ? "tabs-imge":"tabs-img"}
                       width="5px" />
              }
              {
                  this.props.color === "lightblue" &&
                  <img src={require(`../../Assets/newmenu/allcolors/lightblue/${this.props.imgname}.png`)}
                       alt="cute dog"
                       className={this.props.imgname==="launcher" ? "tabs-imge":"tabs-img"}
                       width="5px" />
              }
              {
                  this.props.color === "lightorange" &&
                  <img src={require(`../../Assets/newmenu/allcolors/lightorange/${this.props.imgname}.png`)}
                       alt="cute dog"
                       className={this.props.imgname==="launcher" ? "tabs-imge":"tabs-img"}
                       width="5px" />
              }
              {
                  this.props.color === "lightpurple" &&
                  <img src={require(`../../Assets/newmenu/allcolors/lightpurple/${this.props.imgname}.png`)}
                       alt="cute dog"
                       className={this.props.imgname==="launcher" ? "tabs-imge":"tabs-img"}
                       width="5px" />
              }
            </>
        )
    }
}
export default imgcondition;