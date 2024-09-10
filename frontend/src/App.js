import { createRef } from "react";
import "./App.css";

function App() {
  const fileInput = createRef();
  const onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("avatar", fileInput.current.files[0]);

    try {
      const response = await fetch("./profile", { method: "POST", body: formData });
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const data = await response.json();
      alert("File Uploaded");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
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
