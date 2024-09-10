import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const ProtectRoute: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    navigate("/")
  }, []);

  return props.children;
};

export default ProtectRoute;
