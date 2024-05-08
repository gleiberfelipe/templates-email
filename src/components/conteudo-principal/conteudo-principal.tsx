'use client'

import Image from 'next/image'

import Waffle from '../../../public/conteudo-principal/waffle.svg'
import Bolo from '../../../public/conteudo-principal/bolo.svg'

import * as S from './style'

export function ConteudoPrincipal() {
  return (
    <S.Section>
      <S.divTitle>
        <S.h1Title>Lorem Ipsum Dolor Sit Amet</S.h1Title>
        <S.spanTitle>Lorem ipsum dolor sit amet</S.spanTitle>
      </S.divTitle>

      <S.Content>
        <S.Div1>
          <Image className="Image" src={Waffle} alt="Imagem de um waffle" />

          <S.divDescription>
            <S.h1Description>
              Lorem Ipsum Dolor Sit Amet Consectetur Deliverium
            </S.h1Description>
            <S.spanDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt finibus tortor. Donec lobortis augue sed ante molestie,
              vitae maximus nunc semper.
            </S.spanDescription>
          </S.divDescription>
        </S.Div1>

        <S.Div2>
          <S.divDescription>
            <S.h1Description>
              Lorem Ipsum Dolor Sit Amet Consectetur Deliverium
            </S.h1Description>
            <S.spanDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              tincidunt finibus tortor. Donec lobortis augue sed ante molestie,
              vitae maximus nunc semper.
            </S.spanDescription>
          </S.divDescription>

          <Image className="Image" src={Bolo} alt="Imagem de um bolo" />
        </S.Div2>
      </S.Content>
    </S.Section>
  )
}
