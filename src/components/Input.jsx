const Input = ({labelText, placeholder}) => {
  return (
    <>
      <label className="font-base">
      {labelText}
      <input placeholder={placeholder} type="text" name="search" className="block mt-2 px-6 py-2 font-base rounded-lg" />
      </label>
    </>
  );
};

export default Input;
