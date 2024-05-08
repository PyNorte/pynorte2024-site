import { ComponentProps } from 'react'

import { cn } from '@/utils/merge-classes'

interface BadgeProps extends ComponentProps<'span'> {}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'w-min rounded-full px-4 py-2 text-center font-bold',
        className,
      )}
      {...props}
    />
  )
}
