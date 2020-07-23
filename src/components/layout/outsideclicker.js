import React, { Component } from 'react';

import SideBar from "../sideBar";
import OutsideClickHandler from 'react-outside-click-handler';
class outsideClicker extends Component{
    render(){
        return(
            <OutsideClickHandler
                onOutsideClick={() => {

                    this.props.open1()
                }}
            >
                <div id="mySidenav" className={this.props.openstate ? "sidenav width-250":"sidenav width-0"} >
                    {
                        this.props.openstate ?

                            <SideBar />
                            : null
                    }
                </div>
            </OutsideClickHandler>
        )
    }
}
export default outsideClicker;