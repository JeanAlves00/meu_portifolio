import * as S from './Styles';

const Contact = () => {
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const whatsappMessage = `Olá, meu nome é ${name}. Meu email é ${email}. Minha mensagem: ${message}`;
    const whatsappNumber = '+5569992640368'; // Número do WhatsApp

    // Abrir o WhatsApp com a mensagem
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <S.ContactSection>
      <S.ContactContainer>
        <S.Title>Contato</S.Title>
        <S.Form onSubmit={sendToWhatsApp}>
          <S.Input type="text" name="name" placeholder="Seu nome" required />
          <S.Input type="email" name="email" placeholder="Seu email" required />
          <S.Textarea name="message" placeholder="Sua mensagem" rows="5" required />
          <S.Button type="submit">Enviar</S.Button>
        </S.Form>
      </S.ContactContainer>
    </S.ContactSection>
  );
};

export default Contact;