// import React, { Component } from "react";
// import ReactGoogleMapLoader from "react-google-maps-loader";
// import ReactGooglePlacesSuggest from "react-google-places-suggest";
// // import "dotenv/config";

// const MY_API_KEY = process.env.MY_API_KEY;

// export default class GoogleSuggest extends React.Component {
//   state = {
//     search: "",
//     value: "",
//   };

//   handleInputChange = (e) => {
//     this.setState({ search: e.target.value, value: e.target.value });
//   };

//   handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
//     console.log(geocodedPrediction, originalPrediction); // eslint-disable-line
//     this.setState({
//       search: "",
//       value: geocodedPrediction.formatted_address,
//     });
//   };

//   handleNoResult = () => {
//     console.log("No results for ", this.state.search);
//   };

//   handleStatusUpdate = (status) => {
//     console.log(status);
//   };

//   render() {
//     const { search, value } = this.state;
//     return (
//       <ReactGoogleMapLoader
//         params={{
//           key: MY_API_KEY,
//           libraries: "places,geocode",
//         }}
//         render={(googleMaps) =>
//           googleMaps && (
//             <ReactGooglePlacesSuggest
//               googleMaps={googleMaps}
//               autocompletionRequest={{
//                 input: search,
//                 // Optional options
//                 // https://developers.google.com/maps/documentation/javascript/reference?hl=fr#AutocompletionRequest
//               }}
//               // Optional props
//               onNoResult={this.handleNoResult}
//               onSelectSuggest={this.handleSelectSuggest}
//               onStatusUpdate={this.handleStatusUpdate}
//               textNoResults="My custom no results text" // null or "" if you want to disable the no results item
//               customRender={(prediction) => (
//                 <div className="customWrapper">
//                   {prediction
//                     ? prediction.description
//                     : "My custom no results text"}
//                 </div>
//               )}
//             >
//               <input
//                 type="text"
//                 value={value}
//                 placeholder="Search a location"
//                 onChange={this.handleInputChange}
//               />
//             </ReactGooglePlacesSuggest>
//           )
//         }
//       />
//     );
//   }
// }

import axios from "axios";
import React, { useState } from "react";

const Test = () => {
  const [file, setFile] = useState();
  const send = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);
    // console.log(data);
    axios
      .post("http://localhost:3001/user/upload", data)
      .then((res) => console.log(res).catch((err) => console.log(err)));
  };
  return (
    <div>
      <form>
        <div>
          <label>File</label>
          <input
            type="file"
            name="image"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
        </div>
        <button onClick={(e) => send(e)}>send</button>
      </form>
    </div>
  );
};

export default Test;
