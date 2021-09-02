import React, { useState } from 'react';

//Moment
import moment from 'moment';

//Components
import Input from '../../Form/Input';
import Button from '../../Form/Button';
import { Main, Forms, Title, ImgCadastro, SpanMens } from './Style';
import { Grid, Column } from '../../Grid';
import Loading from '../../Loading';
import DadosEnviados from '../../DadosEnviados';

//img
import imgCadastro from '../../../assets/imgCadastro.jpeg';

export default function CadastroPaciente() {
  const [ConfirmaDados, setConfirmaDados] = useState(false);
  const [LoadPage, setLoadPage] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [data_nascimento, setData_nascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [NomeInvalido, setNomeInvalido] = useState(false);
  const [EmailInvalido, setEmailInvalido] = useState(false);
  const [Data_nascimentoInvalido, setData_nascimentoInvalido] = useState(false);
  const [CpfInvalido, setCpfInvalido] = useState(false);
  const [BairroInvalido, setBairroInvalido] = useState(false);
  const [RuaInvalido, setRuaInvalido] = useState(false);
  const [CidadeInvalido, setCidadeInvalido] = useState(false);
  const [TelefoneInvalido, setTelefoneInvalido] = useState(false);

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case 'nome':
        //Validação Nome
        if (event.target.value.length > 7) {
          setNomeInvalido(false);
          setNome(event.target.value);
        } else setNomeInvalido(true);
        break;
      case 'email':
        //Validação Email - Usando RegEx
        const regEmail = /\w@.+(.com|.com.br)$/g;
        if (event.target.value.match(regEmail) != null) {
          setEmailInvalido(false);
          setEmail(event.target.value);
        } else setEmailInvalido(true);
        break;

      case 'data_nascimento':
        //Validação Data de Nascimento - Usando Moment para pegar as datas.
        const dataNascimento = moment(event.target.value).format('DD/MM/YYYY');
        const dataAtual = moment().format('DD/MM/YYYY');

        if (dataNascimento < dataAtual) {
          setData_nascimentoInvalido(false);
          setData_nascimento(dataNascimento);
        } else {
          setData_nascimentoInvalido(true);
        }
        break;
      case 'cpf':
        //Validação CPF - Usando RegEx
        const regexCpf = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
        if (event.target.value.match(regexCpf) != null) {
          setCpfInvalido(false);
          setCpf(event.target.value);
        } else setCpfInvalido(true);
        break;
      case 'bairro':
        if (event.target.value.length > 5) {
          setBairroInvalido(false);
          setBairro(event.target.value);
        } else {
          setBairroInvalido(true);
        }
        break;
      case 'rua':
        if (event.target.value.length > 5) {
          setRuaInvalido(false);
          setRua(event.target.value);
        } else setRuaInvalido(true);
        break;
      case 'cidade':
        if (event.target.value.length > 5) {
          setCidadeInvalido(false);
          setCidade(event.target.value);
        } else setCidadeInvalido(true);
        break;
      case 'telefone':
        //Validr numero de telefone - Usando RegEx
        const regexTelefone = /^\(\d\d\)\s?\d{5}-?\d{4}$/g;
        if (event.target.value.match(regexTelefone)) {
          setTelefoneInvalido(false);
          setTelefone(event.target.value);
        } else setTelefoneInvalido(true);
        break;
      default:
        throw new Error('Campo Invalido');
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (nome === '' && email === '' && cpf === '') {
      setNomeInvalido(true);
      setEmailInvalido(true);
      setCpfInvalido(true);
    } else {
      setLoadPage(true);
      let json = {
        nome: nome,
        email: email,
        data_nascimento: data_nascimento,
        cpf: cpf,
        endereco: `Bairro:${bairro} Rua:${rua}`,
        cidade: cidade,
        telefone: telefone,
      };
      const requestOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(json),
      };
      await fetch(
        'https://projeto-dentista-api-m4.herokuapp.com/paciente',
        requestOptions
      )
        .then((response) => response.json())
        .then((dados) => dados.EnvioDeDados && setConfirmaDados(true));
    }
  };

  if (LoadPage) {
    return <>{ConfirmaDados ? <DadosEnviados /> : <Loading />}</>;
  } else {
    return (
      <Main>
        <Title>Cadastro:</Title>
        <ImgCadastro src={imgCadastro} alt="imagem Cadastro" />
        <Forms onSubmit={handleSubmit}>
          <Grid>
            <Column column="1">
              <Input
                type="text"
                name="nome"
                placeholder=" nome completo"
                onChange={handleInputChange}
                width="200px"
                height="30px"
              >
                Nome:{' '}
              </Input>
            </Column>
            <Column column="2">
              <Input
                type="email"
                name="email"
                placeholder=" seuemail@email.com"
                onChange={handleInputChange}
                width="300px"
                height="30px"
              >
                E-mail:{' '}
              </Input>
            </Column>
            <Column column="1">
              <Input
                style={{ textAlign: 'center' }}
                type="date"
                name="data_nascimento"
                onChange={handleInputChange}
                width="150px"
                height="30px"
              >
                Data de Nascimento:{' '}
              </Input>
            </Column>
            <Column column="2">
              <Input
                type="text"
                name="cpf"
                placeholder=" 000.000.000-00"
                onChange={handleInputChange}
                width="300px"
                height="30px"
              >
                CPF:{' '}
              </Input>
            </Column>
            <Column column="1">
              <Input
                type="text"
                name="bairro"
                placeholder=" Bairro"
                onChange={handleInputChange}
                width="300px"
                height="30px"
              >
                Bairro:{' '}
              </Input>
            </Column>
            <Column column="2">
              <Input
                type="text"
                name="rua"
                placeholder=" Rua"
                onChange={handleInputChange}
                width="300px"
                height="30px"
              >
                Rua:{' '}
              </Input>
            </Column>
            <Column column="1">
              <Input
                type="text"
                name="cidade"
                placeholder=" Rio de janeiro"
                onChange={handleInputChange}
                width="180px"
                height="30px"
              >
                Cidade:{' '}
              </Input>
            </Column>
            <Column column="2">
              <Input
                type="text"
                name="telefone"
                placeholder=" (xx)xxxxx-xxxx"
                onChange={handleInputChange}
                width="150px"
                height="30px"
              >
                Telefone:
              </Input>
            </Column>
            <Column column="1">
              {NomeInvalido === true && <SpanMens>* Nome inválido</SpanMens>}
              {EmailInvalido === true && <SpanMens>* E-mail Inválido</SpanMens>}
              {Data_nascimentoInvalido === true && (
                <SpanMens>* Data de Nascimento Inválida</SpanMens>
              )}
              {CpfInvalido === true && <SpanMens>* CPF Inválido</SpanMens>}
              {BairroInvalido === true && (
                <SpanMens>* Bairro Inválido</SpanMens>
              )}
              {RuaInvalido === true && <SpanMens>* Rua Inválida</SpanMens>}
              {CidadeInvalido === true && (
                <SpanMens>* Cidade Inválida</SpanMens>
              )}
              {TelefoneInvalido === true && (
                <SpanMens>* Telefone Inválido</SpanMens>
              )}
            </Column>
            <Column column="2">
              <Button width="100px" height="30px" type="submit">
                Enviar
              </Button>
            </Column>
          </Grid>
        </Forms>
      </Main>
    );
  }
}
