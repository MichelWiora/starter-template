import { createFileRoute } from '@tanstack/react-router'
import { api } from '../../convex/_generated/api'
import { convexQuery } from '@convex-dev/react-query'
import { useSuspenseQuery } from '@tanstack/react-query'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(
      convexQuery(api.auth.getCurrentUser, {})
    )
  },
})

function Dashboard() {
  const { data: session } = useSuspenseQuery(
    convexQuery(api.auth.getCurrentUser, {})
  )

  if (!session) {
    return <div>Please login first</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Hello World</h1>
      <p className="text-gray-600">Welcome, {session?.name}</p>
    </div>
  )
}
