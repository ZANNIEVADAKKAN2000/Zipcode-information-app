import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import style from "./outcome.module.css";

const Outcome = () => {
  let navigate = useNavigate();
  let { postcode } = useParams();
  let countryCode = "";
  let [info, setInfo] = useState([]);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `http://postalcode.parseapi.com/api/9b05ca06e0f2a29d1856282007019a14/${postcode}`
      )
      .then((res) => {
        console.log(res.data);
        countryCode = res.data.country.alpha2;
        console.log(countryCode);
        axios
          .get(`https://api.zippopotam.us/${countryCode}/${postcode}`)
          .then((res) => {
            setLoading(false);
            setInfo(res.data);
            console.log(res.data);
          });
      })
      .catch((error) => {
        setError('Invalid Postal Code');
      });
  }, []);
  return (
    <div className={style.outcome}>
      <button onClick={() => navigate("/")}>
        <i class="fa-solid fa-left-long"></i>
        <p>Home</p>
      </button>
      {error && <div className={style.error}>Error: {error}</div>}
      {loading ? (!error&&(
        <Puff
          type="Puff"
          className={style.load}
          color="#00BFFF"
          height={100}
          width={100}
        />
      )
      
      ) : (
        <div className={style.data}>
          <p>
            <span>
            Country :</span>
            {info.country}{" "}
          </p>
          <p>
            <span>State :</span>
            {info.places[0].state}
          </p>
          <p>
            <span>Places :</span>
            {info.places.map((x) => x["place name"])}
          </p>
        </div>
      )}
    </div>
  );
};

export default Outcome;
