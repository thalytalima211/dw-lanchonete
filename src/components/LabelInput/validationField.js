import React from 'react'

export function validateField(type, value, required) {
  const trimmed = value?.trim() ?? ''

  if (required && (!trimmed || trimmed === '')) {
    return 'Este campo é obrigatório.'
  }
}