'use client'

import Image from 'next/image'

import Email from '../../../public/botao/email.svg'
import Cozinheiro from '../../../public/botao/cozinheiro.svg'

import * as S from './style'

interface BotaoProps {
  number: '1' | '2' | '3' | '4'
}

export function Botao({ number }: BotaoProps) {
  return (
    <S.Section>
      <S.Content $theme={number}>
        <S.Div>
          <S.divTitle>
            <S.h1Title>Lorem ipsum Dolor sit amet</S.h1Title>
            <S.spanTitle>
              Fringilla non proin nec in in lorem amet eget ac. Mauris.
            </S.spanTitle>
          </S.divTitle>

          <S.divRegister>
            <S.divInput>
              <Image src={Email} alt="Ícone Email" />
              <S.Input placeholder="Email" />
            </S.divInput>

            <S.Button>Cadastrar</S.Button>
          </S.divRegister>
        </S.Div>

        <Image
          className="Image"
          src={Cozinheiro}
          alt="Ímagem de um cozinheiro"
        />
      </S.Content>
    </S.Section>
  )
}
