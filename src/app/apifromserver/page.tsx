import { headers } from 'next/headers'

export default async function ApiFromServer() {
  const resp = await fetch('http://localhost:3000/api/whoami', {
    method: 'GET',
    headers: headers(),
  }).then((res) => res.json())

  console.log(resp)

  return (
    <div>
      <h1>Api from Server</h1>
      {resp.name && <p>Name: {resp.name}</p>}
      {resp.message && <p>Message: {resp.message}</p>}
    </div>
  )
}
