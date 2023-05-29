import "./dashheader.css";

export default function DashHeader(props){
    return (
        <div class="dashhead">
            <p>{props.cond}</p>
        </div>
    );
}