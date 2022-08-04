import React from "react";

function Dashboard({user}) {
  return (
    <section className="section">
      <h4>welcome, { user?.name }</h4>
    </section>
  );
}

export default Dashboard;
