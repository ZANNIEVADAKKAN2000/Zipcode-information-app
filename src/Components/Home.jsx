import React, { useState } from "react";
import style from "./home.module.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  let [postcode, setPostCode] = useState();
  let changeCode = (e) => {
    setPostCode(e.target.value);
  };
  let handler = () => {
    navigate(`/out/${postcode}`);
  };
  return (
    <div className={style.home}>
      <h1>Zip Code Information App</h1>
      <div>
        <label>Enter Postal Code</label>
        <input type="text" value={postcode} onChange={changeCode} />
        <button onClick={handler}>SUBMIT</button>
      </div>
      <p className={style.india}>Postal code of INDIA doesn't support this app</p>
    </div>
  );
};
export default Home;
