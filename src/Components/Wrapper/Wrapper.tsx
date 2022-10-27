function Wrapper(props: any): JSX.Element {
	const {children} = props;
	return (
		<div
			style={{
				border: "3px solid red",
				width: "100%",
				height: "50vh",
			}}>
			{children}
		</div>
	);
}

export default Wrapper;
