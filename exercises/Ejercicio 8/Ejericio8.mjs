class Vehiculo {
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
  }

  descripcion() {
    return `Este vehículo es un ${this.marca} ${this.modelo} de ${this.año}`;
  }
}

class Auto extends Vehiculo {
  constructor(marca, modelo, año, puertas) {
    super(marca, modelo, año);
    this.puertas = puertas;
  }

  descripcion() {
    return `Este vehículo es un ${this.marca} ${this.modelo} de ${this.año} con ${this.puertas} puertas`;
  }
}

export { Vehiculo, Auto };
