import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { authClient } from '@/lib/auth-client'

export const Route = createFileRoute('/signup')({
  component: Signup,
})

function Signup() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">Create account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" action={async (formData) => {
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
            alert('Signup failed. Please try again.')
          }
        }}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-1 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
            />
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
