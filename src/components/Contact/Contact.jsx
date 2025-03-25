import * as S from './Styles';

const Contact = () => {
  return (
    <S.ContactSection>
      <S.ContactContainer>
        <S.Title>Contato</S.Title>
        <S.Form>
          <S.Input type="text" placeholder="Seu nome" />
          <S.Input type="email" placeholder="Seu email" />
          <S.Textarea placeholder="Sua mensagem" rows="5" />
          <S.Button type="submit">Enviar</S.Button>
        </S.Form>
      </S.ContactContainer>
    </S.ContactSection>
  );
};

export default Contact;