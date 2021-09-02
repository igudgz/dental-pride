import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

//Components
import Input from '../../Form/Input';
import Button from '../../Form/Button';

//Style
import { Main, Title, Forms, SpanMens } from './Style';
import Loading from '../../Loading';

//Context - Login
import { Context } from '../../ValidaLogin/Context';

export default function Login() {
  const [LoadPage, setLoadPage] = useState(false);
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [EmailInvalido, setEmailInvalido] = useState(false);
  const [CpfInvalido, setCpfInvalido] = useState(false);
  const [CpfEmailInvalido, setCpfEmailInvalido] = useState(false);
  let history = useHistory();

  const { setLogado, setUsuario } = useContext(Context);

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case 'email':
        //Validação Email - Usando RegEx
        const regEmail = /\w@.+(.com|.com.br)$/g;
        if (event.target.value.match(regEmail) != null) {
          setEmailInvalido(false);
          setEmail(event.target.value);
        } else setEmailInvalido(true);
        break;
      case 'cpf':
        //Validação CPF - Usando RegEx
        const regexCpf = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
        if (event.target.value.match(regexCpf) != null) {
          setCpfInvalido(false);
          setCpf(event.target.value);
        } else setCpfInvalido(true);
        break;
      default:
        throw new Error('Campo Invalido');
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' && cpf === '') {
      setEmailInvalido(true);
      setCpfInvalido(true);
    } else {
      setLoadPage(true);

      let json = {
        email: email,
        cpf: cpf,
      };

      fetch(
        `https://projeto-dentista-api-m4.herokuapp.com/paciente/login/email:${json.email} cpf:${json.cpf}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json, 'aqui');
          confirmaDadosEnviados(json);
        });
    }
  };
  const confirmaDadosEnviados = (json) => {
    if (json.erro) {
      setCpfEmailInvalido(true);
      setLoadPage(false);
    } else {
      setUsuario(json);
      setLogado(true);
      history.push(`/portal/${json.ID}`);
    }
  };

  if (LoadPage) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <Main>
        <Title>Entrar: </Title>
        <Forms
          style={{ display: 'flex', flexDirection: 'column' }}
          onSubmit={handleSubmit}
        >
          <Input
            type="email"
            name="email"
            placeholder=" seuemail@exemplo.com"
            onChange={handleInputChange}
            width="250px"
            height="30px"
          >
            E-mail:{' '}
          </Input>
          {EmailInvalido === true && <SpanMens>* Email Inválido</SpanMens>}
          <Input
            type="text"
            name="cpf"
            placeholder=" 000.000.000-00"
            onChange={handleInputChange}
            width="250px"
            height="30px"
          >
            CPF:{' '}
          </Input>
          {CpfInvalido === true && <SpanMens>* CPF Inválido</SpanMens>}
          {CpfEmailInvalido === true && (
            <SpanMens>* CPF ou E-mail Inválido.</SpanMens>
          )}
          <Button width="100px" height="30px" type="submit">
            Entrar
          </Button>
        </Forms>
      </Main>
    );
  }
}
//algoa@hotmail.com.br
//222.222.222-02
