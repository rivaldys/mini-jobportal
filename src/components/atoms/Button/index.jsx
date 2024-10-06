import { cva } from 'class-variance-authority'

const buttonStyle = cva('transition duration-300 flex justify-center items-center', {
    variants:
    {
        variant:
        {
            filled: 'text-white bg-gradient-to-r from-blue-500 to-blue-500/70 hover:opacity-80',
            outlined: 'text-[#D66D75] border border-red-200 hover:bg-red-50',
            disabled: 'text-[#999999] bg-[#eaeaea] border border-gray-300/50'
        },
        size:
        {
            sm: 'rounded-[4px] py-2 px-4 text-xs font-normal',
            md: 'rounded-md py-3 px-6 text-sm font-medium'
        }
    },
    defaultVariants:
    {
        variant: 'filled',
        size: 'md'
    }
})

const Button = ({ children, icon, variant, size, className, type, ...rest }) =>
{
    if(rest.disabled)
    {
        variant = 'disabled'
        iconColor = '#999999'
    }

    return (
        <button
            className={buttonStyle({ variant, size, className })}
            type={type}
            {...rest}
        >
            {children}
        </button>
    )
}

export default Button