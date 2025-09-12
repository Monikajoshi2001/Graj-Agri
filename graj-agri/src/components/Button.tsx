import type { ButtonHTMLAttributes } from "react"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button type="button" className={`bg-yellow-400 text-white px-4 py-2 rounded-md font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed shadow shadow-black/20  ${className}`} {...props}>
      {children}
    </button>
  )
}
