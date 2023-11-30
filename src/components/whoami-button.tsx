'use client'
import React from 'react'

export default function WhoamiButton({
  whoAmIAction,
}: {
  whoAmIAction: () => Promise<string>
}) {
  const [name, setName] = React.useState<string>('')

  return (
    <div>
      <button type="button" onClick={async () => setName(await whoAmIAction())}>
        Who am I?
      </button>
      {name && <p>You are {name}</p>}
    </div>
  )
}
