import React from "react";
import startFirebase from "../firebaseConfig/index.js";
import { ref, set, get, update, remove, child } from "firebase/database";

class Crud extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            db:'',
            condition:'',
            symptoms:[],
            steps:[]
        }
    }

    componentDidMount(){
        this.setState({
            db:startFirebase()
        });
    }

    render() {
        return(
            <div>
                
            </div>
        );
    }
}
