import { useEffect, useState } from "react";

export default function Quote() {
  const [quote, setquote] = useState("");

  async function fetchquote() {
    try {
      const res = await fetch("https://api.quotable.io/quotes/random", {
        method: "GET",
      });
      const data = await res.json();
      console.log(data);

      if (data && data.length >0) {
        setquote(data[0]);
      }
     
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchquote();
  }, []);
  function handleclick() {
    fetchquote();
  }
  

  return (
    <div
      class="card border-light mb-3"
      style={{ maxwidth: "18rem" }}
      
    >
      <div class="card-header" style={{ fontSize: "30px" }}>
        Random Quote Generator
      </div>
      <div class="card-body">
        <h5 class="card-title">{quote?.author}</h5>
        <p class="card-text">{quote?.content}</p>
        <button type="button" class="btn btn-info" onClick={handleclick}>
          Refresh
        </button>
      </div>
    </div>
  );
}
