import React from "react";
import Card from "./Card";
function App() {
  return (
    <div>
      <Card
        name="Beyonce"
        phone="+123 456 789"
        email="b@beyonce.com"
        imgsrc="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      />
      <Card
        name="Jack Bauer"
        phone="+987 654 321"
        email="jack@nowhere.com"
        imgsrc="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      />
      <Card
        name="Chuck Norris"
        phone="+918 372 574"
        email="gmail@chucknorris.com"
        imgsrc="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      />
    </div>
  );
}

export default App;
