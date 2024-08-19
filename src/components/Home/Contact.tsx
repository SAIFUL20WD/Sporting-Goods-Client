import { Input } from "antd";

const { TextArea } = Input;

const Contact = () => (
	<>
		<h1>Contact</h1>
		<Input placeholder="Email" />
		<TextArea rows={4} />
	</>
);

export default Contact;
