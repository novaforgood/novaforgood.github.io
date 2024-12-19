import { navigate } from "gatsby";
import { useEffect } from "react";

export default () => {
  useEffect(() => {
    navigate("/");
  }, []);
  return null;
};
