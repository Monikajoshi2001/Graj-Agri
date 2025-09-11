export default function InputField ({
  icon,
  label,
  field,
  type,
  required,
  form,
  fieldId,
  error,
  handleChange,
}: {
  icon: React.ReactNode;
  label: string;
  field: string;
  type: string;
  required?: boolean;
  form: Record<string, string>;
  fieldId: string;
  error: string;
  handleChange: (field: string, value: string) => void;
}) {
  const value = form[field];
  return (
    <div className="relative mb-6">
      <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ${field === "email" && error ? 'top-6': ''}`}>
        {icon}
      </div>
      <input
        id={`${fieldId}-${field}`}
        type={type}
        value={value}
        onChange={(e) => handleChange(field, e.target.value)}
        className={`peer w-full h-12 pl-12 pr-3 bg-transparent border-b-2 text-white 
          focus:outline-none transition-colors duration-300 
          ${field === "email" && error
            ? "border-red-500"
            : "border-gray-400 focus:border-orange-400"
          }`}
        placeholder=" "
        required={required}
      />
      <label
        htmlFor={`${fieldId}-${field}`}
        className={`absolute left-12 text-gray-400 transition-all duration-300 pointer-events-none
          ${value
            ? '-top-2 text-xs text-orange-400'
            : 'top-1/2 -translate-y-1/2 peer-focus:top-0 peer-focus:text-xs peer-focus:text-orange-400'
          } }`} 
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {field === "email" && error && (
        <p className="text-red-500 text-sm mt-1 ml-12">{error}</p>
      )}
    </div>
  );
};

