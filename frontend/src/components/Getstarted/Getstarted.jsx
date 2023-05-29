import './getstarted.css';
import React, { useState } from 'react';

async function getApi(inputValue,url) {

    await fetch(url + "predict/" + inputValue).then((res) =>
        res.json().then((modelOutput) => {
            // Setting a data from api
            var refurl = ("http://127.0.0.1:5173/dashboard/" +
            modelOutput.prediction.condition_0 + "/"+
            modelOutput.prediction.confidence_0 +"/"+
            modelOutput.prediction.condition_1 + "/"+
            modelOutput.prediction.confidence_1 +"/"+
            modelOutput.prediction.condition_2 + "/"+
            modelOutput.prediction.confidence_2 + "/" +
            document.getElementById("state").value + "/" + 
            document.getElementById("city").value);

            window.location.href = refurl;
            //console.log(modelOutput);
        })
    );
}





export default function Getstarted() {
    const [loading, setLoading] = useState(false);
    const t = () => {
        if (document.getElementById("sentence").value != "" && document.getElementById("state").value !="" && document.getElementById("city").value !=""){
            setLoading(true);
            console.log("started making pred");
            const url = "http://127.0.0.1:5000/";

            var sent = document.getElementById("sentence").value;
            sent = sent.replaceAll(" ","-");
            const handle = getApi(sent,url);
            
        }
    }

    

    return (
        <div className="bg">
            <div class="container-getstarted">
                <div className="hero-typer">
                    <p>Get Started</p>
                </div>
                
                <div className="getStartedCard">
                    <form action="" id="join-us">
                        <div class="fields">
                        <span>
                        <input placeholder="How are you feeling?" type="text" id="sentence"/>
                        </span>
                        <br />
                        <span>
                        <input placeholder="Abbreviation of state?" type="text" id="state"/>
                        </span>
                        <br />
                        <span>
                        <input placeholder="What town are you in?" type="text" id="city"/>
                        </span>
                        </div>
                        <div class="submit">
                        <button class="submit" type="button" onClick={t}><b>Submit</b></button>
                        </div>
                        {loading && <div class="lds-facebook"><div></div><div></div><div></div></div>}
                    </form>
                </div>
            </div>
        </div>
    );
}