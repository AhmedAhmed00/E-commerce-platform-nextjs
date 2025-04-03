'use client'
import React from 'react'
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, Sheet,SheetTrigger } from '../ui/sheet'
import { EllipsisVertical } from 'lucide-react'

export default function Menu() {
  return (
    <div className=' md:hidden justify-end gap-3'>
        <nav className=' md:flex w-full max-w-xs'>
        <Sheet>
  <SheetTrigger>
    <EllipsisVertical />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Hello</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </nav>
        
    </div>
  )
}
