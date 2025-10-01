import type { ChangeEventHandler } from 'react'

type SalaryInputProps = {
  value: number;
  onChange: (value: number) => void;
}

export function SalaryInput({ value, onChange }: SalaryInputProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = Number(e.target.value);
    if (newValue >= 0) {
      onChange(newValue);
    }
  }

  return (
    <div className="w-full max-w-md">
      <label htmlFor="salary-input">
        Salaire annuel brut (€)
      </label>
      <input
        id="salary-input"
        type="number"
        min="0"
        step="1000"
        value={value}
        onChange={handleChange}
        placeholder="ex: 50000"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
      />
    </div>
  )
}

export default SalaryInput;