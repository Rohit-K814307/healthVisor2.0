import './dashboard.css';
import { useParams } from 'react-router-dom';

import { React, useState, useEffect } from 'react';
import { DashHeader } from "./sections";
import { Description } from "./sections";



function Dashboard() {
    const [loading, setLoading] = useState(false);

    const [doctLoaded, setDoctLoaded] = useState(false);
    const [doct, setDoct] = useState({});
    async function getDoctors(state, city, url) {
        
        var doctorFound = {vals:[]};
        await fetch(url + "/find-doctor/" + city + "/" + state).then((res) =>
            res.json().then((doctorFind) => {
                // Setting a data from api
                doctorFound.vals = doctorFind.response;
                console.log(doctorFound)
            })
        );
        setDoct(doctorFound);
        setDoctLoaded(true);
    }
    
    
    const handle = useParams();
    const [condition, setCondition] = useState(handle.condition1);
    const [confidence, setConfidence] = useState(handle.confidence1);

    const url = "http://127.0.0.1:5000";

    const [ loaded, setLoaded ] = useState(false);
    const [ dict, setDict ] = useState({});
    async function getInfo(condition,url) {
        var condits = {steps:{}, desc:{}, gpt:{}};
        await fetch(url + "/condition-steps/" + condition).then((res) =>
            res.json().then((conditionSteps) => {
                // Setting a data from api
                condits.steps = conditionSteps;
                
            })
        );
    
        await fetch(url + "/description-data/" + condition).then((res) =>
            res.json().then((descs) => {
                // Setting a data from api
                condits.desc = descs;
            })
        );

        await fetch(url + "/gptres/" + condition).then((res) =>
            res.json().then((message) => {
                // Setting a data from api
                condits.gpt = message;
                
            })
        );
        console.log(condits);
        setDict(condits);
        setLoaded(true);
    }
    useEffect(() => {

        getDoctors(handle.state,handle.city,url);
    }, []);
    useEffect(() => {
        getInfo(condition,url);
        getDoctors(handle.state,handle.city,url);
    }, [condition]);

    


    return (
        <div class="dash">

            <div class="sidebar">
                <p>Predicted Conditions</p>
                <button class="but" onClick={() => {
                    setCondition(handle.condition1);
                    setConfidence(handle.confidence1);
                    
                }}>{handle.condition1}</button>
                <button class="but" onClick={() => {
                    setCondition(handle.condition2);
                    setConfidence(handle.confidence2);
                    
                }} >{handle.condition2}</button>
                <button class="but" onClick={() => {
                    setCondition(handle.condition3);
                    setConfidence(handle.confidence3);

                }} >{handle.condition3}</button>

            </div>

            <div className="dashcontent">
                <div className="load-cont">
                    {loading && <div class="lds-facebook"><div></div><div></div><div></div></div>}
                </div>
                <DashHeader className="dashcont" cond={condition} />
                <div className="confidence subheading">
                    Percentage Chance of occurring: {confidence}%
                </div>
                <div className="description">
                    {loaded && dict.desc.description}
                </div>

                <div className="steps">
                    <div className="dashhead"><p>Steps</p></div>
                    <div className="confidence subheading">
                        Remedying steps
                    </div>
                    <div className="dispSteps">
                        {loaded && dict.steps.steps.map((value, index) =>{
                            return (<p>{index+1}. {value}</p>);
                        })
                        }
                    </div>
                </div>

                <div className="doctors">
                    <div className="dashhead"><p>Doctors</p></div>
                    <div className="confidence subheading">
                        Doctors Recommended to Treat You
                    </div>
                    <div className="dispSteps">
                        {doctLoaded && doct.vals.map((value) =>{
                            return (
                                <div>
                                    <p className="subheadingtwo">{value.name}</p>
                                    <p>{value.roadAdress}: located in your city of {value.city}</p>
                                </div>
                            );
                        })
                        }
                    </div>
                </div>
                
                <div className="description gpt">
                    <div className="dashhead"><p>GPT Recommendation</p></div>
                    <div className="confidence subheading">
                        What does GPT4 say you should do?
                    </div>
                    {loaded && dict.gpt.response}
                </div>
                

            </div>

        </div>
    );
}

export default Dashboard;