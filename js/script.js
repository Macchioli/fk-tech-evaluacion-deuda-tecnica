let paquetes = [
    { id: 1, nombre: 'Vacaciones en la Playa', reservado: false },
    { id: 2, nombre: 'Aventura en la Montaña', reservado: false }
  ];
  let filtro = 'todos';

  function renderizarPaquetes() {
    const listaPaquetes = document.getElementById('listaPaquetes');
    listaPaquetes.innerHTML = '';
    const paquetesFiltrados = paquetes.filter(paquete => {
      if (filtro === 'reservado') return paquete.reservado;
      if (filtro === 'disponible') return !paquete.reservado;
      return true;
    });

    paquetesFiltrados.forEach(paquete => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span style="text-decoration: ${paquete.reservado ? 'line-through' : 'none'};">
          ${paquete.nombre}
        </span>
        <button onclick="alternarReserva(${paquete.id})">Alternar Reserva</button>
        <button onclick="eliminarPaquete(${paquete.id})">Eliminar</button>
      `;
      listaPaquetes.appendChild(li);
    });
  }

  function agregarPaquete() {
    const input = document.getElementById('nuevoPaqueteNombre');
    const nombre = input.value.trim();
    if (nombre === '') return;
    paquetes.push({ id: Date.now(), nombre, reservado: false });
    input.value = '';
    renderizarPaquetes();
  }

  function alternarReserva(id) {
    paquetes = paquetes.map(paquete =>
      paquete.id === id ? { ...paquete, reservado: !paquete.reservado } : paquete
    );
    renderizarPaquetes();
  }

  function eliminarPaquete(id) {
    paquetes = paquetes.filter(paquete => paquete.id !== id);
    renderizarPaquetes();
  }

  function filtrarPaquetes(nuevoFiltro) {
    filtro = nuevoFiltro;
    renderizarPaquetes();
  }

  // Renderizar inicial
  renderizarPaquetes();