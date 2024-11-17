import React from "react";
import Header from "../component/Header";
import LatestNews from "../component/LatestNews";
import Nav from "../component/Nav";
import LeftNav from "../component/Layout-component/LeftNav";
import MiddleNav from "../component/Layout-component/MiddleNav";
import RightNav from "../component/Layout-component/RightNav";
import { Outlet } from "react-router-dom";

export default function HomeLayOut() {
  return (
    <div className="max-w-6xl mx-auto py-4 font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto">
        <Nav></Nav>
      </nav>
      <main className="w-11/12 mx-auto md:pt-5 md:grid md:grid-cols-12 gap-4">
      <aside className="col-span-3"><LeftNav></LeftNav></aside>
      <section className="col-span-6"><Outlet></Outlet></section>
      <aside className="col-span-3"><RightNav></RightNav></aside>
      </main>
    </div>
  );
}
