import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { adicionar, editar, remover, Contato as ContatoType } from '../redux/contatosSlice'
import Contato from '../components/Contato'
import { Container, Form } from './style'

const ListaContatos = () => {
  const dispatch = useDispatch()
  const contatos = useSelector((state: RootState) => state.contatos.itens)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [idEditando, setIdEditando] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const novoContato = {
      id: idEditando || Date.now().toString(),
      nome,
      email,
      telefone
    }

    if (idEditando) {
      dispatch(editar(novoContato))
      setIdEditando(null)
    } else {
      dispatch(adicionar(novoContato))
    }

    setNome('')
    setEmail('')
    setTelefone('')
  }

  const iniciarEdicao = (contato: ContatoType) => {
    setIdEditando(contato.id)
    setNome(contato.nome)
    setEmail(contato.email)
    setTelefone(contato.telefone)
  }

  return (
    <Container>
      <h1>Lista de Contatos</h1>
      <Form onSubmit={handleSubmit}>
        <input placeholder="Nome completo" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <input type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type='number' placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        <button type="submit">{idEditando ? 'Salvar edição' : 'Adicionar contato'}</button>
      </Form>

      {contatos.map((c) => (
        <Contato
          key={c.id}
          nome={c.nome}
          email={c.email}
          telefone={c.telefone}
          aoEditar={() => iniciarEdicao(c)}
          aoRemover={() => dispatch(remover(c.id))}
        />
      ))}
    </Container>
  )
}

export default ListaContatos
