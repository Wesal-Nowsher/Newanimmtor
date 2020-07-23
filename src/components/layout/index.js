import React, { Component } from 'react';
import { connect } from "react-redux";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import SideBar from "../sideBar";
import {addTabs,changeiconsize,changecolor,changefontcolor,backchanger,variahcnge} from '../tabs/actions'
import Tabs from "../tabs"
import {withRouter} from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';
import Tabsimg from "../newmenu/tabsimg"
class Layout extends Component {
    state = {
        openstate: false,
        chevron:false,
            coloractive:"black",
        sizeactive:1,
        fontsize:"black",
        backactive:"lightgrey",
        variation:1
    }
    open1 = () => {
        this.setState({ openstate: !this.state.openstate });
    }
    goto(name){
        let {tabs}=this.props;
        let tab=tabs;
        let Tabs=[];
        let isThere=true;
        tab.map((item)=>{
            item.active=false;
            //REPEATABLE
            // if(item.name ===name){
            //     isThere=false;
            //     item.active=true;
            // }
            // else{
            //     item.active=false
            // }
        });
        // if(isThere){
        //     Tabs.push(...tab,{id:`${tab.length+1}`,name:name,active:true,content:name})
        //     this.props.addTabs(Tabs);
        //     this.props.history.push(`/${name.toLowerCase().replace(/\s/g, "")}`);
        // }
        // else{
        //     Tabs.push(...tab);
        //     this.props.addTabs(Tabs);
        //     this.props.history.push(`/${name.toLowerCase().replace(/\s/g, "")}`);
        // }
        //REPEATABLE
        //NON REPEATABLE
        Tabs.push(...tab,{id:`${parseInt(tab[tab.length-1].id)+1}`,name:name,active:true, content:name})
        this.props.addTabs(Tabs);
        this.props.history.push(`/${name.toLowerCase().replace(/\s/g, "")}/${parseInt(tab[tab.length-1].id)+1}`);
        //NON REPEATABLE

    }
    iconsize(size){
     this.setState({sizeactive:size});
    this.props.changeiconsize(size);
    }
    colorchange(color){
    let Tabs=[];
    this.props.tabs.map((item)=>{
        Tabs.push(
        {id:item.id,name:item.name,active:item.active,
            content:(<span>
                    <Tabsimg
                    color={color}
                    imgname={item.name.toLowerCase().replace(/\s/g, "").replace("'","")}
                    />
                {item.name}</span>
        )}
        )
    })
        this.setState({coloractive:color});
        this.props.changecolor(color);
        this.props.addTabs(Tabs);

    }
    changefontsize(color){
        this.setState({fontsize:color})
        this.props.changefontcolor(color);
    }
    backchange(color){
    this.setState({backactive:color})
    this.props.backchanger(color);
}
varichange(number){
    this.setState({variation:number})
    this.props.variahcnge(number)
}
    render() {

        return (
            <>
            <div className="container-fluid nomobile">
                <div className="row">
                    <div className="col-sm-12 pl-0 pr-0 d-flex" >
                        <button className={this.state.variation===1 ? "btn black-back":"btn grey-back"}
                                onClick={()=> this.varichange(1)}
                        >Variation 1</button>
                        <button className={this.state.variation===2 ? "btn black-back":"btn grey-back"}
                                onClick={()=> this.varichange(2)}
                        >Variation 2</button>
                        <button className={this.state.variation===3 ? "btn black-back":"btn grey-back"}
                                onClick={()=> this.varichange(3)}
                        >Variation 3</button>
                        {/*<div className="topbar ml-10m" >*/}
                        {/*/!* <i className="fa fa-search" onClick={() => { this.open1() }}></i> *!/*/}

                        {/*/!* <button onClick={()=>{this.open1()}}>File </button> *!/*/}


                        {/*/!*<p>Build System</p>*!/*/}
                        {/*{*/}
                        {/*this.props.tabs.map((item)=>{*/}
                        {/*return item.active=== true && <p className="pagetitle">*/}
                        {/*{*/}
                        {/*item.name*/}
                        {/*}*/}
                        {/*</p>*/}
                        {/*})*/}
                        {/*}*/}

                        {/*</div>*/}


                    </div>
                </div>

                <div className="row pos-relative respons">

                    <div className="width3 d-flex flex-column align-items-center">
                        {/*<i className="fa fa-arrow-down mt-3"*/}

                        {/*style={{ zIndex:"394838492",*/}

                        {/*}}*/}
                        {/*onClick={()=>{this.setState({chevron:!this.state.chevron})}}*/}
                        {/*></i>*/}

                        {/*<i className="fa fa-arrow-right mt-3"*/}
                        {/*style={{ zIndex:"394838492",*/}

                        {/*}}*/}
                        {/*onClick={()=>{this.setState({chevron:!this.state.chevron})}}*/}
                        {/*></i>*/}
                        {
                            this.state.chevron ?
                                <img src={require("../../Assets/newmenu/chevrondow.png")}
                                     className="for-hover"
                                     style={{ zIndex:"394838492",marginTop: "10px" }}
                                     onClick={()=>{this.setState({chevron:!this.state.chevron})}}
                                     alt=""/>
                                : <img src={require("../../Assets/newmenu/chevronright.png")}
                                       className="for-hover"
                                       style={{ zIndex:"394838492",marginTop: "10px"}}
                                       onClick={()=>{this.setState({chevron:!this.state.chevron})}}
                                       alt=""/>
                        }

                        <span  className={this.state.sizeactive===1 ? "size1 activesize":"size1 sizeshadow "}
                               onClick={()=>this.iconsize(1)}></span>
                        <span className={this.state.sizeactive===2 ? "size2 activesize":"size2 sizeshadow"}
                              onClick={()=>this.iconsize(2)}></span>
                        <span className={this.state.sizeactive===3 ? "size3 activesize":"size3 sizeshadow"}
                              onClick={()=>this.iconsize(3)}></span>

                        <span className={this.state.coloractive==="black" ? "blackicons active":"blackicons "}
                              style={{background:"#000000"}}
                              onClick={()=>this.colorchange("black")}></span>
                        <span className={this.state.coloractive==="blue" ? "blueicons active":"blueicons "}
                              style={{background:"#0b94e3"}}
                              onClick={()=>this.colorchange("blue")}></span>
                        <span className={this.state.coloractive==="grey" ? "blueicons active":"blueicons "}
                              style={{background:"#AAAAAA"}}
                              onClick={()=>this.colorchange("grey")}></span>
                        <span className={this.state.coloractive==="lightgrey" ? "blueicons active":"blueicons "}
                              style={{background:"#464646"}}
                              onClick={()=>this.colorchange("lightgrey")}></span>
                        <span className={this.state.coloractive==="lightgreen" ? "blueicons active":"blueicons "}
                              style={{background:"#ABFFAF"}}
                              onClick={()=>this.colorchange("lightgreen")}></span>
                        <span className={this.state.coloractive==="lightblue" ? "blueicons active":"blueicons "}
                              style={{background:"#87CBF1"}}
                              onClick={()=>this.colorchange("lightblue")}></span>
                        <span className={this.state.coloractive==="lightorange" ? "blueicons active":"blueicons "}
                              style={{background:"#FDC772"}}
                              onClick={()=>this.colorchange("lightorange")}></span>
                        <span className={this.state.coloractive==="lightpurple" ? "blueicons active":"blueicons "}
                              style={{background:"#C295DA"}}
                              onClick={()=>this.colorchange("lightpurple")}></span>
                        {/*up is icons change color*/}
                        {/*// font size change*/}
                        <span className={this.state.fontsize==="black" ? "blueiconsfont fontsize fontcolorchnage active black-font-c":" fontsize blueiconsfont  black-font-c"}
                              style={{    color:"black"}}
                              onClick={()=>this.changefontsize("black")}>A</span>
                        <span className={this.state.fontsize==="grey" ? "blueiconsfont mt-2 grey-font-c fontcolorchnage active fontsize ":"fontsize  blueiconsfont grey-font-c mt-2 "}
                              style={{color:"#AAAAAA"}}
                              onClick={()=>this.changefontsize("grey")}>A</span>
                        <span className={this.state.fontsize==="clear" ? " mt-2 blueiconsfont trans-font-c active fontsize ":" trans-font-c mt-2 blueiconsfont fontsize "}

                              onClick={()=>this.changefontsize("clear")}>A<i
                            className="fa fa-ban red-ba " ></i></span>

                        {/*background change*/}


                        <span className={this.state.backactive==="lightgrey" ? "blueicons active ":"blueicons "}
                              style={{background:"lightgrey", marginTop:"20px"}}
                              onClick={()=>this.backchange("lightgrey")}></span>
                        <span className={this.state.backactive==="lightblue" ? "blueicons active mt-1":"blueicons mt-1"}
                              style={{background:"lightblue"}}
                              onClick={()=>this.backchange("lightblue")}></span>
                        <span className={this.state.backactive==="white" ? "blueicons active mt-1":"blueicons mt-1 "}
                              style={{background:"white",boxShadow: "0px 0px 4px black"}}
                              onClick={()=>this.backchange("white")}></span>
                        <span className={this.state.backactive==="black" ? "blueicons active ":"blueicons mt-1"}
                              style={{background:"black"}}
                              onClick={()=>this.backchange("black")}></span>
                        {/*</div>*/}
                    </div>
                    {
                        this.state.chevron &&
                        <div className="width20 pr-0">
                            <Tabs chevron={this.state.chevron}/>
                        </div>
                    }
                    <div className={this.state.chevron ? "width70 menu-margin":"width90 menu-margin"}>

                        {this.state.chevron ? console.log(" "):<Tabs chevron={this.state.chevron}/>}
                        {this.props.children}
                    </div>
                </div>
            </div>
            <div className="container-fluid mobile">
                <div className="row">
                    <div className="col-sm-12 pl-0 pr-0 d-flex" >
                        <button className={this.state.variation===1 ? "btn black-back":"btn grey-back"}
                                onClick={()=> this.varichange(1)}
                        >Variation 1</button>
                        <button className={this.state.variation===2 ? "btn black-back":"btn grey-back"}
                                onClick={()=> this.varichange(2)}
                        >Variation 2</button>
                        <button className={this.state.variation===3 ? "btn black-back":"btn grey-back"}
                                onClick={()=> this.varichange(3)}
                        >Variation 3</button>
                        {/*<div className="topbar ml-10m" >*/}
                        {/*/!* <i className="fa fa-search" onClick={() => { this.open1() }}></i> *!/*/}

                        {/*/!* <button onClick={()=>{this.open1()}}>File </button> *!/*/}


                        {/*/!*<p>Build System</p>*!/*/}
                        {/*{*/}
                        {/*this.props.tabs.map((item)=>{*/}
                        {/*return item.active=== true && <p className="pagetitle">*/}
                        {/*{*/}
                        {/*item.name*/}
                        {/*}*/}
                        {/*</p>*/}
                        {/*})*/}
                        {/*}*/}

                        {/*</div>*/}


                    </div>
                </div>

                <div className="row pos-relative respons">
                    <i className="fa fa-bars" onClick={()=>this.setState({resMain:true})}></i>
                    <div className="width3 d-flex flex-column align-items-center">
                        {/*<i className="fa fa-arrow-down mt-3"*/}

                        {/*style={{ zIndex:"394838492",*/}

                        {/*}}*/}
                        {/*onClick={()=>{this.setState({chevron:!this.state.chevron})}}*/}
                        {/*></i>*/}

                        {/*<i className="fa fa-arrow-right mt-3"*/}
                        {/*style={{ zIndex:"394838492",*/}

                        {/*}}*/}
                        {/*onClick={()=>{this.setState({chevron:!this.state.chevron})}}*/}
                        {/*></i>*/}

                        <i className="fa fa-close" closer-res></i>
                        <span  className={this.state.sizeactive===1 ? "size1 activesize":"size1 sizeshadow "}
                               onClick={()=>this.iconsize(1)}></span>
                        <span className={this.state.sizeactive===2 ? "size2 activesize":"size2 sizeshadow"}
                              onClick={()=>this.iconsize(2)}></span>
                        <span className={this.state.sizeactive===3 ? "size3 activesize":"size3 sizeshadow"}
                              onClick={()=>this.iconsize(3)}></span>

                        <span className={this.state.coloractive==="black" ? "blackicons active":"blackicons "}
                              style={{background:"#000000"}}
                              onClick={()=>this.colorchange("black")}></span>
                        <span className={this.state.coloractive==="blue" ? "blueicons active":"blueicons "}
                              style={{background:"#0b94e3"}}
                              onClick={()=>this.colorchange("blue")}></span>
                        <span className={this.state.coloractive==="grey" ? "blueicons active":"blueicons "}
                              style={{background:"#AAAAAA"}}
                              onClick={()=>this.colorchange("grey")}></span>
                        <span className={this.state.coloractive==="lightgrey" ? "blueicons active":"blueicons "}
                              style={{background:"#464646"}}
                              onClick={()=>this.colorchange("lightgrey")}></span>
                        <span className={this.state.coloractive==="lightgreen" ? "blueicons active":"blueicons "}
                              style={{background:"#ABFFAF"}}
                              onClick={()=>this.colorchange("lightgreen")}></span>
                        <span className={this.state.coloractive==="lightblue" ? "blueicons active":"blueicons "}
                              style={{background:"#87CBF1"}}
                              onClick={()=>this.colorchange("lightblue")}></span>
                        <span className={this.state.coloractive==="lightorange" ? "blueicons active":"blueicons "}
                              style={{background:"#FDC772"}}
                              onClick={()=>this.colorchange("lightorange")}></span>
                        <span className={this.state.coloractive==="lightpurple" ? "blueicons active":"blueicons "}
                              style={{background:"#C295DA"}}
                              onClick={()=>this.colorchange("lightpurple")}></span>
                        {/*up is icons change color*/}
                        {/*// font size change*/}
                        <span className={this.state.fontsize==="black" ? "blueiconsfont fontsize fontcolorchnage active black-font-c":" fontsize blueiconsfont  black-font-c"}
                              style={{    color:"black"}}
                              onClick={()=>this.changefontsize("black")}>A</span>
                        <span className={this.state.fontsize==="grey" ? "blueiconsfont mt-2 grey-font-c fontcolorchnage active fontsize ":"fontsize  blueiconsfont grey-font-c mt-2 "}
                              style={{color:"#AAAAAA"}}
                              onClick={()=>this.changefontsize("grey")}>A</span>
                        <span className={this.state.fontsize==="clear" ? " mt-2 blueiconsfont trans-font-c active fontsize ":" trans-font-c mt-2 blueiconsfont fontsize "}

                              onClick={()=>this.changefontsize("clear")}>A<i
                            className="fa fa-ban red-ba " ></i></span>

                        {/*background change*/}


                        <span className={this.state.backactive==="lightgrey" ? "blueicons active ":"blueicons "}
                              style={{background:"lightgrey", marginTop:"20px"}}
                              onClick={()=>this.backchange("lightgrey")}></span>
                        <span className={this.state.backactive==="lightblue" ? "blueicons active mt-1":"blueicons mt-1"}
                              style={{background:"lightblue"}}
                              onClick={()=>this.backchange("lightblue")}></span>
                        <span className={this.state.backactive==="white" ? "blueicons active mt-1":"blueicons mt-1 "}
                              style={{background:"white",boxShadow: "0px 0px 4px black"}}
                              onClick={()=>this.backchange("white")}></span>
                        <span className={this.state.backactive==="black" ? "blueicons active ":"blueicons mt-1"}
                              style={{background:"black"}}
                              onClick={()=>this.backchange("black")}></span>
                        {/*</div>*/}
                        {
                            this.state.chevron ?
                                <img src={require("../../Assets/newmenu/chevrondow.png")}
                                     className="for-hover"
                                     style={{ zIndex:"394838492",marginTop: "10px" }}
                                     onClick={()=>{this.setState({chevron:!this.state.chevron})}}
                                     alt=""/>
                                : <img src={require("../../Assets/newmenu/chevronright.png")}
                                       className="for-hover"
                                       style={{ zIndex:"394838492",marginTop: "10px"}}
                                       onClick={()=>{this.setState({chevron:!this.state.chevron})}}
                                       alt=""/>
                        }

                    </div>
                    {
                        this.state.chevron &&
                        <div className="width20 pr-0">
                            <Tabs chevron={this.state.chevron}/>
                        </div>
                    }
                    <div className={this.state.chevron ? "width70 menu-margin":"width90 menu-margin"}>

                        {this.state.chevron ? console.log(" "):<Tabs chevron={this.state.chevron}/>}
                        {this.props.children}
                    </div>
                </div>
            </div>
            </>
        )
    }
}
const mapStateToProps = ({tabs }) => {
    return {
        tabs:tabs.tabs,
        color:tabs.color

    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default withRouter(connect(
    mapStateToProps,
    {addTabs,changeiconsize,changecolor,changefontcolor,backchanger,variahcnge}
)(Layout));
