import { 
    ContactSection, 
    ContactContainer, 
    Title, 
    Form, 
    Input, 
    Textarea, 
    Button 
} from '../styles/contact';

const Contact = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <Title>Contato</Title>
        <Form>
          <Input type="text" placeholder="Seu nome" />
          <Input type="email" placeholder="Seu email" />
          <Textarea placeholder="Sua mensagem" rows="5" />
          <Button type="submit">Enviar</Button>
        </Form>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;