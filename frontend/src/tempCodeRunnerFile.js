import { createRef } from "react";
import "./App.css";

function App() {
  const fileInput = createRef();
  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("avatar", fileInput.current.files[0]);

    try {
      const response = await fetch("./profile", {
        method: "POST",
        body: formData,
      });
      const parsedResponse = await response.json();
      if (response.ok) {
        alert("file is uploaded");
      } else {
        console.error("Some error occured");
      }
    } catch (e) {
      console.error(e.message + "this is from here");
    }
  };
  return (
    <div className="App">
      <form onSubmit={onsubmit}>
        <input type="file" name="avatar" ref={fileInput}></input>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
