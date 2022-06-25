import * as React from "react";
import { useState } from 'react';
import { Colorbox } from './App';

export function Addcolor() {
  const initial_colorList = ["yellow", "blue", "red"];
  const [color, setColor] = useState("orange");
  const [colorList, setColorList] = useState(initial_colorList);
  const styles = {
    backgroundColor: color,
  };
  return (
    <div>
      <input value={color} onChange={(event) => { setColor(event.target.value); }} style={styles} placeholder='Add Colour' />
      <button onClick={() => { setColorList([...initial_colorList, color]); }}>add color</button>
      {colorList.map((clr, index) => (<Colorbox key={index} color={clr} />))}
    </div>
  );
}
