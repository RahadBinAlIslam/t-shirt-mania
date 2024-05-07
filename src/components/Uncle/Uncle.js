import React, { useContext } from "react";
import { MoneyContext } from "../GrandPa/GrandPa";

const Uncle = ({ house }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>
        <small>House: {house}</small>
      </p>
      <p>
        <small>Money: {money}</small>
      </p>
      <button onClick={() => setMoney(money + 1000)}>Increase</button>
    </div>
  );
};

export default Uncle;
