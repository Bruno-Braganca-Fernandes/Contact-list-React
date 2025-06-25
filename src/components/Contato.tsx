import styled from 'styled-components'

const Card = styled.div`
  background: #fff;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
  display: flex;
  justify-content: space-between;
`

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
    <div>
      <button onClick={aoEditar}>Editar</button>
      <button onClick={aoRemover}>Remover</button>
    </div>
  </Card>
)

export default Contato
