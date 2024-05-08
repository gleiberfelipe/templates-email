import { Avaliacao } from '@/components/avaliacoes/avaliacoes'
import { Botao } from '@/components/botao/botao.'
import { ConteudoPrincipal } from '@/components/conteudo-principal/conteudo-principal'
import { Conteudo } from '@/components/conteudo/conteudo'
import { Header } from '@/components/header/header'
import { Principal } from '@/components/principal/principal'
import { Rodape } from '@/components/rodape/rodape'

export default function Page2() {
  return (
    <>
      <Header number="2" />
      <Principal number="2" />
      <ConteudoPrincipal />
      <Conteudo number="2" />
      <Botao number="2" />
      <Avaliacao number="2" />
      <Rodape number="2" />
    </>
  )
}
