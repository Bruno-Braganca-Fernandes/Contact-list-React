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
