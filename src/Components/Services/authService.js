// src/Services/authService.js
export async function loginAdmin(email, password) {
    try {
        const response = await fetch('https://paseocomerciallasrosas.com/api/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Credenciales inválidas');
        }

        const data = await response.json();
        localStorage.setItem('adminToken', data.token); // Guarda el token en localStorage
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export function isAuthenticated() {
    return localStorage.getItem('adminToken') !== null;
}

export function logoutAdmin() {
    localStorage.removeItem('adminToken'); // Quita el token al cerrar sesión
}
