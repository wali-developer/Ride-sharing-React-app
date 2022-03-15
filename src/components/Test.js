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

// import axios from "axios";
// import React, { useState } from "react";

// const Test = () => {
//   const [file, setFile] = useState();
//   const send = (e) => {
//     e.preventDefault();

//     const data = new FormData();
//     data.append("file", file);
//     // console.log(data);
//     axios
//       .post("http://localhost:3001/user/upload", data)
//       .then((res) => console.log(res).catch((err) => console.log(err)));
//   };
//   return (
//     <div>
//       <form>
//         <div>
//           <label>File</label>
//           <input
//             type="file"
//             name="image"
//             onChange={(event) => {
//               setFile(event.target.files[0]);
//             }}
//           />
//         </div>
//         <button onClick={(e) => send(e)}>send</button>
//       </form>
//     </div>
//   );
// };

// export default Test;

import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [text, setText] = useState("");
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");

  const handleSend = async (e) => {
    e.preventDefault(e);

    try {
      const { data } = await axios.post(
        "http://localhost:3001/user/send-mail",
        { text, sender, receiver } //subject is missing
      );
      alert(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Test Email</h1>

      <form onSubmit={(e) => handleSend(e)}>
        <input
          type="text"
          placeholder="Email text..."
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <br />
        <input
          type="email"
          name="sender"
          placeholder="Sender email address..."
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <br />
        <input
          type="email"
          name="receiver"
          placeholder="Receiver email address..."
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default Test;
