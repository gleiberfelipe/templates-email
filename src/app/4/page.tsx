import { Avaliacao } from '@/components/avaliacoes/avaliacoes'
import { Botao } from '@/components/botao/botao.'
import { ConteudoPrincipal } from '@/components/conteudo-principal/conteudo-principal'
import { Conteudo } from '@/components/conteudo/conteudo'
import { Header } from '@/components/header/header'
import { Principal } from '@/components/principal/principal'
import { Rodape } from '@/components/rodape/rodape'

export default function Page4() {
  return (
    <>
      <Header number="4" />
      <Principal number="4" />
      <ConteudoPrincipal />
      <Conteudo number="4" />
      <Botao number="4" />
      <Avaliacao number="4" />
      <Rodape number="4" />
    </>
  )
}
