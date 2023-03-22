import axios from "axios";
import React, { useState } from "react";
import logo from "../assets/images/icons8-taco-48.png";

const NavBar = () => {
  const inputField = document.getElementById("inputField");

  const [message, setMessage] = useState("");
  const [data, setData] = useState("");

  const getValue = (event) => {
    setMessage(event.target.value);
  };

  console.log(message);

  const fetchData = async (name) => {
    inputField.value = "";
    console.log(`Name is ${name}`);
    const data = await axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then((Response) => {
        return Response;
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(`Data is ${data}`);
    setData(data);
  };

  return (
    <>
      <nav className="bg-[#242B2E] text-[#fff] flex justify-between items-center p-3">
        <img className="ml-16" src={logo} alt="logo" title="logo" />
        <div className="bg-[#CAD5E2]  mr-16 rounded-3xl pl-3">
          <input
            id="inputField"
            className="outline-0 bg-[#CAD5E2] text-[#242B2E] "
            type={"text"}
            name="disName"
            placeholder="Enter your Dis name"
            onChange={getValue}
          />
          <button
            id="inputBtn"
            className="bg-[#2827CC] p-3 rounded-3xl hover:text-[#03203C] hover:font-semibold hover:bg-[#CAD5E2]"
            onClick={() => fetchData(message)}
          >
            Search
          </button>
        </div>
      </nav>

      <div className="h-[80vh] flex justify-center items-center mx-48">
        <div className="flex justify-center items-center bg-[#CAD5E2] rounded-md">
          {/* <img src={data.data?.meals[0].strMealThumb} alt="meal image" /> */}
          <video
            width="400"
            height="350"
            controls
            poster={data.data?.meals[0].strMealThumb}
            className="rounded-l-md"
          >
            <source src={data.data?.meals[0].strYoutube} type="video/mp4" />
          </video>
          <div className="ml-6 text-lg text-[#03203C]">
            <p className="mb-2">Name : {data.data?.meals[0].strMeal}</p>
            <p className="mb-2">Category : {data.data?.meals[0].strCategory}</p>
            <p className="mb-2">Area : {data.data?.meals[0].strArea}</p>
            <p className="mb-2">Instructions : {data.data?.meals[0].strInstructions}</p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
