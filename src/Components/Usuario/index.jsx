import React, { useEffect, useState, useContext } from 'react';
import * as S from './Usuario.styles';
import foto from '../../assets/pessoa.png';
import Button from '../Form/Button';
import Input from '../Form/Input';
import { useHistory } from 'react-router-dom';
import Modal from '../Modals/ModalContainer';
import BotaoExcluir from '../Modals/BotaoExcluir';
import { Context } from '../ValidaLogin/Context';
const Usuario = () => {
  const { usuario } = useContext(Context);
  const history = useHistory();
  const [isVisible, setIsVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [status, setStatus] = useState({
    type: '',
    mensagem: '',
  });

  useEffect(() => {
    fetch(
      `https://projeto-dentista-api-m4.herokuapp.com/paciente/${usuario.CPF}`
    )
      .then((res) => res.json())
      .then((result) => {
        setNome(result.NOME);
        setEmail(result.EMAIL);
        setNascimento(result.Data_Nascimento);
        setCpf(result.CPF);
        setEndereco(result.ENDERECO);
        setCidade(result.CIDADE);
        setTelefone(result.TELEFONE);
      });
  }, []);

  const edit = async (e) => {
    e.preventDefault();
    console.log(nome, email, cpf, endereco, cidade, telefone);

    await fetch(
      `https://projeto-dentista-api-m4.herokuapp.com/paciente/${usuario.CPF}`,
      {
        method: 'PATCH',
        headers: {
          'Access-Control-Allow-Origin':
            'https://projeto-dentista-api-m4.herokuapp.com/paciente',
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          nascimento,
          cpf,
          endereco,
          cidade,
          telefone,
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.erro) {
          setStatus({
            type: 'erro',
            mensagem: result.mensagem,
          });
        } else {
          setStatus({
            type: 'success',
            mensagem: result.mensagem,
          });
        }
      })
      .catch(() => {
        setStatus({
          type: 'success',
          mensagem: 'Cadastro não alterado, tente novamente mais tarde1',
        });
      });
  };

  return (
    <S.Main>
      {status.type == 'success' ? <p>Cadastro alterado com sucesso</p> : null}
      <S.Container>
        <img src={foto} alt="foto-usuario" />
        <form onSubmit={edit}>
          <Input
            height="25px"
            padding="50px"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            height="25px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            height="25px"
            value={nascimento}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            height="25px"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <Input
            height="25px"
            width="250px"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <Input
            height="25px"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <Input
            height="25px"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />

          <S.Button>
            <Button>Editar</Button>
            <Button onClick={() => setIsVisible(true)}>Excluir cadastro</Button>
          </S.Button>
          {isVisible && <Modal page={<BotaoExcluir />} />}
        </form>
      </S.Container>
    </S.Main>
  );
};

export default Usuario;
