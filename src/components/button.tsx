import { ComponentProps } from 'react'
import { cn } from '@/utils/merge-classes'

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'relative block mx-auto bg-sunset-400 text-lg font-bold text-sunset-950 px-8 py-4 rounded-full shadow-[0_9px_#efa424] outline-none border-none cursor-pointer transition-all duration-150',
        'hover:shadow-[0_4px_#efa424] hover:top-[2px]',
        'active:shadow-none active:top-[6px] active:bg-sunset-500',
        className,
      )}
      {...props}
    />
  )
}
