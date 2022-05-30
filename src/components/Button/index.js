import './button.css';

const Button = (props) => {
	const { value, className, id, handleClick, onMouseOver, onMouseLeave } =
		props;

	return (
		<button
			className={className}
			type='button'
			id={id}
			onClick={handleClick}
			onMouseOver={onMouseOver}
			onMouseLeave={onMouseLeave}
		>
			{value}
		</button>
	);
};

export default Button;
