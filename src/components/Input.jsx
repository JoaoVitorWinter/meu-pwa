const Input = ({labelText, placeholder, name, onChange, onKeyPress, type, width, value}) => {
  return (
    <>
      <label className="font-base">
      {labelText}
      <input onChange={onChange} onKeyPress={onKeyPress} placeholder={placeholder} value={value} type={type} name={name} className={`block ${width ? width : "w-auto"} mt-2 px-6 py-2 text-base rounded-lg`} />
      </label>
    </>
  );
};

export default Input;
