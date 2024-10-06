import { cva } from 'class-variance-authority'

const errorMessageStyle = cva('text-[#E06379] font-light text-xs')

const ErrorMessage = ({ children, className }) => <p className={errorMessageStyle({ className })}>{children}</p>

export default ErrorMessage