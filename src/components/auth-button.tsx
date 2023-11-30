'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="space-x-4">
        <span>
          Signed as <span className="font-bold">{session.user?.email}</span>
        </span>
        <button
          type="button"
          onClick={() => signOut()}
          className="bg-emerald-600 hover:bg-emerald-700 px-4 py-3 rounded-lg text-white"
        >
          Sign out
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => signIn('github')}
      className="bg-emerald-600 hover:bg-emerald-700 px-4 py-3 rounded-lg text-white"
    >
      Not signed
    </button>
  )
}
