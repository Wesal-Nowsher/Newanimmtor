import React,{Component} from 'react';

class imgcondition extends Component{
    render(){
       return(
           <>{
                 this.props.color === "black" &&
                 <img src={require(`../../Assets/newmenu/allcolors/Black/${this.props.box.imgname}.png`)}
                      onClick={() => { this.props.addTabs(this.props.box.fparam) }}
                      className="cursor-pointer"
                      alt="" />
             }
             {
                 this.props.color === "blue" &&
                 <img src={require(`../../Assets/newmenu/allcolors/Blue/${this.props.box.imgname}.png`)}
                      onClick={() => { this.props.addTabs(this.props.box.fparam) }}
                      className="cursor-pointer"
                      alt="" />
             }
             {
                 this.props.color === "grey" &&
                 <img src={require(`../../Assets/newmenu/allcolors/Grey/${this.props.box.imgname}.png`)}
                      onClick={() => { this.props.addTabs(this.props.box.fparam) }}
                      className="cursor-pointer"
                      alt="" />
             }
             {
                 this.props.color === "lightgrey" &&
                 <img src={require(`../../Assets/newmenu/allcolors/lightgrey/${this.props.box.imgname}.png`)}
                      onClick={() => { this.props.addTabs(this.props.box.fparam) }}
                      className="cursor-pointer"
                      alt="" />
             }
             {
                 this.props.color === "lightgreen" &&
                 <img src={require(`../../Assets/newmenu/allcolors/lightgreen/${this.props.box.imgname}.png`)}
                      onClick={() => { this.props.addTabs(this.props.box.fparam) }}
                      className="cursor-pointer"
                      alt="" />
             }
             {
                 this.props.color === "lightblue" &&
                 <img src={require(`../../Assets/newmenu/allcolors/lightblue/${this.props.box.imgname}.png`)}
                      onClick={() => { this.props.addTabs(this.props.box.fparam) }}
                      className="cursor-pointer"
                      alt="" />
             }
             {
                 this.props.color === "lightorange" &&
                 <img src={require(`../../Assets/newmenu/allcolors/lightorange/${this.props.box.imgname}.png`)}
                      onClick={() => { this.props.addTabs(this.props.box.fparam) }}
                      className="cursor-pointer"
                      alt="" />
             }
             {
                 this.props.color === "lightpurple" &&
                 <img src={require(`../../Assets/newmenu/allcolors/lightpurple/${this.props.box.imgname}.png`)}
                      onClick={() => { this.props.addTabs(this.props.box.fparam) }}
                      className="cursor-pointer"
                      alt="" />
             }
           </>
       )
    }
}
export default imgcondition;