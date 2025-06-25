import styled from 'styled-components'

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export const Form = styled.form`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;

  input {
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 16px;
    transition: border-color 0.2s;

    &:focus {
      border-color: #3498db;
      outline: none;
    }
  }

  button {
    background-color: #2ecc71;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: none;
    padding: 12px;
    border-radius: 6px;
    transition: background-color 0.2s;

    &:hover {
      background-color: #27ae60;
    }
  }
`
