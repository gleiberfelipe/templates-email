import { Avaliacao } from '@/components/avaliacoes/avaliacoes'
import { Botao } from '@/components/botao/botao.'
import { ConteudoPrincipal } from '@/components/conteudo-principal/conteudo-principal'
import { Conteudo } from '@/components/conteudo/conteudo'
import { Header } from '@/components/header/header'
import { Principal } from '@/components/principal/principal'
import { Rodape } from '@/components/rodape/rodape'

export default function Page3() {
  return (
    <>
      <Header number="3" />
      <Principal number="3" />
      <ConteudoPrincipal />
      <Conteudo number="3" />
      <Botao number="3" />
      <Avaliacao number="3" />
      <Rodape number="3" />
    </>
  )
}
