interface Input extends React.InputHTMLAttributes<Input> {
  label: string;
}

const Input = ({ type = "text", placeholder, name, label }: Input) => {
  return (
    <div className="">
      <label htmlFor={name}>{`${label}`}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-2 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
        // {...rest}
      />
    </div>
  );
};

export default Input;
