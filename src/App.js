import React, { Component } from 'react';
import { connect } from "react-redux";
// import  Layout from './components/layout'
import Login from './components/login';
import Menu from "./components/menu";
import NewMenu from "./components/newmenu";
import Tester from "./components/newmenu/tester";

import { addTabs } from "./components/tabs/actions";

import Layout from './components/layout'
import { Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Launcher from './launcher';

class App extends Component {
  componentDidMount() {

    this.props.addTabs([{ id: `1`, name: "Launcher" ,active:true,
        content:(<span>
               <Launcher
               color={this.props.color}
               />
Launcher</span>
        )
        },
        ]);
    // this.props.history.push("/menu/1");
  };
  render() {
    return (
      <div className="App">


        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={NewMenu} />
              <Route exact path="/test" component={Tester} />
              {/*<Route exact path="/scroll" component={ScrollToHOC} />*/}
              <Route exact path="/login/:id" component={Login} />
              <Route exact path="/users/:id" component={Login} />
              <Route exact path="/product/:id" component={Login} />
              <Route exact path="/launcher/:id" component={NewMenu} />
              <Route exact path="/selectdatabase/:id" component={Login} />
              <Route exact path="/createuser/:id" component={Login} />
              <Route exact path="/employeeaccess/:id" component={Login} />
              <Route exact path="/useractivity/:id" component={Login} />
              <Route exact path="/currentopenview/:id" component={Login} />
              <Route exact path="/maintaincomments/:id" component={Login} />
              <Route exact path="/maintainactivity/:id" component={Login} />
              <Route exact path="/activities/:id" component={Login} />
              <Route exact path="/maintainsetting/:id" component={Login} />
              <Route exact path="/weeklybuild/:id" component={Login} />
              <Route exact path="/openweeklybuild/:id" component={Login} />
              <Route exact path="/pendingreview/:id" component={Login} />
              <Route exact path="/builddetailsview/:id" component={Login} />
              <Route exact path="/batchprint/:id" component={Login} />
              <Route exact path="/individualprint/:id" component={Login} />
              <Route exact path="/emailprint/:id" component={Login} />
              <Route exact path="/reviewform/:id" component={Login} />
              <Route exact path="/timeregistration/:id" component={Login} />
              <Route exact path="/timeregistrationview/:id" component={Login} />
              <Route exact path="/managepatch/:id" component={Login} />
              <Route exact path="/recentapplication/:id" component={Login} />
              <Route exact path="/excelfile/:id" component={Login} />
              <Route exact path="/timeregistrationform/:id" component={Login} />
              <Route exact path="/timeregistrationformtwo/:id" component={Login} />
              <Route exact path="/builddetailsform/:id" component={Login} />
              <Route exact path="/patches/:id" component={Login} />
              <Route exact path="/errorlog/:id" component={Login} />
              <Route exact path="/let'schat/:id" component={Login} />
              <Route exact path="/cubes/:id" component={Login} />
              <Route exact path="/search/:id" component={Login} />
              <Route exact path="/customui/:id" component={Login} />
              <Route exact path="/address/:id" component={Login} />
              <Route exact path="/let'stalk/:id" component={Login} />
              <Route exact path="/uidesigner/:id" component={Login} />
              <Route exact path="/errorlog/:id" component={Login} />
              <Route exact path="/apitest/:id" component={Login} />
              <Route exact path="/terminal/:id" component={Login} />
            </Switch>

          </Layout>
        </BrowserRouter>


      </div>
    );
  }
}

const mapStateToProps = ({ tabs}) => {
  return {
      tabs:tabs.tabs,
      color:tabs.color

  };
};

export default connect(
  mapStateToProps,
  {addTabs }
)(withRouter(App));
