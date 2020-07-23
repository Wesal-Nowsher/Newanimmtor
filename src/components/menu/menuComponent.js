import React, { Component } from 'react';
import { addTabs } from '../tabs/actions'
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";

class menuComponent extends Component {
    addTabs(name,id) {
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
    render() {
        return (
            <div className="row tab-row">
                <div className="col-sm-9">
                    <div className="row">
                        <div className="col-sm-6 padd">
                            <div className="cards">
                                <h4>Planning</h4>
                                <div className="row">
                                    <div className="col-sm-6 card-inner">
                                        <div className="img-div">
                                            <img src={require('../../Assets/images/calendar(1).svg')} alt="" />
                                        </div>
                                        <button onClick={() => { this.addTabs("Open Weekly Build") }}>Weekly Build Plan</button>
                                    </div>
                                    <div className="col-sm-6 card-inner">
                                        <div className="img-div">
                                            <img src={require('../../Assets/images/email.svg')} alt="" />
                                        </div>
                                        <button onClick={() => { this.addTabs("Pending Review") }}>Pending Builds</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 padd">
                            <div className="cards">
                                <h4>Assignment/Data Input</h4>
                                <div className="row">
                                    <div className="col-sm-6 card-inner">
                                        <div className="img-div">
                                            <img src={require('../../Assets/images/diagnosis.svg')} alt="" />
                                        </div>
                                        <button >Record Completed Builds</button>
                                    </div>
                                    <div className="col-sm-6 card-inner">
                                        <div className="img-div">
                                            <img src={require('../../Assets/images/clock.svg')} alt="" />
                                        </div>
                                        <button onClick={() => { this.addTabs("Time Registration") }}>Other Activities Time Registration</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row padd-1 ">
                        <div className="col-sm-12 padd">
                            <div className="cards">
                                <h4>Follow Up</h4>
                                <div className="row">
                                    <div className="col-sm-3 card-inner">
                                        <div className="img-div">
                                            <img src={require('../../Assets/images/rank.svg')} alt="" />
                                        </div>
                                        <button>Open Ranking Excel</button>
                                    </div>
                                    <div className="col-sm-3 card-inner">
                                        <div className="img-div">
                                            <img src={require('../../Assets/images/review.svg')} alt="" />
                                        </div>
                                        <button onClick={() => { this.addTabs("Review Form") }}>Build Review</button>
                                    </div>
                                    <div className="col-sm-3 card-inner">
                                        <div className="img-div">
                                            <img src={require('../../Assets/images/bag.svg')} alt="" />
                                        </div>
                                        <button>Update Operation Time KPI</button>
                                    </div>
                                    <div className="col-sm-3 card-inner">
                                        <div className="two-btn">
                                            <button>Open Time Reg Data</button>
                                            <button onClick={() => { this.addTabs("Build Details View") }}>Open Build Data</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 padd">
                            <div className="cards">
                                <h4>Evaluation</h4>
                                <div className="row">
                                    <div className="col-sm-6 card-inner">
                                        <div className="img-div">
                                            <img src={require('../../Assets/images/analysis.svg')} alt="" />
                                        </div>
                                        <button>Weekly Build Plan</button>
                                    </div>
                                    <div className="col-sm-6 card-inner">
                                        <div className="img-div">
                                            <img src={require('../../Assets/images/two-way-communication.svg')} alt="" />
                                        </div>
                                        <button>Pending Builds</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 padd">
                            <div className="cards">
                                <h4>Feedback Actions</h4>
                                <div className="row comingsoon">
                                    <div className="col-sm-12 card-inner">
                                        <h5>Coming Soon ...</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 padd">
                    <div className="right-side">
                        <div className="cards p-0 pt-3">
                            <div className="graphs">
                                <div className="img-div">
                                    <img src={require('../../Assets/images/graph1.PNG')} alt="" />
                                    {/* <CardBody>
                                                                <div className="chart-wrapper">
                                                                    <Line data={line} options={options} />
                                                                </div>
                                                            </CardBody> */}
                                </div>
                                <div className="img-div img-ext">
                                    <img src={require('../../Assets/images/graph2.PNG')} alt="" />
                                    {/* <CardBody>
                                                                <div className="chart-wrapper">
                                                                    <Polar data={polar} options={options} />
                                                                </div>
                                                            </CardBody> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
const mapStateToProps = ({ openweekly,
    tabs
}) => {
    return {
        tabs: tabs.tabs
    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default withRouter(connect(
    mapStateToProps,
    { addTabs }
)(menuComponent));