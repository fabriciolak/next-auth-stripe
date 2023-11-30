'use client'

import React from 'react'

export default function ApiFromClient() {
  const [name, setName] = React.useState<string>('')

  React.useEffect(() => {
    fetch('/api/whoami')
      .then((res) => res.json())
      .then((res) => setName(res.name))
  })

  return (
    <div>
      <h1>Api from Client</h1>
      <p>Name: {name}</p>
    </div>
  )
}
