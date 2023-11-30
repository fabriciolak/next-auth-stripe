import { getServerSession } from 'next-auth'
import WhoamiButton from '@/components/whoami-button'

export default async function ServerActionPage() {
  const whoAmI = async () => {
    'use server'

    const session = await getServerSession()
    return session?.user?.name || 'Not logged in'
  }

  return (
    <div>
      <WhoamiButton whoAmIAction={whoAmI} />
    </div>
  )
}
