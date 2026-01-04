import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X, Home, LogOut } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold">Navigation</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </Button>
        </div>

        <nav className="flex-1 p-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors mb-2"
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors mb-2"
          >
            <LogOut size={20} />
            <span className="font-medium">Login</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
