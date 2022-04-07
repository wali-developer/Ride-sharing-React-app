import React from "react";
import axios from "axios";

const FilleUploadTest = () => {
  const [image, setImage] = React.useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await axios.post(
      "http://localhost:3001/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    alert(data);
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
      </div>
    </>
  );
};

export default FilleUploadTest;
