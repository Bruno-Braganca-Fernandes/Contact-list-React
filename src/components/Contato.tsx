import { Card, Botoes } from './style'

interface Props {
  nome: string
  email: string
  telefone: string
  aoEditar: () => void
  aoRemover: () => void
}

const Contato = ({ nome, email, telefone, aoEditar, aoRemover }: Props) => (
  <Card>
    <div>
      <strong>{nome}</strong><br />
      {email}<br />
      {telefone}
    </div>
    <Botoes>
      <button onClick={aoEditar}>Editar</button>
      <button onClick={aoRemover}>Remover</button>
    </Botoes>
  </Card>
)

export default Contato
