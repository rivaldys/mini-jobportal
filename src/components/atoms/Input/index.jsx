import { cva } from 'class-variance-authority'

const inputStyle = cva('w-full border border-gray-200 focus:outline-none focus:bg-blue-50/40 focus:border-blue-200 px-5 py-3 rounded-lg text-sm text-[#555555] font-light')

const Input = ({ className, ...rest }) =>
{
    return (
        <input
            className={inputStyle({ className })}
            spellCheck={false}
            {...rest}
        />
    )
}

export default Input