import React,{Component} from "react";
import { addTabs } from '../tabs/actions'
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import Imgcondition from './imgcondition';
import Tabsimg from './tabsimg'
import Box1 from './vari1'
import Box2 from './vari2'
import Box3 from './vari3'





class NewMenu extends Component{
    constructor(props) {
        super(props);
        this.addTabs = this.addTabs.bind(this);
        this.swapBoxes = this.swapBoxes.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.state={
            iconsize:1,
            boxes:[
                {
                    id:1,
                    name:"Let's chat",
                    imgname:"letschat",
                    fparam:"Let's chat"
                },
                {
                    id:2,
                    name:"Cubes",
                    imgname:"cubes",
                    fparam:"Cubes"
                },
                {
                    id:3,
                    name:"Search",
                    imgname:"search",
                    fparam:"Search"
                },
                {
                    id:4,
                    name:"Custom UI #2",
                    imgname:"customui",
                    fparam:"Custom UI"
                },
                {
                    id:5,
                    name:"Address",
                    imgname:"address",
                    fparam:"Address"
                },
                {
                    id:6,
                    name:"UI Designer",
                    imgname:"uidesigner",
                    fparam:"UI Designer"
                },
                {
                    id:7,
                    name:"Custom UI #1",
                    imgname:"customui",
                    fparam:"Custom UI"
                },
                {
                    id:8,
                    name:"Custom UI #3",
                    imgname:"customui",
                    fparam:"Custom UI"
                },
                {
                    id:9,
                    name:"Let's talk",
                    imgname:"letstalk",
                    fparam:"Let's talk"
                },
                {
                    id:10,
                    name:"API Test",
                    imgname:"apitest",
                    fparam:"API Test"
                },{
                    id:11,
                    name:"Terminal",
                    imgname:"terminal",
                    fparam:"Terminal"
                }]
        }
    }

    addTabs(name) {
        let {tabs}=this.props;
        let tab=tabs ;
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
        Tabs.push(...tab,{id:`${parseInt(tab[tab.length-1].id)+1}`,name:name,active:true,

            content:(<span>
                    <Tabsimg
                        color={this.props.color}
                        imgname={name.toLowerCase().replace(/\s/g, "").replace("'","")}
                    />
                 {name}</span>
        )})
        this.props.addTabs(Tabs);
        this.props.history.push(`/${name.toLowerCase().replace(/\s/g, "")}/${parseInt(tab[tab.length-1].id)+1}`);
        //NON REPEATABLE

    }
    swapBoxes = (fromBox, toBox) => {
        let boxes = this.state.boxes.slice();
        let fromIndex = -1;
        let toIndex = -1;

        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].id === fromBox.id) {
                fromIndex = i;
            }
            if (boxes[i].id === toBox.id) {
                toIndex = i;
            }
        }

        if (fromIndex != -1 && toIndex != -1) {
            let { fromId, ...fromRest } = boxes[fromIndex];
            let { toId, ...toRest } = boxes[toIndex];
            boxes[fromIndex] = { id: fromBox.id, ...toRest };
            boxes[toIndex] = { id: toBox.id, ...fromRest };

            this.setState({ boxes: boxes });
        }
    };

    /* The dragstart event is fired when the user starts dragging an element or text selection */
    /* event.target is the source element : that is dragged */
    /* Firefox requires calling dataTransfer.setData for the drag to properly work */
    handleDragStart = data => event => {
        console.log("more ")
        let fromBox = JSON.stringify({ id: data.id });
        event.dataTransfer.setData("dragContent", fromBox);
    };

    /* The dragover event is fired when an element or text selection is being dragged */
    /* over a valid drop target (every few hundred milliseconds) */
    /* The event is fired on the drop target(s) */
    handleDragOver = data => event => {
        console.log("more ali")
        event.stopPropagation();
        event.preventDefault(); // Necessary. Allows us to drop.
        return false;
    };

    /* Fired when an element or text selection is dropped on a valid drop target */
    /* The event is fired on the drop target(s) */
    handleDrop = data => event =>
    {
        console.log("more ont this")
        event.preventDefault();

        let fromBox = JSON.parse(event.dataTransfer.getData("dragContent"));
        let toBox = { id: data.id };

        this.swapBoxes(fromBox, toBox);
        return false;
    };

    makeBoxes = () => {
        return this.state.boxes.map(box => (
           <> {
                this.props.variation===1 &&
            <Box1
                box={box}
                key={box.id}
                draggable="true"
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDrop={this.handleDrop}
                addTabs={this.addTabs}
                iconsize={this.props.iconsize}
                color={this.props.color}
                fontsize={this.props.fontsize}
                backactive={this.props.backactive}
                variation={this.props.variation}

            />
            }{
                this.props.variation===2 &&
            <Box2
                box={box}
                key={box.id}
                draggable="true"
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDrop={this.handleDrop}
                addTabs={this.addTabs}
                iconsize={this.props.iconsize}
                color={this.props.color}
                fontsize={this.props.fontsize}
                backactive={this.props.backactive}
                variation={this.props.variation}

            />
            }{
                this.props.variation===3 &&
            <Box3
                box={box}
                key={box.id}
                draggable="true"
                onDragStart={this.handleDragStart}
                onDragOver={this.handleDragOver}
                onDrop={this.handleDrop}
                addTabs={this.addTabs}
                iconsize={this.props.iconsize}
                color={this.props.color}
                fontsize={this.props.fontsize}
                backactive={this.props.backactive}
                variation={this.props.variation}

            />
            }
            </>

        ));
    };


    render(){
        return(
            <div className="col-sm-12 pl-0" id="menu">
            <div className="row tab-row" style={{padding:"0 14px 0 0", marginLeft:"0"}}>
            <div className="col-sm-12">

                <div className="row padd-1 ">
                    <div className="col-sm-12 padd">
                        <div className={`cards ${this.props.backactive}`}>
                            <div className={this.props.variation===3 || this.props.variation===2 ? "row justify-content-center bomb":"row"}>
                                {
                                    this.makeBoxes()
                                }

                                {/*{*/}
                                    {/*this.state.grid.map((item)=>{*/}
                                        {/*return(*/}
                                            {/*<div className="col-sm-3 card-inner">*/}
                                                {/*<div className="img-div text-center">*/}

                                                    {/*<img src={require(`../../Assets/newmenu/${item.imgname}.png`)}*/}
                                                         {/*onClick={() => { this.addTabs(item.fparam) }}*/}
                                                         {/*className="cursor-pointer"*/}
                                                         {/*alt="" />*/}
                                                    {/*/!*<i className="fa fa-cube cursor-pointer"*!/*/}
                                                    {/*/!*onClick={()=>{this.addTabs("API Test")}}*!/*/}
                                                    {/*/!*style={{fontSize:"100px"}}></i>*!/*/}
                                                {/*</div>*/}
                                                {/*<h4 className="text-center cursor-pointer"*/}
                                                    {/*onClick={() => { this.addTabs(item.fparam) }}*/}
                                                {/*>{item.name}</h4>*/}
                                            {/*</div>*/}
                                        {/*)*/}
                                    {/*})*/}
                                {/*}*/}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = ({ tabs}) => {
    return {
        tabs:tabs.tabs,
        iconsize:tabs.iconsize,
        color:tabs.color,
        fontsize:tabs.fontsize,
        backactive:tabs.backactive,
        variation:tabs.variation
    };
};
const mapDispachToProps = dispatch => {
    return {
        dispatch: dispatch
    };
};
export default connect(
    mapStateToProps,
    {addTabs}
)(withRouter(NewMenu));

