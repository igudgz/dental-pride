import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import su from '../../assets/su.jpeg';
import daniel from '../../assets/daniel.jpeg';
import igor from '../../assets/igor.jpeg';
import paulo from '../../assets/paulo.jpeg';
import linkedin from '../../assets/linkedin.png';
import * as S from './styles';

export default function Fundadores() {
  return (
    <>
      <Header />
      <S.Container>
        <div>
          <S.Titulo>Fundadores</S.Titulo>
          <div>
            <S.Card>
              <img src={su} alt="suellen"></img>
              <p>Suellen Venâncio da Silva</p>
              <p>Desenvolvedora Full Stack</p>

              <S.Div>
                <img src={linkedin} alt="linkedin" />
                <p>suellenvenancio</p>
              </S.Div>
            </S.Card>

            <S.Card>
              <img src={daniel} alt="daniel"></img>
              <p>Daniel de Lemos Rocha</p>
              <p>Desenvolvedor Full Stack</p>

              <S.Div>
                <img src={linkedin} alt="linkedin" />
                <p>daniel-de-lemos-rocha-dev</p>
              </S.Div>
            </S.Card>

            <S.Card>
              <img src={igor} alt="igor"></img>
              <p>Francisco Igor Rodrigues</p>
              <p>Desenvolvedor Full Stack</p>

              <S.Div>
                <img src={linkedin} alt="linkedin" />
                <p>igorrodrigues-dev</p>
              </S.Div>
            </S.Card>

            <S.Card>
              <img src={paulo} alt="paulo"></img>
              <p>Paulo Sérgio</p>
              <p>Desenvolvedor Full Stack</p>

              <S.Div>
                <img src={linkedin} alt="linkedin" />
                <p>paulo-sergio-jr</p>
              </S.Div>
            </S.Card>
          </div>
        </div>
      </S.Container>
      <Footer />
    </>
  );
}
