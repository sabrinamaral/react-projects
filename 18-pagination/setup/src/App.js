import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState();
  const [followers, setFollowers] = useState([]);
  return (
    <main className="section-title">
      <h1>{loading ? "Loading..." : "pagination"}</h1>
      <div className="underline"></div>
      <section className="followers">
        <div className="container">
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
