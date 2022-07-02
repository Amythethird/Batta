import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedElementProps {
  isAuthenticated: boolean;
  redirectPath: string;
  // eslint-disable-next-line no-undef
  protectedElement: JSX.Element;
}

function ProtectedElement({
  isAuthenticated,
  redirectPath = "/login",
  protectedElement,
}: ProtectedElementProps) {
  if (isAuthenticated) {
    return protectedElement;
  } else {
    return <Navigate to={redirectPath} replace={true} />;
  }
}

export default ProtectedElement;
