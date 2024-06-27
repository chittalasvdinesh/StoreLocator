'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{ margin: "200px 100px 100px 500px", border: "1px solid red", background: "white", color: "black", padding: "10px", width: "300px", borderRadius: "20px" }}>
      <h2>Something went wrong!</h2>
      <button
        style={{ margin: "20px 0", padding: "10px", background: "red", color: "white" }}
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}