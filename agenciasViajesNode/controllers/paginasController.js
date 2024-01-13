import {Viaje} from '../models/Viaje.js';

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    })
};

const paginaNosotros = (req, res) => {

    res.render('nosotros', {
        pagina: 'Nosotros'
    })
};

const paginaViajes = async (req, res) => {


    //Consultar base de datos
    const viajes = await Viaje.findAll();
    res.render('viajes', {
        pagina: 'Proxímos viajes',
        viajes,
    })
};

const paginaDetalleViaje = async (req, res) => {

    const {slug} = req.params;

    try {
        const viaje = await Viaje.findOne({where : { slug }});
        res.render('viaje', {
            pagina: 'Informacion viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }

}

const paginaTestimoniales = (req, res) => {

    res.render('testimoniales', {
        pagina: 'Testimoniales'
    })
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}