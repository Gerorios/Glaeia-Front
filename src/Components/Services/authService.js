// src/Services/authService.js
import axios from 'axios';

export async function loginAdmin(email, password) {
    try {
        const response = await axios.post('http://localhost:8000/api/admin/login', { email, password });

        // Guardar el token en caso de respuesta exitosa
        localStorage.setItem('adminToken', response.data.token);
        return true;
    } catch (error) {
        // Manejar errores específicos según el tipo
        if (error.response && error.response.status === 401) {
            console.error('Credenciales inválidas');
        } else if (error.response && error.response.status === 403) {
            console.error('No autorizado');
        } else {
            console.error('Error inesperado en el servidor');
        }
        return false;
    }
}

export function isAuthenticated() {
    return localStorage.getItem('adminToken') !== null;
}

export function logoutAdmin() {
    localStorage.removeItem('adminToken'); // Quita el token al cerrar sesión
}
