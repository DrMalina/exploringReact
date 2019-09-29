import { useState, useEffect } from "react";

export default () => {
  const [lat, setLat] = useState(null);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      postion => setLat(postion.coords.latitude),
      err => setErrMsg(err.message)
    );
  }, []);

  return [lat, errMsg];
};
