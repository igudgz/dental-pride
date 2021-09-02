import React, { useState, useContext } from 'react';
import * as S from './styles.js';
import portal from '../../assets/portal.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import { useHistory } from 'react-router-dom';

import Modal from '../Modals/ModalContainer';
import CadastroPaciente from '../Modals/CadastroPaciente';
import Login from '../Modals/Login';
import { Context } from '../ValidaLogin/Context';

export default function Footer() {
  const [loginModal, setLoginModal] = useState(false);
  const [cadastroModal, setCadastroModal] = useState(false);
  const history = useHistory();
  const { usuario, setUsuario, logado, setLogado } = useContext(Context);
  return (
    <>
      {!logado ? (
        <S.Footer>
          <S.Descricao>
            <h1>Dental Pride</h1>
            <p>
              A Dental Pride nasceu para oferecer a você mais qualidade de vida,
              saúde e muitos sorrisos no seu dia a dia! Nosso objetivo é
              propagar alegria para nossos investidores, colaboradores e, claro,
              nossos pacientes. Acreditamos que tudo que é bom começa com um
              sorriso, inclusive grandes negócios.
            </p>
          </S.Descricao>

          <S.Nav>
            <S.Span>Acesso Rápido</S.Span>
            <S.Link
              onClick={() => {
                setLoginModal(true);
              }}
            >
              {' '}
              <img src={portal} alt="portal" /> Portal do paciente
            </S.Link>
            {loginModal && (
              <Modal setOpenModal={setLoginModal} page={<Login />} />
            )}
            <S.Link onClick={() => history.push('/fundadores')}>
              Fundadores
            </S.Link>
            <S.Link onClick={() => history.push('/faleconosco')}>
              Fale Conosco
            </S.Link>
            <S.Link
              onClick={() => {
                setCadastroModal(true);
              }}
            >
              Cadastre-se
            </S.Link>
            {cadastroModal && (
              <Modal
                cadastro
                setOpenModal={setCadastroModal}
                page={<CadastroPaciente />}
              />
            )}
          </S.Nav>
          <S.Nav>
            <S.Span>Redes Sociais</S.Span>
            <div>
              <img src={linkedin} alt="linkedin" />

              <img src={facebook} alt="facebook" />

              <img src={instagram} alt="instagram" />
            </div>
          </S.Nav>
        </S.Footer>
      ) : (
        <S.Footer>
          <S.Descricao>
            <h1>Dental Pride</h1>
            <p>
              A Dental Pride nasceu para oferecer a você mais qualidade de vida,
              saúde e muitos sorrisos no seu dia a dia! Nosso objetivo é
              propagar alegria para nossos investidores, colaboradores e, claro,
              nossos pacientes. Acreditamos que tudo que é bom começa com um
              sorriso, inclusive grandes negócios.
            </p>
          </S.Descricao>
          <S.Nav>
            <S.Span>Acesso Rápido</S.Span>
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
          </S.Nav>
          <S.Nav>
            <S.Span>Redes Sociais</S.Span>
            <div>
              <img src={linkedin} alt="linkedin" />

              <S.Link>
                <img src={facebook} alt="facebook" />
              </S.Link>
              <S.Link>
                <img src={instagram} alt="instagram" />
              </S.Link>
            </div>
          </S.Nav>
        </S.Footer>
      )}
    </>
  );
}
