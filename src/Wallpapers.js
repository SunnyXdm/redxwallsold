import Card from "./Card"
import axios from "axios"
import { useState, useEffect } from 'react'

function Wallpapers({ data }) {
  return (
    <>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {data.map((post) =>
            <li className="">
              <Card wall={post}/>
            </li>
          )}
        </ul>
    </>
  );
}

export default Wallpapers;