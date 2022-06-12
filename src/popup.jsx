import React from "react";
import { render } from "react-dom";

const Popup = () => {
    return (
        <>
            <h1>My extension</h1>
            <h2>Thankyou for Downloading my extension</h2>
        </>
    )
}

render(<Popup />, document.getElementById('react-target'));