import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './pico.classless.css';

export function App() {
  // create web audio api context
  const AudioContext = window.AudioContext;
  const audioCtx = new AudioContext();

  // create Oscillator and gain node
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  // connect oscillator to gain node to speakers
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  // set options for the oscillator
  oscillator.detune.value = 100; // value in cents


  return (
    <div className="App">
      <div>
        <h1>time<span id="time-colon">:</span>sync</h1>
        <h2>by <a href="https://yujioshiro.com">Yuji Oshiro</a></h2>
      </div>
      <select defaultValue={'DEFAULT'} name="radioSignalLocation" id="">
        <option value="DEFAULT" disabled>please choose a radio signal</option>
        <option value="WWV">WWV, North America</option>
        <option value="WWVB">WWVB, North America</option>
        <option value="MSF">MSF, UK</option>
        <option value="DCF77">DCF77, Germany</option>
        <option value="BPC">BPC, China (Henan Province)</option>
        <option value="JJY">JJY, Japan</option>
      </select>
      <button onClick={() => console.log("Button Clicked")}>Click to Sync</button>
      <footer><a href="https://blog.yujioshiro.com/timesync">(read how this is accomplished)</a></footer>
    </div>
  );
}

export default App;
