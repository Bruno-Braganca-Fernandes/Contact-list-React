import styled from 'styled-components'

export const Card = styled.div`
  background: #fff;
  padding: 16px;
  margin: 12px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  strong {
    font-size: 18px;
    color: #2c3e50;
  }

  span {
    display: block;
    font-size: 14px;
    color: #666;
  }
`

export const Botoes = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s ease;

    &:first-child {
      background-color: #3498db;

      &:hover {
        background-color: #2980b9;
      }
    }

    &:last-child {
      background-color: #e74c3c;

      &:hover {
        background-color: #c0392b;
      }
    }
  }
`
