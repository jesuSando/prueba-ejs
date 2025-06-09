const usuarios = [
    { id: 1, nombre: 'Ana', correo: 'ana@example.com', edad: 25 },
    { id: 2, nombre: 'Luis', correo: 'luis@example.com', edad: 30 },
    { id: 3, nombre: 'Sofía', correo: 'sofia@example.com', edad: 28 },
    { id: 4, nombre: 'Luis', correo: 'luis@example.com', edad: 30 },
    { id: 5, nombre: 'Sofía', correo: 'sofia@example.com', edad: 28 },
    { id: 6, nombre: 'Luis', correo: 'luis@example.com', edad: 30 },
    { id: 7, nombre: 'Sofía', correo: 'sofia@example.com', edad: 28 },
    { id: 8, nombre: 'Luis', correo: 'luis@example.com', edad: 30 },
    { id: 9, nombre: 'Sofía', correo: 'sofia@example.com', edad: 28 },
    { id: 10, nombre: 'Luis', correo: 'luis@example.com', edad: 30 },
  ];
  
  exports.getAll = () => usuarios;
  
  exports.getById = (id) => usuarios.find(u => u.id === parseInt(id));
  