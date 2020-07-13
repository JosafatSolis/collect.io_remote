import React, { useEffect, useContext } from "react";
import AppContext from "../AppContext";
import { useHistory } from "react-router-dom";
import { getFormat } from "../services/apiServices";

const Validating = (props) => {
  // Gets the code trying to access
  const { code } = props.match.params;
  const history = useHistory();

  const { setAppState } = useContext(AppContext);
  useEffect(() => {
    // Look if the code exists
    getFormat(code)
      .then((found) => {
        setAppState({...found.data, currentCode: code});
        history.push(`/${code}/filling`);
      })
      .catch((reason) => {
        console.log("Error: ", reason);
        setAppState({});
        history.push(`/not_found`);
      });
  }, [history]);

  return (
    <div>
      <h1>Looking for the CODE...</h1>
    </div>
  );
};

export default Validating;
