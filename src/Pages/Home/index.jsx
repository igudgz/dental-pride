import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import Button from '../../Components/Form/Button';
import bannerHome2 from '../../assets/banner-home2.jpg';
import bannerHome1 from '../../assets/banner-home1.jpg';
import card1Img from '../../assets/card-1-home.png';
import card3Img from '../../assets/card-3-home.png';
import card2Img from '../../assets/card-2-home.png';
import card4Img from '../../assets/card-4-home.png';
import { CardEsp, CardHome } from '../../Components/Cards/Cards.styles';

//Parte Modal.
import Modal from '../../Components/Modals/ModalContainer';
import CadastroPaciente from '../../Components/Modals/CadastroPaciente';
import Login from '../../Components/Modals/Login';

import * as S from './styles.js';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const [loginModal, setLoginModal] = useState(false);
  const [cadastroModal, setCadastroModal] = useState(false);
  const history = useHistory();

  return (
    <S.GridContainer>
      <Header />
      <main>
        <Banner
          flexDirection="row"
          bannerPosition="bottom center"
          bannerPositionResponsive="center"
          url={bannerHome1}
        >
          <CardHome
            transparent
            height="80%"
            padding="20px 20px 20px 20px"
            margin="0px 0px 0px 23px"
            width="22%"
          >
            <S.P transparent lineHeight="1.5" serif size="24px">
              "Um sorriso muda tudo!"
            </S.P>
            <S.P transparent lineHeight="1.5" size="18px">
              Nós temos médicos de todos os departamentos para deixar ainda mais
              perfeito a curva mais bonita do ser humano: o SORRISO!
            </S.P>
            <Button
              onClick={() => {
                history.push('/dentistas');
              }}
              transparent
              height="50px"
            >
              Conheça nossos doutores!
            </Button>
          </CardHome>
        </Banner>
        <S.Section>
          <S.DivDesenho />
          <S.BalaoHome>
            <p>Agora com portal do cliente!</p>
          </S.BalaoHome>
          <CardHome width="22.5%" height="300px">
            <S.P width="50%" size="24px">
              Faça o login e agende sua avaliação!
            </S.P>
            <Button
              onClick={() => {
                setLoginModal(true);
              }}
              type="submit"
              height="40px"
              width="100px"
            >
              Login
            </Button>
            {loginModal && (
              <Modal setOpenModal={setLoginModal} page={<Login />} />
            )}
          </CardHome>
          <CardHome width="22.5%" height="300px">
            <S.P size="24px" width="50%">
              Cadastre-se e tenha vários benefícios!
            </S.P>
            <Button
              onClick={() => {
                setCadastroModal(true);
              }}
              type="submit"
              height="40px"
              width="100px"
            >
              Cadastrar
            </Button>
            {cadastroModal && (
              <Modal
                cadastro
                setOpenModal={setCadastroModal}
                page={<CadastroPaciente />}
              />
            )}
          </CardHome>
        </S.Section>
        <S.Section flexDirection="column">
          <S.Div width="20%">
            <p>Especialidades</p>
          </S.Div>
          <S.DivCard>
            <CardEsp>
              <img src={card1Img} alt="card 1" />
              <S.Div width="50%" marginLeft="62px">
                <p>Exames Especializados</p>
              </S.Div>
              <p>
                Exames especiais para ter o melhor diagnóstico para você ter o
                tratamento adequado.
              </p>
            </CardEsp>
            <CardEsp>
              <img src={card2Img} alt="card 2" />
              <S.Div width="50%" marginLeft="62px">
                <p>Restauração Dentária</p>
              </S.Div>
              <p>
                Restaurações da melhor qualidade para recuperar o seu dente que
                foi afetado por alguma razão.
              </p>
            </CardEsp>
            <CardEsp>
              <img src={card3Img} alt="card 3" />
              <S.Div width="50%" marginLeft="62px">
                <p>Aparelho Ortodôntico</p>
              </S.Div>
              <p>
                Um dos tratamentos mais comuns, temos aparelhos de todas as
                formas que deseja.
              </p>
            </CardEsp>
            <CardEsp>
              <img src={card4Img} alt="card 4" />
              <S.Div width="50%" marginLeft="62px">
                <p>Remoção de Cáries</p>
              </S.Div>
              <p>
                Médicos totalmente capacitados para acabar com o seu problema
                sem você ficar sentindo dores.
              </p>
            </CardEsp>
          </S.DivCard>
        </S.Section>
        <Banner
          flexDirection="row-reverse"
          bannerPosition="left center"
          url={bannerHome2}
        >
          <CardHome
            cardBanner
            height="80%"
            margin="20px 42px 0px 0px"
            width="25%"
          >
            <h1>Novas unidades em:</h1>
            <h2>Paraná</h2>
            <h2>São Paulo</h2>
            <Button
              onClick={() => {
                history.push('/faleconosco');
              }}
              width="160px"
              height="40px"
              type="submit"
            >
              Encontre Uma Unidade
            </Button>
          </CardHome>
        </Banner>
      </main>

      <Footer />
    </S.GridContainer>
  );
}
