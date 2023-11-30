'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AuthButton } from './auth-button'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center">
      <nav className="space-x-4">
        <Link
          href="/"
          className={
            pathname === '/'
              ? 'bg-emerald-500 hover:bg-emerald-700 px-4 py-3 rounded-lg text-white'
              : 'hover:bg-black/30 px-4 py-3 rounded-lg'
          }
        >
          Home
        </Link>
        <Link
          href="/protected"
          className={
            pathname === '/protected'
              ? 'bg-emerald-500 hover:bg-emerald-700 px-4 py-3 rounded-lg text-white'
              : 'hover:bg-black/30 px-4 py-3 rounded-lg'
          }
        >
          Protected
        </Link>
        <Link
          href="/server-action"
          className={
            pathname === '/server-action'
              ? 'bg-emerald-500 hover:bg-emerald-700 px-4 py-3 rounded-lg text-white'
              : 'hover:bg-black/30 px-4 py-3 rounded-lg'
          }
        >
          Server Action
        </Link>
        <Link
          href="/apifromclient"
          className={
            pathname === '/apifromclient'
              ? 'bg-emerald-500 hover:bg-emerald-700 px-4 py-3 rounded-lg text-white'
              : 'hover:bg-black/30 px-4 py-3 rounded-lg'
          }
        >
          Api from Client
        </Link>
        <Link
          href="/apifromserver"
          className={
            pathname === '/apifromserver'
              ? 'bg-emerald-500 hover:bg-emerald-700 px-4 py-3 rounded-lg text-white'
              : 'hover:bg-black/30 px-4 py-3 rounded-lg'
          }
        >
          Api from Server
        </Link>
      </nav>

      <AuthButton />
    </header>
  )
}
