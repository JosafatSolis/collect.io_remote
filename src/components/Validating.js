import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Validating = () => {
    const history = useHistory();
    useEffect(() => {
        history.push("/AB/filling");
    }, [history]);

    return (
        <div>
            <h1>Validating</h1>
        </div>
    )

};

export default Validating;