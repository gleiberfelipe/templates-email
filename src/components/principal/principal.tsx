'use client'

import Image from 'next/image'

import Pizza from '../../../public/principal/pizza.svg'

import * as S from './style'

interface PrincipalProps {
  number: '1' | '2' | '3' | '4'
}

export function Principal({ number }: PrincipalProps) {
  return (
    <S.Section>
      <S.Container>
        <S.Content>
          <S.Div>
            <S.H1>Lorem ipsum dolor sit amet deliriem</S.H1>
            <S.Span>
              Lorem ipsum dolor sit amet consectetur delirem sit lorem ipsum
              amet delirium consetectur
            </S.Span>
          </S.Div>

          <S.Button $theme={number}>Lorem ipsum</S.Button>
        </S.Content>

        <Image className="Image" src={Pizza} alt="Imagem de um pizza" />
      </S.Container>
    </S.Section>
  )
}
