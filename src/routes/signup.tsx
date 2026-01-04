import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { authClient } from '@/lib/auth-client'

export const Route = createFileRoute('/signup')({
  component: Signup,
})

function Signup() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle>Registrieren</CardTitle>
          <CardDescription>
            Bereits ein Konto?{' '}
            <Link to="/login" className="text-primary hover:underline">
              Anmelden
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
                await authClient.signUp.email({
                  email,
                  password,
                  name: email.split('@')[0],
                })
                router.navigate({ to: '/dashboard' })
              } catch (error) {
                console.error('Signup failed:', error)
                alert('Registrierung fehlgeschlagen. Bitte versuche es erneut.')
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
              Registrieren
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/login" className="text-sm text-muted-foreground hover:text-primary">
            Bereits ein Konto
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
