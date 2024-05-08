'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import Avatar from '../../../public/avaliacoes/avatar.svg'

import Star from '../../../public/avaliacoes/1/star.svg'
import Star2 from '../../../public/avaliacoes/2/star.svg'
import Star3 from '../../../public/avaliacoes/3/star.svg'
import Star4 from '../../../public/avaliacoes/4/star.svg'

import * as S from './style'
import 'swiper/css'
import 'swiper/css/navigation'

interface AvaliacaoProps {
  number: '1' | '2' | '3' | '4'
}

export function Avaliacao({ number }: AvaliacaoProps) {
  const conteudo = [
    {
      texto:
        '“Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc.”',
      nome: 'João da Silva',
    },
    {
      texto:
        '“Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc.”',
      nome: 'Maria Silva',
    },
    {
      texto:
        '“Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc.”',
      nome: 'Maria Silva',
    },
    {
      texto:
        '“Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc.”',
      nome: 'Maria Silva',
    },
    {
      texto:
        '“Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc.”',
      nome: 'Maria Silva',
    },
    {
      texto:
        '“Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc.”',
      nome: 'Maria Silva',
    },
    {
      texto:
        '“Orci vel eget in eu. Integer amet porttitor hendrerit etiam arcu, aliquet duis pretium consequat. Semper sed viverra enim ut nunc.”',
      nome: 'Maria Silva',
    },
  ]

  return (
    <S.Section>
      <S.divTitle>
        <S.h1Title>Lorem Ipsum Dolor Sit Amet</S.h1Title>
        <S.spanTitle>Lorem ipsum dolor sit amet</S.spanTitle>
      </S.divTitle>

      <S.containerAssessments>
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            770: {
              slidesPerView: 2,
            },
          }}
          className="mySwiper"
        >
          {conteudo.map((item, index) => {
            return (
              <SwiperSlide className="slide" key={index}>
                <S.Div>
                  <S.divStars>
                    {number === '1'
                      ? Array.from({ length: 5 }).map((_, index) => {
                          return (
                            <Image
                              key={index}
                              className="img"
                              src={Star}
                              alt="Ícone de uma estrela"
                            />
                          )
                        })
                      : number === '2'
                        ? Array.from({ length: 5 }).map((_, index) => {
                            return (
                              <Image
                                key={index}
                                className="img"
                                src={Star2}
                                alt="Ícone de uma estrela"
                              />
                            )
                          })
                        : number === '3'
                          ? Array.from({ length: 5 }).map((_, index) => {
                              return (
                                <Image
                                  key={index}
                                  className="img"
                                  src={Star3}
                                  alt="Ícone de uma estrela"
                                />
                              )
                            })
                          : Array.from({ length: 5 }).map((_, index) => {
                              return (
                                <Image
                                  key={index}
                                  className="img"
                                  src={Star4}
                                  alt="Ícone de uma estrela"
                                />
                              )
                            })}
                  </S.divStars>

                  <S.Span>{item.texto}</S.Span>

                  <S.divProfile>
                    <Image
                      src={Avatar}
                      alt="Imagem de um avatar de um pessoa"
                    />
                    <S.spanProfile>{item.nome}</S.spanProfile>
                  </S.divProfile>
                </S.Div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </S.containerAssessments>
    </S.Section>
  )
}
