import { ComponentProps } from 'react'

import { cn } from '@/utils/merge-classes'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'relative mx-auto block cursor-pointer rounded-full border-none bg-sunset-400 px-8 py-4 text-lg font-bold text-sunset-950 shadow-[0_9px_#efa424] outline-none transition-all duration-150',
        'hover:top-[2px] hover:shadow-[0_4px_#efa424]',
        'active:top-[6px] active:bg-sunset-500 active:shadow-none',
        className,
      )}
      {...props}
    />
  )
}
