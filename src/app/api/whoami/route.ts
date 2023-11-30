import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'

import { authOptions } from '../auth/[...nextauth]/route'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session || !session?.user) {
    return NextResponse.json({ message: 'Not logged in' })
  }

  return NextResponse.json({ name: session?.user?.name })
}
