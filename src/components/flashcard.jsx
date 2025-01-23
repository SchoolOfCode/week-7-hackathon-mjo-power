//import { useState } from 'react'

export function FlashCard({ name, picture, answer }) {
  return (
    <>
      <button>❌</button>

      <p>{picture}</p>
      <p>{name}</p>

      <>{answer}</>
    </>
  );
}
