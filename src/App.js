import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import React from "react";

function App() {
  const [contentList, setContentList] = useState([]);


  useEffect(() => {
    Axios.get(`http://localhost:8080/api/content`).then((response) => {
      setContentList(response.data);
    });
  }, []);
  

  return (
    <div className="App">
      <div>

        {contentList.map((val, key) => {
          return (
            <div className="movies" key={key}>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
                <p>{val.status}</p>
                <p>{val.contentType}</p>
                <p>{val.dateCreated}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

