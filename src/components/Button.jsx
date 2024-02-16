const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick} className="bg-green text-base font-bold py-4 px-20 rounded-lg">
            {text}
        </button>
    )
}

export default Button;