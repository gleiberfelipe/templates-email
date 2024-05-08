'use client'

import { useState } from 'react'
import Image from 'next/image'

import Globe from '../../../public/header/globe.svg'

import * as S from './style'

interface HeaderProps {
  number: '1' | '2' | '3' | '4'
}

export function Header({ number }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.Header $theme={number}>
      <S.Container>
        <S.Logo></S.Logo>
        <S.Nav>
          <S.Ul>
            <S.Li>LOREM</S.Li>
            <S.Li>LOREM</S.Li>
            <S.Li>LOREM</S.Li>
            <S.Li>LOREM</S.Li>
            <S.Li>LOREM</S.Li>
          </S.Ul>
        </S.Nav>

        {isOpen && (
          <S.menuMobile $theme={number}>
            <S.buttonCloseMenu
              className="close-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="icon">X</span>
            </S.buttonCloseMenu>
            <S.navMenuMobile>
              <S.ulMobile>
                <S.liMobile>LOREM</S.liMobile>
                <S.liMobile>LOREM</S.liMobile>
                <S.liMobile>LOREM</S.liMobile>
                <S.liMobile>LOREM</S.liMobile>
                <S.liMobile>LOREM</S.liMobile>
              </S.ulMobile>
            </S.navMenuMobile>
          </S.menuMobile>
        )}

        <S.divLogin>
          <S.Lenguage>
            <Image src={Globe} alt="Ícone de um Globo" />
            <S.Span>EN</S.Span>
          </S.Lenguage>

          <S.Button $theme={number}>Login</S.Button>

          <S.Menu onClick={toggleMenu}>
            <S.Line />
            <S.Line />
            <S.Line />
          </S.Menu>
        </S.divLogin>
      </S.Container>
    </S.Header>
  )
}
