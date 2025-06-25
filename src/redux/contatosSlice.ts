import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Contato {
    id: string
    nome: string
    email: string
    telefone: string
}

interface ContatosState {
    itens: Contato[]
}

const initialState: ContatosState = {
    itens: []
}

const contatosSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        adicionar: (state, action: PayloadAction<Contato>) => {
            state.itens.push(action.payload)
        },
        remover: (state, action: PayloadAction<string>) => {
            state.itens = state.itens.filter((c) => c.id !== action.payload)
        },
        editar: (state, action: PayloadAction<Contato>) => {
            const index = state.itens.findIndex((c) => c.id === action.payload.id)
            if (index !== -1) {
                state.itens[index] = action.payload
            }
        }
    }
})

export const { adicionar, remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
