import react from "react";

function list(props){


    return (
        <div onClick={() => {
            props.onChecked(props.id);
        }}>
            <li>{props.text}</li>
        </div>
    )
}

export default list;