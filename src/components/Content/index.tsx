import { useContext, useState } from "react";
import { CounterContext } from '../../context/CounterContext'
import { Counter } from "../Counter";

export function Content() {
  return (
    <>
      <h2 style={{ fontFamily: 'fantasy', fontWeight: '600', color: 'darkblue', fontSize: '25px' }}>Add in Counter</h2>
      <Counter />
    </>
  )
}
