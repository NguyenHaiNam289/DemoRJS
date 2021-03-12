import "./App.css";
import React, { useState } from "react";


function App() {
  const [count, setCount] = useState(-1);
  const [image, setImage] = useState("");
  var tym = [];
  var cnt = 0;
  const ClickPev = () => {
    if (count - 1 < 0) alert("LỖI : ID KHÔNG HỢP LỆ");
    else{
    document.getElementById('heart').style.color = "white";
    document.getElementById("nhi").value = "";
    let url = `https://picsum.photos/id/${count - 1}/800/600`;
    console.log(url);
    setCount(count - 1);
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        let krl = URL.createObjectURL(blob);
        setImage(krl);
      });
    } 
  };
  const ClickNext = () => {
    if (count + 1 > 1084) alert("LỖI : ID KHÔNG HỢP LỆ");
    else{
    document.getElementById('heart').style.color = "white";
    document.getElementById("nhi").value = "";
    let url = `https://picsum.photos/id/${count + 1}/800/600`;
    document.getElementById("nhi").value = ""
    console.log(url);
    setCount(count + 1);
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        let krl = URL.createObjectURL(blob);
        setImage(krl);
      });
    }
  };
  const NumberPost = () => {
    let id = parseInt(document.getElementById("nhi").value);
    console.log(id);
    if (id < 0) alert("LỖI : ID KHÔNG HỢP LỆ");
    else{
      document.getElementById('heart').style.color = "white";
      document.getElementById("nhi").value = "";
      let url = `https://picsum.photos/id/${id}/800/600`;
      setCount(id);
      fetch(url)
        .then((res) => res.blob())
        .then((blob) => {
          let krl = URL.createObjectURL(blob);
          setImage(krl);
      });
    }
  };

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      document.getElementById('btn').click()
    }
  }

  function chageHeart(){
    if(document.getElementById('heart').style.color == "white"){
      document.getElementById('heart').style.color = "red"
      tym.push(count);
    }
    else{
        document.getElementById('heart').style.color = "white";
        for(let i = 0; i <= tym.length; i++){
          if(count == tym[i]){
            tym.splice(i,1);
          }
        }
    }
  }
  return (
    
  <div class="content">
    <div class="header">
      <div class="header_left">
          <p>From Front-End Team </p>
      </div>
      <div class="header_right">
          <ul>
              <li><button id="heart" onClick ={chageHeart}>&#10084;</button></li>
              <li><button type="button">Get Image</button></li>
              <li>
                <input type = "text" id ="nhi" onKeyDown={handleKeyDown} placeholder={count} />
                <button type = "button" id ="btn" onClick = {NumberPost}>ID</button> 
              </li>
          </ul>
      </div>
    </div>
    <div class="footer">  
        <button id="next_button" type="button" onClick={ClickPev} >&#60;&#60;</button>
        <button id="Pre_button" type="button"  onClick={ClickNext} >&#62;&#62;</button>
    </div>
    <img id="img" src={image}></img>  
  </div>
  
  );
}

export default App;
