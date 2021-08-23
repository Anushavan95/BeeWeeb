import React, { useState, Fragment } from "react";
import { facebookProvider, googleProvider } from "../config/authMethods";
import { Route, useHistory, withRouter } from "react-router-dom";
import socialAuth from "../service/auth";
import FacebookIcon from "@material-ui/icons/Facebook";
import Gmail from "../icons/gmail.png";
import Dashboard from "../Components/Dashboard";
import Loader from "react-js-loader";

function Auth() {
  let history = useHistory();
  const [login, setLogin] = useState(false);
  const [load, setLoader] = useState(false);
  const handleclick = (provider) => {
    if (localStorage !== null || !login) {
      setLoader(true);
      socialAuth(provider)
        .then((res) => {
          localStorage.setItem("data", JSON.stringify(res));
          setLoader(false);
          history.push("/dasboard");
          setLogin(true);
        })
        .catch((err) => {
          setLoader(false);
          console.error(err);
        });
    } else {
      localStorage.clear("data");
    }
  };

  return (
    <div>
      <section className="login-card">
        {login ? (
          <Route path={"/dasboard"} render={() => <Dashboard />} />
        ) : (
          <Fragment>
            <Route
              exact
              path={"/"}
              render={() => (
                <button
                  onClick={({}) => {
                    handleclick(googleProvider);
                  }}
                >
                  <img src={Gmail} alt="Gmail" className="gmail" />
                </button>
              )}
            />
            <button onClick={() => handleclick(facebookProvider)}>
              <FacebookIcon />
            </button>
          </Fragment>
        )}
        {load ? (
          <div className="d-flex justify-content-center align-items-center flex-row position-fixed parent-loader">
            <Loader
              type="box-rectangular"
              bgColor={"#FFFFFF"}
              title={"Loading ..."}
              size={100}
            />
          </div>
        ) : null}
      </section>
    </div>
  );
}
export default withRouter(Auth);
