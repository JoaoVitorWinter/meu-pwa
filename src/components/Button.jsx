const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick} className="bg-black text-white text-base font-bold py-4 px-10 rounded-lg">
            {text}
        </button>
    )
}

export default Button;