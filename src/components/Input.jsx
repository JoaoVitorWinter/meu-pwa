const Input = ({labelText, placeholder, name, onChange, type, width, value}) => {
  return (
    <>
      <label className="font-base">
      {labelText}
      <input onChange={onChange} placeholder={placeholder} value={value} type={type} name={name} className={`block ${width ? width : "w-auto"} mt-2 px-6 py-2 font-base rounded-lg`} />
      </label>
    </>
  );
};

export default Input;
