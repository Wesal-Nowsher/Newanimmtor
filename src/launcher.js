import React,{Component} from 'react';

class imgcondition extends Component{
    render(){
        return(

            <>{
                  this.props.color === "black" &&
                  <img src={require(`./Assets/newmenu/allcolors/Black/launcher.png`)}
                       alt="cute dog"
                       className="tabs-imge"
                  />

              }
              {
                  this.props.color === "blue" &&
                  <img src={require(`./Assets/newmenu/allcolors/Blue/launcher.png`)}
                       className="tabs-imge"
                       alt="" />
              }
              {
                  this.props.color === "grey" &&
                  <img src={require(`./Assets/newmenu/allcolors/Grey/launcher.png`)}
                       alt="cute dog"
                       className="tabs-imge"
                  />
              }
              {
                  this.props.color === "lightgrey" &&
                  <img src={require(`./Assets/newmenu/allcolors/lightgrey/launcher.png`)}
                       alt="cute dog"
                       className="tabs-imge" />
              }
              {
                  this.props.color === "lightgreen" &&
                  <img src={require(`./Assets/newmenu/allcolors/lightgreen/launcher.png`)}
                       alt="cute dog"
                       className="tabs-imge" />
              }
              {
                  this.props.color === "lightblue" &&
                  <img src={require(`./Assets/newmenu/allcolors/lightblue/launcher.png`)}
                       alt="cute dog"
                       className="tabs-imge" />
              }
              {
                  this.props.color === "lightorange" &&
                  <img src={require(`./Assets/newmenu/allcolors/lightorange/launcher.png`)}
                       alt="cute dog"
                       className="tabs-imge" />
              }
              {
                  this.props.color === "lightpurple" &&
                  <img src={require(`./Assets/newmenu/allcolors/lightpurple/launcher.png`)}
                       alt="cute dog"
                       className="tabs-imge" />
              }
            </>
        )
    }
}
export default imgcondition;