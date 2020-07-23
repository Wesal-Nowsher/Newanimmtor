import React, {Component} from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import {addTabs} from '../tabs/actions';

class Login extends Component {
    state = {
        email: "",
        password: "",
        Remember:false
    };
    addtabs=()=>{

    }
    login = () => {
        let {email, password} = this.state;
        if (email === "") {
            return ;
        }
        if (password === "") {
            return ;
        }
        let user = {
            email: email,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(user));
        let {tabs}=this.props;
        let Tabs=[];
        let isThere=true;
        tabs.map((item)=>{
            if(item.name ==="/selectdatabase"){
                isThere=false
            }
        });
        if(isThere){
            Tabs.push(...tabs,{id:`${tabs.length+1}`,name:"selectdatabase"})
        }
        else{
            Tabs.push(...tabs);
        }
        this.props.addTabs(Tabs);
        this.props.history.push("/selectdatabase");
    }

    render(){
        return(
            <div className="container" id="login">

            </div>
        )
    }
}
const mapStateToProps = ({login,tabs }) => {
    return {
        tabs:tabs.tabs,
        login:login.login
    };
};

const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
// export default withRouter(connect(
//     mapStateToProps,
//     {}
// )(Login));


export default connect(
    mapStateToProps,
    {addTabs}
)(Login);