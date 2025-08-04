import React from 'react'

export function maskField(type, value) {
    value = value.replace(/\D/g, ''); 
  switch (type) {
    case 'money': {
      if (!value) return 'R$ 0,00';

      const number = parseFloat(value) / 100
      return number.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
      });
    }
    default:
      return value
  }
}