import React from "react";
import axios from "axios";
import API from "../../API";

const FilleUploadTest = () => {
  const [image, setImage] = React.useState();
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await API.post(
      `upload/ ${user._id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert(data);
  };

  const takeImage = async (e) => {
    e.preventDefault();
    try {
      const res = await API.get(
        `uploads/${user._id}.jpg`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <label htmlFor="image">Please select your profile image</label>
        <input
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div>
        <input type="submit" onClick={(e) => handleSubmit(e)} />
        <input type="submit" value="take image" onClick={(e) => takeImage(e)} />
      </div>
    </>
  );
};

export default FilleUploadTest;
