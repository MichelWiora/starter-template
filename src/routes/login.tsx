import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { authClient } from '@/lib/auth-client'

export const Route = createFileRoute('/login')({
  component: Login,
})

function Login() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle>Anmelden</CardTitle>
          <CardDescription>
            Noch kein Konto?{' '}
            <Link to="/signup" className="text-primary hover:underline">
              Registrieren
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="space-y-4"
            action={async (formData) => {
              const email = formData.get('email') as string
              const password = formData.get('password') as string
              try {
                await authClient.signIn.email({
                  email,
                  password,
                })
                router.navigate({ to: '/dashboard' })
              } catch (error) {
                console.error('Login failed:', error)
                alert('Anmeldung fehlgeschlagen. Bitte prüfe deine Zugangsdaten.')
              }
            }}
          >
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="deine@email.de"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Anmelden
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/signup" className="text-sm text-muted-foreground hover:text-primary">
            Neues Konto erstellen
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
