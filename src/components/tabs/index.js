import React, { Component } from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import {closetabs,addTabs} from "./actions";
import  './index.css'
import _ from 'lodash';
import Tabs from "react-draggable-tabs";




const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
class Tab extends Component{
    constructor(props) {
        super(props);
        this.moveTab = this.moveTab.bind(this);
        this.selectTab = this.selectTab.bind(this);
        this.closedTab = this.closedTab.bind(this);

        this.state={
            tabs:[],
            pager: {},
            startIndex: 0,
            endIndex: 7,
            count: 1
        }
    }



    componentDidMount(){
        this.setState({tabs:this.props.tabs})
            // this.setPage(1);
    }
    componentWillReceiveProps(props){

            this.setState({tabs:props.tabs})
    }

     closeTabs=(name,id,active)=>{

        if(name.toLowerCase().replace(/\s/g, "")!=="launcher"){
        let {tabs} = this.props;
        let Tab=[];
        tabs.map((item)=>{
            if(item.id!== id){
                Tab.push(item);
            }
        })
        this.props.closetabs(Tab);

        if( this.props.location.pathname.toLowerCase().replace(/\s/g, "")===`/${name.toLowerCase().replace(/\s/g, "")}/${id}` && active===true ){

            Tab[Tab.length-1].active=true
            let linkto=Tab.length>0 ? Tab[Tab.length-1].name:"/";
            this.props.history.push(`/${linkto.toLowerCase().replace(/\s/g, "")}/${Tab[Tab.length-1].id}`)
        }
    }
    }
     goto=(name,id)=>{
        let {tabs}=this.props;
        let Tab = tabs;
        Tab.map((item)=>{
           if(item.id===id){
               item.active=true;
           }
           else{
               item.active=false;
           }
        })
         this.props.addTabs(Tab);

         this.props.history.push(`/${name.toLowerCase().replace(/\s/g, "")}/${parseInt(Tab[Tab.length-1].id)+1}`)
         this.forceUpdate();
    }
    scrollleft(){
        document.getElementById("tabs-btn-on").scrollLeft -= 100
    }
    scrollRght(){
        document.getElementById("tabs-btn-on").scrollLeft += 100
    }
    moveTab(dragIndex, hoverIndex) {
        let newTabs = [...this.state.tabs];
        newTabs.splice(hoverIndex, 0, newTabs.splice(dragIndex, 1)[0]);
        this.setState({ tabs: newTabs });
        this.props.addTabs(newTabs);
    }
    selectTab(selectedIndex, selectedID) {
        const newTabs = this.state.tabs.map(tab => ({
            ...tab,
            active: tab.id === selectedID
        }));
        this.setState({ tabs: newTabs });
        this.props.addTabs(newTabs);
        let goer="";
        this.state.tabs.map((tab)=>{
            if(tab.id=== selectedID ){
                goer= tab.name
            }
        })
        this.goto(goer,selectedID)
    }

    closedTab(removedIndex, removedID) {
        let newTabs = [...this.state.tabs];
        if(newTabs[removedIndex].name.toLowerCase().replace(/\s/g, "")!=="launcher"){

        newTabs.splice(removedIndex, 1);

        if (this.state.tabs[removedIndex].active && newTabs.length !== 0) {
            // automatically select another tab if needed
            const newActive = removedIndex === 0 ? 0 : removedIndex - 1;
            newTabs[newActive].active = true;
        }


        // this.setState({ tabs: newTabs });
        newTabs && newTabs[newTabs.length-1] && newTabs[newTabs.length-1].active
            ? newTabs[newTabs.length-1].active=true:console.log("go");
        let linkto=newTabs.length>0 ? `/${newTabs[newTabs.length-1].name}/${parseInt(newTabs[newTabs.length-1].id)+1}`:"/";

        this.setState({ tabs: newTabs });
        this.props.addTabs(newTabs);
        this.props.history.push(`${linkto.toLowerCase().replace(/\s/g, "")}`)

        }
    }
       render(){
        let {pager}=this.state;

           return (
               <div className="col-sm-12 pl-0 pr-0 d-flex align-items-center menus" id="menu">
                   {/*<i className="fa fa-chevron-left next-butt mr-3"*/}
                        {/*onClick={() => this.scrollleft()}*/}
                   {/*/>*/}
                   <div className={this.props.chevron? "tabs-button container-scroll extra-sidetab":"tabs-button container-scroll" } id="tabs-btn-on">

                       <Tabs
                           moveTab={this.moveTab}
                           selectTab={this.selectTab}
                           closeTab={this.closedTab}
                           tabs={this.state.tabs}
                           className="tabs-left"
                           id="tabs-left"
                       >

                       </Tabs>
                       {/*{*/}
                           {/*this.state.tabs &&*/}
                           {/*this.state.tabs.map((item,index)=>{*/}
                               {/*return <button  className={*/}
                       
                                      {/*item.active===true ? `blue-back mr-1 ${item.name.toLowerCase().replace(/\s/g, "")}`:`mr-1 ${item.name.toLowerCase().replace(/\s/g, "")}`*/}
                               {/*}*/}
                                               {/*key={index}>*/}
                                   {/*<h1 className="tab-h1"*/}
                                   {/*onClick={()=>{this.goto(item.name,item.id)}}*/}
                               {/*>{item.name}</h1><i className="fa fa-times" onClick={()=>{this.closeTabs(item.name,item.id,item.active)}}></i></button>*/}
                           {/*})*/}
                       {/*}*/}



                   </div>
                   {/*<i className="fa fa-chevron-right next-butt"*/}
                       {/*onClick={() => this.scrollRght()}*/}
                   {/*/>*/}
               </div>

           )
       }
    }


const mapStateToProps = ({ tabs}) => {
    return {
        tabs:tabs.tabs
    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default connect(
    mapStateToProps,
    {closetabs,addTabs}
)(withRouter(Tab));


