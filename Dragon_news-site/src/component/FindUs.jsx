import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
export default function FindUs() {
  return (
    <div className="space-y-2">
      <h1 className="font-semibold">Find Us</h1>
      <div >
        <div className="join flex join-vertical">
          <button className="btn join-item  bg-base-100 justify-start border-1 border-gray-400"><CiFacebook />faceBook</button>
          <button className="btn join-item  bg-base-100 justify-start border-1 border-gray-400"><CiYoutube />youtube</button>
          <button className="btn join-item  bg-base-100 justify-start border-1 border-gray-400"><CiTwitter />twitter</button>
        </div>
      </div>
    </div>
  );
}
