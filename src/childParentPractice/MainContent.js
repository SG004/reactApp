import React from "react";

function MainContent() {
  const firstName = "potato";
  const lastName = "jones";
  const date = new Date();

  const styles = {
    color: "#FF8C00",
    backgroundColor: "#FF2D00",
    fontSize: "200px"
  };
  return (
    <main>
      <h1>Learn React {`${firstName} ${lastName}`}</h1>
      <p style={styles}>It is currently about {date.getHours() % 12} o'clock</p>
    </main>
  );
}

export default MainContent;
