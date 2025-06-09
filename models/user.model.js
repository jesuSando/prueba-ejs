const usuarios = [
    { id: 1, nombre: 'Ana', correo: 'ana@example.com', edad: 25 },
    { id: 2, nombre: 'Luis', correo: 'luis@example.com', edad: 30 },
    { id: 3, nombre: 'Sofía', correo: 'sofia@example.com', edad: 28 },
];

export function getAll() { return usuarios; }

export function getById(id) { return usuarios.find(u => u.id === parseInt(id)); }
