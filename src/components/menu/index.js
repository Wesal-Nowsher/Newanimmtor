import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Line, Polar } from 'react-chartjs-2';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { connect } from "react-redux";
import { Link,withRouter } from 'react-router-dom'
import Menucomp from '../menu/menuComponent';

class Menu extends Component {
   

    render() {
        return (
                    <div className="col-sm-12 pl-0" id="menu">
                        <Menucomp/>
                    </div>
         
        )
    }
} 

const mapStateToProps = ({}) => {
    return {
    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default connect(
    mapStateToProps,
    {}
)(withRouter(Menu));


