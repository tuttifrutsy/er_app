const mongoose = require('mongoose')
const Ambulance = require('../../models/Ambulance');

const ambulances = [
  {
    description:
      'Ambulancia convencional de transporte "No Urgente", donde la persona no puede sufrir un riesgo vital',
    numeroEcinomico: 9023,
    placas: "AMB9023",
    profileImage: "http://www.taxisyambulanciasandrades.com/img/tc01.jpeg",
    movil_number: 5500009023,
    company: "Cruz Roja",
    ambulanceType: "LEVEL1"
  },
  {
    description:
      'Ambulancia de transporte "Urgente", donde la persona esta enferma, proporciona soporte vital básico y atención inicial',
    numeroEcinomico: 5023,
    placas: "SVB9023",
    profileImage: "http://www.taxisyambulanciasandrades.com/img/svb01.jpeg",
    movil_number: 5500005023,
    company: "ERUM",
    ambulanceType: "LEVEL2"
  },
  {
    description:
      'Ambulancia de transporte "Crítico", la vida de la persona sufre un riesgo vital urgente, proporcina asistencia médica durante el trayecto y soporte vital avanzado',
    numeroEcinomico: 7028,
    placas: "ACL9023",
    profileImage: "http://www.taxisyambulanciasandrades.com/img/sva01.jpeg",
    movil_number: 5500007028,
    company: "GNP",
    ambulanceType: "LEVEL3"
  },
  {
    description:
      'Ambulancia convencional de transporte "No Urgente", donde la persona no puede sufrir un riesgo vital',
    numeroEcinomico: 9027,
    placas: "SVB9023",
    profileImage: "http://www.taxisyambulanciasandrades.com/img/tc01.jpeg",
    movil_number: 5500009027,
    company: "Cruz Roja",
    ambulanceType: "LEVEL1"
  },
  {
    description:
      'Ambulancia de transporte "Urgente", donde la persona esta enferma, proporciona soporte vital básico y atención inicial',
    numeroEcinomico: 5025,
    placas: "SVB9023",
    profileImage: "http://www.taxisyambulanciasandrades.com/img/svb01.jpeg",
    movil_number: 5500005025,
    company: "Cruz Roja",
    ambulanceType: "LEVEL2"
  },
  {
    description:
      'Ambulancia de transporte "Crítico", la vida de la persona sufre un riesgo vital urgente, proporcina asistencia médica durante el trayecto y soporte vital avanzado',
    numeroEcinomico: 7021,
    placas: "SVB9023",
    profileImage: "http://www.taxisyambulanciasandrades.com/img/sva01.jpeg",
    movil_number: 5500007021,
    company: "Cruz Roja",
    ambulanceType: "LEVEL3"
  },
  {
    description:
      'Ambulancia convencional de transporte "No Urgente", donde la persona no puede sufrir un riesgo vital',
    numeroEcinomico: 9029,
    placas: "SVB9023",
    profileImage: "http://www.taxisyambulanciasandrades.com/img/tc01.jpeg",
    movil_number: 5500009029,
    company: "Cruz Roja",
    ambulanceType: "LEVEL1"
  },
  {
    description:
      'Ambulancia de transporte "Urgente", donde la persona esta enferma, proporciona soporte vital básico y atención inicial',
    numeroEcinomico: 9023,
    placas: "SVB9023",
    profileImage: "http://www.taxisyambulanciasandrades.com/img/svb01.jpeg",
    movil_number: 5500009023,
    company: "Cruz Roja",
    ambulanceType: "LEVEL2"
  },
  {
    description:
      'Ambulancia de transporte "Crítico", la vida de la persona sufre un riesgo vital urgente, proporcina asistencia médica durante el trayecto y soporte vital avanzado',
    numeroEcinomico: 9023,
    placas: "SVB9023",
    profileImage: "http://www.taxisyambulanciasandrades.com/img/sva01.jpeg",
    movil_number: 5500009023,
    company: "Cruz Roja",
    ambulanceType: "LEVEL3"
  }
];

mongoose
  .connect(`mongodb+srv://Admin:${process.env.PWDB}@cluster0-zuf3q.mongodb.net/test?retryWrites=true&w=majority`,{ useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Ambulance.insertMany(ambulances);