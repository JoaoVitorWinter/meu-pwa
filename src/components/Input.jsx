const Input = ({labelText, placeholder, name, onChange, type }) => {
  return (
    <>
      <label className="font-base">
      {labelText}
      <input onChange={onChange} placeholder={placeholder} type={type} name={name} className="block mt-2 px-6 py-2 font-base rounded-lg" />
      </label>
    </>
  );
};

export default Input;
