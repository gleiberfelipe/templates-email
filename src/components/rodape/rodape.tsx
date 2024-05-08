'use client'

import Image from 'next/image'

import ArrowRight from '../../../public/rodape/arrow-right.svg'
import Linkedin from '../../../public/rodape/linkedin.svg'
import Facebook from '../../../public/rodape/facebook.svg'
import Git from '../../../public/rodape/git.svg'

import * as S from './style'

interface RodapeProps {
  number: '1' | '2' | '3' | '4'
}

export function Rodape({ number }: RodapeProps) {
  return (
    <S.Footer $theme={number}>
      <S.Container>
        <S.Content>
          <S.divInformation>
            <S.Div>
              <S.H1>Lorem ipsum</S.H1>

              <div>
                <S.Span>Diam orci</S.Span>
                <S.Span>Mi feugiat</S.Span>
                <S.Span>Netus fermentum</S.Span>
                <S.Span>Suspendisse viverra</S.Span>
                <S.Span>Id dolor</S.Span>
                <S.Span>Erat mattis</S.Span>
              </div>
            </S.Div>

            <S.Div>
              <S.H1>Lorem ipsum</S.H1>

              <div>
                <S.Span>Nibh</S.Span>
                <S.Span>Egestas</S.Span>
                <S.Span>Dictum</S.Span>
              </div>
            </S.Div>

            <S.Div>
              <S.H1>Lorem ipsum</S.H1>

              <div>
                <S.Span>Id maecenas</S.Span>
                <S.Span>Id orci</S.Span>
                <S.Span>Magna ultricies</S.Span>
                <S.Span>Quis risus</S.Span>
              </div>
            </S.Div>
          </S.divInformation>

          <S.ContainerEmail $theme={number}>
            <S.divEmail>
              <S.H1>Lorem ipsum</S.H1>

              <S.inputEmail>
                <S.Input placeholder="Email" />
                <S.divButton $theme={number}>
                  <Image
                    src={ArrowRight}
                    alt="Ícone de uma flecha virada para a direita"
                  />
                </S.divButton>
              </S.inputEmail>

              <S.spanEmail>
                Gravida sed justo, justo, id est et. Amet tristique convallis
                sed porttitor nullam eu ut. Duis et odio aliquam bibendum. Metus
                et lectus id viverra fringilla magna morbi.{' '}
              </S.spanEmail>
            </S.divEmail>
          </S.ContainerEmail>
        </S.Content>

        <S.divLine></S.divLine>

        <S.containerInfos>
          <S.divInfos>
            <S.Nav>
              <S.Ul>
                <S.Li>termos</S.Li>
                <S.Li>Privacidade</S.Li>
                <S.Li>Cookies</S.Li>
              </S.Ul>
            </S.Nav>

            <S.divIcons>
              <Image src={Linkedin} alt="Ícone do Linkedin" />
              <Image src={Facebook} alt="Ícone do Facebook" />
              <Image src={Git} alt="Ícone do Git" />
            </S.divIcons>
          </S.divInfos>
        </S.containerInfos>
      </S.Container>
    </S.Footer>
  )
}
