import "./App.css";
import React, { useEffect } from "react";
import axios from "axios";

function App() {
  const callSomething = async () => {
    let data = {
      day: "일",
      sleep_time: "10:00",
    };
    const response = await fetch("http://localhost:5001/sleep_times", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(data),
    });

    console.log(response);
  };

  const callSomethingAxios = () => {
    // axios({
    //   method: "get",
    //   url: "http://localhost:5001/sleep_times",
    // }).then((response) => {
    //   console.log(response);
    // });

    // axios.get("http://localhost:5001/sleep_times").then((response) => {
    //   console.log(response);
    // });
    let data = {
      day: "일",
      sleep_time: "10:00",
    };
    axios.post("http://localhost:5001/sleep_times", data).then((response) => {
      console.log(response);
    });
  };

  React.useEffect(() => {
    // callSomething();
    callSomethingAxios();
  });
  return <div className="App"></div>;
}

export default App;
