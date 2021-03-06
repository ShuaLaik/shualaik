import React from "react";
import { withRouter } from "react-router-dom";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";


const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Component {...props} /> : <Redirect to="/home" />
        }
    />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);

const Protect = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : null
        }
    />
);

const mSTP = state => {
    return { loggedIn: Boolean(state.sessions.id) };
};

export const ProtectedRoute = withRouter(
    connect(
        mSTP,
        null
    )(Protect)
);