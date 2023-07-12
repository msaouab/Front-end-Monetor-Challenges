
interface BtnProps {
	text: string;
}

const BtnContact = ( {text}: BtnProps ) => {
	return (
		<button className="btn btn-contact">{text}</button>
	);
};

export default BtnContact;