import { cva } from 'class-variance-authority'

const inputGroupLabelStyle = cva('block w-fit text-[#555555] text-sm ml-[5px] mb-[5px]')

const InputGroup = ({ className, classNames, children, label, labelFor }) =>
{
    return (
        <div className={className}>
            {label && (
                <label
                    className={inputGroupLabelStyle({ className: classNames ? classNames.label : undefined })}
                    htmlFor={labelFor}
                >
                    {label}
                </label>
            )}
            {children}
        </div>
    )
}

export default InputGroup