//Esto cambiará a class Api cuando se agreguen más funcionalidades en etapa 2

// URL base (Cambiamos esto al desplegar)
export const BASE_URL = "http://localhost:3000";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

// Función para enviar la orden
export const createOrder = (orderData) => {
  return fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  }).then(checkResponse);
};
