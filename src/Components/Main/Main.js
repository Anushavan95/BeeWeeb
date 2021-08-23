import React from "react";
import { useSelector } from "react-redux";
import { selectMenu } from "../../redux/dashbordSlice";
import ListAccount from "./ListAccount";
import Sortable from "./Sortable";

export default function Main() {
  const selectMenuButton = useSelector(selectMenu);
  let data = localStorage.getItem("data");
  const myData = JSON.parse(data);
  return (
    <main className="main-section">
      <section className={`appMenu ${selectMenuButton ? "openMenu " : ""} `}>
        <div className="avatar-block">
          <img src={myData.photoURL} alt="Photo-url" className="avatar" />
        </div>
        <ListAccount />
      </section>
      <Sortable />
    </main>
  );
}
