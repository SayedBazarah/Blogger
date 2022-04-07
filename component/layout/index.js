import { Main } from "next/document";
import { Fragment } from "react";

//Components
import MainHeader from "../header/header";
import MainFooter from "../footer/footer";

export default function Layout(props) {
  return (
    <main>
      <MainHeader />
      {props.children}
      <p>lorem</p>
    </main>
  );
}
