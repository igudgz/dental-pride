import React, { useState, useContext } from 'react';
import * as S from './Header.styles';
import portal from '../../assets/portal.png';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
//Parte Modal.
import ModalContainer from '../Modals/ModalContainer';
import CadastroPaciente from '../Modals/CadastroPaciente';
import Login from '../Modals/Login';
import { Context } from '../ValidaLogin/Context';
const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [cadastroModal, setCadastroModal] = useState(false);
  const history = useHistory();
  const { usuario, setUsuario, logado, setLogado } = useContext(Context);

  return (
    <>
      {!logado ? (
        <S.Header>
          <S.Nav>
            <div onClick={() => history.push('/')}>
              <S.Img logo src={logo} alt="logo" />
              <h1>Dental Pride</h1>
            </div>
            <div>
              <S.Link
                onClick={() => {
                  setLoginModal(true);
                }}
              >
                {' '}
                <S.Img src={portal} alt="portal" /> Portal do paciente
              </S.Link>
              {loginModal && (
                <ModalContainer setOpenModal={setLoginModal} page={<Login />} />
              )}
              <S.Link onClick={() => history.push('/fundadores')}>
                Fundadores
              </S.Link>
              <S.Link
                onClick={() => {
                  setCadastroModal(true);
                }}
              >
                Cadastre-se
              </S.Link>
              {cadastroModal && (
                <ModalContainer
                  cadastro
                  setOpenModal={setCadastroModal}
                  page={<CadastroPaciente />}
                />
              )}
              <S.Link onClick={() => history.push('/faleconosco')}>
                Fale Conosco
              </S.Link>
            </div>
          </S.Nav>
        </S.Header>
      ) : (
        <S.Header>
          <S.Nav>
            <div onClick={() => history.push('/')}>
              <S.Img logo src={logo} alt="logo" />
              <h1>Dental Pride</h1>
            </div>
            <div>
              <S.Link
                onClick={() => {
                  history.push(`/portal/${usuario.ID}`);
                }}
              >
                {' '}
                <img src={portal} alt="portal" /> Portal do paciente
              </S.Link>
              <S.Link onClick={() => history.push('/fundadores')}>
                Fundadores
              </S.Link>
              <S.Link onClick={() => history.push('/faleconosco')}>
                Fale Conosco
              </S.Link>
              <S.Link
                onClick={() => {
                  setUsuario(null);
                  setLogado(false);
                  history.push('/');
                }}
              >
                Logout
              </S.Link>
            </div>
          </S.Nav>
        </S.Header>
      )}
    </>
  );
};

export default Header;
