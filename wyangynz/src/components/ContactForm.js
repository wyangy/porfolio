import styled from "styled-components";

const StyledForm = styled.form``;

const ContactForm = () => {
	<StyledForm action="https://formspree.io/f/xwkyzzve" method="POST">
		<label>
			Your email:
			<input type="email" name="email" />
		</label>
		<label>
			Your message:
			<textarea name="message"></textarea>
		</label>
		<button type="submit">Send</button>
	</StyledForm>;
};

export default ContactForm;
