import { Avaliacao } from '@/components/avaliacoes/avaliacoes'
import { Botao } from '@/components/botao/botao.'
import { ConteudoPrincipal } from '@/components/conteudo-principal/conteudo-principal'
import { Conteudo } from '@/components/conteudo/conteudo'
import { Header } from '@/components/header/header'
import { Principal } from '@/components/principal/principal'
import { Rodape } from '@/components/rodape/rodape'

export default function Home() {
  return (
    <>
      <Header number="1" />
      <Principal number="1" />
      <ConteudoPrincipal />
      <Conteudo number="1" />
      <Botao number="1" />
      <Avaliacao number="1" />
      <Rodape number="1" />
    </>
  )
}
