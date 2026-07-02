import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'

import { NAV_ITEMS } from '@/lib/navigation'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

import { GetStartedButton } from './GetStartedButton'
import { LoginLink } from './LoginLink'
import { NavItem } from './NavItem'

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col gap-8"
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 * index,
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <SheetClose asChild>
                    <NavItem label={item.label} href={item.href} />
                  </SheetClose>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.35 }}
            className="flex flex-col gap-4 border-t border-black/5 pt-6"
          >
            <SheetClose asChild>
              <LoginLink className="w-fit" />
            </SheetClose>
            <SheetClose asChild>
              <GetStartedButton className="w-fit" />
            </SheetClose>
          </motion.div>
        </motion.div>
      </SheetContent>
    </Sheet>
  )
}
