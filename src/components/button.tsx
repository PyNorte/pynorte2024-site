import { ComponentProps } from 'react'

import { cn } from '@/utils/merge-classes'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-full border-2 border-sunset-50 bg-sunset-400 px-8 py-4 text-center text-lg font-bold text-sunset-950 shadow-[6px_6px_0_0_rgba(255,255,255,1)]',
        className,
      )}
      {...props}
    />
  )
}
