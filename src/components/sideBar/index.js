import React, { Component } from 'react';
import {withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import {addTabs} from '../tabs/actions'
class SideBar extends Component {

    addTabs(name){
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
        Tabs.push(...tab,{id:`${parseInt(tab[tab.length-1].id)+1 || tab.length+1}`,name:name,active:true, content:name})
            this.props.addTabs(Tabs);
            this.props.history.push(`/${name.toLowerCase().replace(/\s/g, "")}/${tab[tab.length-1].id+1 || tab.length+1}`);
        //NON REPEATABLE
    }

    render() {

        return (
            
                <div className="sidenav">
                    {/*<div className="sidebarlink" onClick={()=>{this.addTabs("Users")}}>Users</div>*/}
                    {/*/!*<div onClick={()=>{this.addTabs("Create User")}}>Create User</div>*!/*/}
                    {/*/!*<div onClick={()=>{this.addTabs("Weekly Build")}}>weekly Build</div>*!/*/}
                    {/*<div className="sidebarlink" onClick={()=>{this.addTabs("Error Log")}}>Error Log  </div>*/}
                    {/*<div className="sidebarlink" onClick={()=>{this.addTabs("Employee Access")}}>Employee Access  </div>*/}
                     {/*<div className="sidebarlink" onClick={()=>{this.addTabs("Activities")}}>Activities</div>*/}
                    {/*<div className="sidebarlink" onClick={()=>{this.addTabs("product")}}>Products</div>*/}
                    {/*<div className="sidebarlink" onClick={()=>{this.addTabs("User Activity")}}>User Activity Log</div>*/}
                    {/*<div className="sidebarlink" onClick={()=>{this.addTabs("Current Open View")}}>Currently Open Forms</div>*/}
                    {/*/!*<div className="sidebarlink" onClick={()=>{this.addTabs("Manage Patch")}}>Manage Patches</div>*!/*/}
                    {/*<div className="sidebarlink" onClick={()=>{this.addTabs("Individual Print")}}>Print Build Sheet</div>*/}
                    {/*<div className="sidebarlink" onClick={()=>{this.addTabs("Email Print")}}>Email Build Sheet</div>*/}
                    {/*<div className="sidebarlink" onClick={()=>{this.addTabs("Patches")}}>Patches</div>*/}
                    {/*<div className="sidebarlink" onClick={()=>{this.addTabs("Time Registration View")}}>Time Registration View</div>*/}
                </div>
        )
    }
}


const mapStateToProps = ({
    tabs
 }) => {
    return {tabs:tabs.tabs};
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default withRouter(connect(
    mapStateToProps,
    {addTabs}
)(SideBar));
