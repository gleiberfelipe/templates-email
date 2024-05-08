'use client'

import Image from 'next/image'

import UploadCloud from '../../../public/conteudo/1/upload-cloud.svg'
import Watch from '../../../public/conteudo/1/watch.svg'
import Youtube from '../../../public/conteudo/1/youtube.svg'

import UploadCloud2 from '../../../public/conteudo/2/upload-cloud.svg'
import Watch2 from '../../../public/conteudo/2/watch.svg'
import Youtube2 from '../../../public/conteudo/2/youtube.svg'

import UploadCloud3 from '../../../public/conteudo/3/upload-cloud.svg'
import Watch3 from '../../../public/conteudo/3/watch.svg'
import Youtube3 from '../../../public/conteudo/3/youtube.svg'

import UploadCloud4 from '../../../public/conteudo/4/upload-cloud.svg'
import Watch4 from '../../../public/conteudo/4/watch.svg'
import Youtube4 from '../../../public/conteudo/4/youtube.svg'

import * as S from './style'

interface ConteudoProps {
  number: '1' | '2' | '3' | '4'
}

export function Conteudo({ number }: ConteudoProps) {
  return (
    <S.Section>
      <S.divTitle>
        <S.Div>
          <S.spanTitle>Rhoncus, accumsan dictum</S.spanTitle>
          <S.h1Title>Lorem ipsum dolor sit amet consectetur delirium</S.h1Title>
        </S.Div>
        <S.spanTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
          gravida purus.
        </S.spanTitle>
      </S.divTitle>

      <S.divCards>
        <S.Card>
          {number === '1' ? (
            <Image src={UploadCloud} alt="Ícone upload-cloud" />
          ) : number === '2' ? (
            <Image src={UploadCloud2} alt="Ícone upload-cloud" />
          ) : number === '3' ? (
            <Image src={UploadCloud3} alt="Ícone upload-cloud" />
          ) : (
            <Image src={UploadCloud4} alt="Ícone upload-cloud" />
          )}
          <S.divDescription>
            <S.h1Description>Lorem ipsum</S.h1Description>
            <S.spanDescription>
              Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus
              mattis etiam.
            </S.spanDescription>
          </S.divDescription>
        </S.Card>

        <S.Card>
          {number === '1' ? (
            <Image src={Watch} alt="Ícone upload-cloud" />
          ) : number === '2' ? (
            <Image src={Watch2} alt="Ícone upload-cloud" />
          ) : number === '3' ? (
            <Image src={Watch3} alt="Ícone upload-cloud" />
          ) : (
            <Image src={Watch4} alt="Ícone upload-cloud" />
          )}
          <S.divDescription>
            <S.h1Description>Lorem ipsum</S.h1Description>
            <S.spanDescription>
              Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus
              mattis etiam.
            </S.spanDescription>
          </S.divDescription>
        </S.Card>

        <S.Card>
          {number === '1' ? (
            <Image src={Youtube} alt="Ícone upload-cloud" />
          ) : number === '2' ? (
            <Image src={Youtube2} alt="Ícone upload-cloud" />
          ) : number === '3' ? (
            <Image src={Youtube3} alt="Ícone upload-cloud" />
          ) : (
            <Image src={Youtube4} alt="Ícone upload-cloud" />
          )}
          <S.divDescription>
            <S.h1Description>Lorem ipsum</S.h1Description>
            <S.spanDescription>
              Aliquam vehicula pellentesque id mi quam ipsum. Arcu nisl faucibus
              mattis etiam.
            </S.spanDescription>
          </S.divDescription>
        </S.Card>
      </S.divCards>
    </S.Section>
  )
}
