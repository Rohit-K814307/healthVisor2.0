import "./faq.css";
import Faq from "react-faq-component";

const data = {
    title: "",
    rows: [
        {
            title: "How is my data handled?",
            content: "We do not collect any user data, and instead just display our analysis, so your data is completely private!",
        },
        {
            title: "How does the AI work?",
            content:"We use a combination of custom AI and GPT-4 to deliver the best-in-class results.",
        },
        {
            title: "Why HealthVisor?",
            content: "HealthVisor is the only product in its category that prevents further complications, protects users, and connects them with medical professionals.",
        },
        {
            title: "Who made HealthVisor?",
            content: "Rohit Kulkarni is the developer of HealthVisor.",
        },
        {
            title: "I have more questions",
            content: "Please feel free to contact kulkarni.rohitva@gmail.com if you have any questions.",
        },
    ],
};

const styles = {
    bgColor: 'linear-gradient(white,#9cbcdf)',
    titleTextColor: "blue",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    arrowColor: "#9cbcdf",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

export default function FAQ(){
    
    return (
        <div className="FAQs">
            <h2 className="title">FAQs</h2>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}