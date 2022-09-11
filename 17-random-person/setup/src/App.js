import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState("random person");
  const [title, setTitle] = useState("name");

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { first, last } = person.name;
    const { phone, email } = person;
    const { large: image } = person.picture;
    const {
      login: { password },
    } = person;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;

    const newPerson = {
      email,
      phone,
      image,
      age,
      password,
      name: `${first} ${last}`,
      street: `${number} ${name}`,
    };
    setPerson(newPerson);
    setLoading(false);
    setTitle("name");
    setValue(newPerson.name);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setValue(person[newValue]);
      setTitle(newValue);
    }
  };
  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              {<FaUser />}
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              {<FaEnvelopeOpen />}
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              {<FaCalendarTimes />}
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              {<FaMap />}
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              {<FaPhone />}
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              {<FaLock />}
            </button>
          </div>
          <button className="btn" type="btn" onClick={fetchData}>
            {loading ? "Loading..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;

// Access to fetch at 'https://randomuser.me/api/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
