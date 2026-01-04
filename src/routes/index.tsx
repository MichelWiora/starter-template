import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent to-foreground flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center space-y-2 pb-8">
          <CardTitle className="text-4xl">Gruppenplaner App</CardTitle>
          <CardDescription className="text-lg">
            Willkommen zu deiner neuen Gruppenplaner-App!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-4">
            <Link to="/login" className="w-full">
              <Button className="w-full" size="lg">
                Anmelden
              </Button>
            </Link>
            <Link to="/signup" className="w-full">
              <Button variant="outline" className="w-full" size="lg">
                Registrieren
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
