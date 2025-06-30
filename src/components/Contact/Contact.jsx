import * as S from './Styles';
import contactData from './contactData';

const Contact = () => {
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage = `Olá, meu nome é ${name}. Meu email é ${email}. Minha mensagem: ${message}`;
    window.open(
      `https://wa.me/${contactData.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      '_blank'
    );
  };

  return (
    <S.ContactSection>
      <S.ContactContainer>
        <S.Title>{contactData.title}</S.Title>
        <S.Form onSubmit={sendToWhatsApp}>
          <S.Input type="text" name="name" placeholder={contactData.placeholders.name} required />
          <S.Input type="email" name="email" placeholder={contactData.placeholders.email} required />
          <S.Textarea name="message" placeholder={contactData.placeholders.message} rows="5" required />
          <S.Button type="submit">{contactData.buttonText}</S.Button>
        </S.Form>
      </S.ContactContainer>
    </S.ContactSection>
  );
};

export default Contact;