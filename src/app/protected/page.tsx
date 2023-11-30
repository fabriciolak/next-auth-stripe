import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

export default async function Protected() {
  const session = await getServerSession()

  if (!session || !session.user) {
    redirect('/api/auth/signin')
  }

  return (
    <div>
      <h1>Protected page</h1>
      <p>You have access to protected page</p>
    </div>
  )
}
