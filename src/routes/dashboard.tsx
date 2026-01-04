import { createFileRoute } from '@tanstack/react-router'
import { api } from '../../convex/_generated/api'
import { convexQuery } from '@convex-dev/react-query'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

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
    return <div className="flex items-center justify-center min-h-screen">
      <Card className="max-w-md">
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">
            Bitte anmelden um fortzufahren
          </p>
        </CardContent>
      </Card>
    </div>
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Hello World</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-lg">
            Willkommen, <span className="font-semibold text-primary">{session.name}</span>!
          </p>
          <p className="text-muted-foreground mt-4">
            Du hast dich erfolgreich eingeloggt.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
