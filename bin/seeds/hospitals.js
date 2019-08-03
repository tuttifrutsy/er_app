const mongoose = require( 'mongoose');
const Hospital = require('../../models/Hospital.js');

const hospitals = [
  {
    name: "Instituto Nacinal de Nutrición Salvador Suvirán",
    description:
      "El Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán, INCMNSZ Es uno de los Institutos Nacionales de Salud de la Secretaría de Salud de México que brinda atención médica de tercer nivel a adultos",
    profileImage:
      "https://media.licdn.com/dms/image/C4E0BAQEsdQQwhsKmCA/company-logo_200_200/0?e=2159024400&v=beta&t=mHKYb5o6fSudZB0p7OWJxwMhzSABTnT-DA1RKYZvRAM",
    phone_number: 54870900,
    emergencyType: "LEVEL3",
    direction: {
      address: "Vasco de Quiroga 15",
      neighborhood: "Seccion XVI",
      city: "Tlalpan",
      zipcode: 14000,
      website: "https://www.incmnsz.mx/"
    }
  },
  {
    name: "Centro Médico ABC Santa Fe",
    description:
      "El Centro Médico ABC es el único hospital en México que cuenta con Prácticas Médicas Grupales en el que especialistas de diversas disciplinas trabajan en colaboración, para tener una mejor coordinación con el hospital, realizar el diagnóstico más preciso, determinar el mejor tratamiento y dar el seguimiento más adecuado a nuestros pacientes.",
    profileImage:
      "https://centromedicoabc.com/wp-content/uploads/2019/03/home-abc.jpg",
    phone_number: 54870900,
    emergencyType: "LEVEL3",
    direction: {
      address: "Carlos Graef Fernández 154",
      neighborhood: "Tlaxala Santa Fe",
      city: "Cuajimalma",
      zipcode: 05300,
      website: "https://centromedicoabc.com/"
    }
  },
  {
    name: "Médica sur",
    description:
      "El Servicio de Urgencias del Hospital Médica Sur te ofrece atención médica oportuna, profesional y ética las 24 horas del día, los 365 días del año.",
    profileImage:
      "https://images.hulilabs.com/thumbnail/huli/clinic/photo/11102017/12444/300x215/393238e06927eea98a9cd1bbc69e05da.jpg",
    phone_number: 54870900,
    emergencyType: "LEVEL3",
    direction: {
      address: "Puente de Piedra 150",
      neighborhood: "Toriello Guerra",
      city: "Tlalpan",
      zipcode: 14050,
      website: "www.medicasur.com.mx"
    }
  },
  {
    name: "Hospital Angeles Clínica Londres",
    description:
      "Brindamos atención de calidad con calidez en instalaciones confortables, modernas y seguras para nuestros pacientes.",
    profileImage:
      "https://www.tocdoc.com/sites/default/files/consultorios/clinica_londres.jpg",
    phone_number: 54870900,
    emergencyType: "LEVEL2",
    direction: {
      address: "Durango 64",
      neighborhoord: "Roma",
      city: "",
      zipcode: 06700,
      website: "https://hospitalesangeles.com/clinicalondres/"
    }
  },
  {
    name: "Hospital Infantil Privado",
    description:
      "Star Médica Hip cuenta con más de 40 años de experiencia en la atención, docencia, e investigación en pediatría y neonatología, lo que nos permite ofrecer soluciones médicas integrales",
    profileImage:
      "http://www.pmfarma.com.mx/noticias/noticias/9688/image/1.jpg",
    phone_number: 54870900,
    emergencyType: "LEVEL2",
    direction: {
      address: " Viaducto Río Becerra 97",
      neighborhood: "Nápoles",
      city: "Benito Juárez",
      zipcode: 14000,
      website: "https://www.starmedica.com"
    }
  },
  {
    name: "Hospital Ángeles Mocel ",
    description: "",
    profileImage:
      "https://hospitalesangeles.com/adminlabase/images/galeria/small/MOCEL.jpg",
    phone_number: 54870900,
    emergencyType: "LEVEL1",
    direction: {
      address: " Gelati 27",
      neighborhood: " San Miguel Chapultepec",
      city: "Benito Juárez",
      zipcode: 14000,
      website: "https://hospitalesangeles.com/mocel"
    }
  },
  {
    name: "Hospital de Jesús  ",
    description:
      "Somos la primera institución médica de calidad en el Centro Histórico de la Ciudad de México, con 500 años de historia y tradición, promoviendo y conservando la salud de la población",
    profileImage: "http://img.chilango.com/2017/04/hospital-de-jesus-1.jpg",
    phone_number: 54870900,
    emergencyType: "LEVEL1",
    direction: {
      address: " Av. 20 de Noviembre 82",
      neighborhood: "Centro",
      city: "Benito Juárez",
      zipcode: 14000,
      website: "http://www.hospitaldejesus.com.mx/"
    }
  },
  {
    name: "Hospital Trinidad",
    description:
      " El Hospital Trinidad está apoyado por personal con una preparación altamente especializada en las áreas de Urgencias y Hospitalización.",
    profileImage: "http://www.trinidad.com.mx/imagenes/banner.png",
    phone_number: 54870900,
    emergencyType: "LEVEL1",
    direction: {
      address: " Manzanillo 94",
      neighborhood: "Roma",
      city: "Benito Juárez",
      zipcode: 14000,
      website: "www.trinidad.com.mx/"
    }
  }
];

mongoose
  .connect(
    `mongodb+srv://Admin:${
      process.env.PWDB
    }@cluster0-zuf3q.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Hospital.insertMany(hospitals);