import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, admin } = useAuth();
  if (isLoading) {
    return (
      <>
        <div className="cspinner">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
