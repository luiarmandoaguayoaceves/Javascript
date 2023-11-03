const usuario = {
    nombre: 'Luis',
    edad: 27,
    informacion () {
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad} `);
    },
    mascota: {
        nombre: 'Kira',
        edad: 2,
        informacion () {
            console.log(`El nombre de la mascota es ${this.nombre} y su edad es de ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();