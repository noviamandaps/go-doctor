interface RadioOptionProps {
  name: string
  value: string
  label: string
  icon?: string
  iconAlt?: string
  checked?: boolean
  onChange?: (value: string) => void
  showImage?: boolean
  imageSrc?: string
  className?: string
}

export default function RadioOption({
  name,
  value,
  label,
  icon,
  iconAlt = 'Icon',
  checked = false,
  onChange,
  showImage = false,
  imageSrc,
  className = ''
}: RadioOptionProps) {
  return (
    <label
      className={`group flex cursor-pointer items-center justify-between rounded-full border border-[#F1F1F1] p-4 text-[#757C98] transition-all duration-300 hover:border-[#2C40FF] ${
        checked ? 'border-[#2C40FF] bg-[#2C40FF08]' : ''
      } ${className}`}
    >
      <div className="flex items-center gap-3">
        {showImage && imageSrc && <img src={imageSrc} alt={label} className="h-6" />}
        {icon && <img src={icon} alt={iconAlt} className="size-6" />}
        <p className="font-jakarta text-lg font-bold leading-[22.68px] text-[#161616]">
          {label}
        </p>
      </div>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange?.(e.target.value)}
        className="size-6 accent-[#2C40FF]"
      />
    </label>
  )
}
