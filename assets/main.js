let Radiologia = [
    {
        Hora:"11:00",
        Especialista:"Ignacio Schulz", 
        Paciente:"Francisca Rojas", 
        Rut:"9878782-1",
        Prevision:"Fonasa",
    },
    {
        Hora:"11:30",
        Especialista:"Federico Subercaseaux", 
        Paciente:"Pamela Estrada", 
        Rut:"15345241-3",
        Prevision:"Isapre",
    },
    {
        Hora:"15:00",
        Especialista:"Fernando Wurthz", 
        Paciente:"Armando Luna", 
        Rut:"16445345-9",
        Prevision:"Isapre",
    },
    {
        Hora:"15:30",
        Especialista:"Ana Maria Godoy", 
        Paciente:"Manuel Godoy", 
        Rut:"17666419-0",
        Prevision:"Fonasa",
    },
    {
        Hora:"16:00",
        Especialista:"Patricia Suazo", 
        Paciente:"Ramon Ulloa", 
        Rut:"14989389-K",
        Prevision:"Fonasa",
    },
];

let Traumatologia = [
    {
        Hora:"8:00",
        Especialista:"Maria Paz Altuzarra", 
        Paciente:"Paula Sanchez", 
        Rut:"15554147-9",
        Prevision:"Fonasa",
    },
    {
        Hora:"10:00",
        Especialista:"Raul Araya", 
        Paciente:"Angelica Navas", 
        Rut:"15444147-9",
        Prevision:"Isapre",
    },
    {
        Hora:"10:30",
        Especialista:"Maria Arriagada", 
        Paciente:"Ana Klapp", 
        Rut:"17789423-9",
        Prevision:"Isapre",
    },
    {
        Hora:"11:00",
        Especialista:"Alejandro Badilla", 
        Paciente:"Felipe Mardones", 
        Rut:"15474236-6",
        Prevision:"Isapre",
    },
    {
        Hora:"11:30",
        Especialista:"Cecilia Budnik", 
        Paciente:"Diego Marre", 
        Rut:"16554741-K",
        Prevision:"Fonasa",
    },
    {
        Hora:"12:00",
        Especialista:"Arturo Cavagnaro", 
        Paciente:"Cecilia Mendez", 
        Rut:"9747535-8",
        Prevision:"Isapre",
    },
    {
        Hora:"12:30",
        Especialista:"Andres Kanacri", 
        Paciente:"Marcial Suazo", 
        Rut:"11254785-5",
        Prevision:"Isapre",
    },
];

let Dental = [
    {
        Hora:"8:30",
        Especialista:"Andres Zuñiga", 
        Paciente:"Marcela Retamal", 
        Rut:"11123425-6",
        Prevision:"Isapre",
    },
    {
        Hora:"11:00",
        Especialista:"Maria Pia Zañartu", 
        Paciente:"Angel Muñoz", 
        Rut:"9878789-2",
        Prevision:"Isapre",
    },
    {
        Hora:"11:30",
        Especialista:"Scarlett Wittig", 
        Paciente:"Mario Kast", 
        Rut:"7998789-5",
        Prevision:"Fonasa",
    },
    {
        Hora:"13:00",
        Especialista:"Francisco Von Teuber", 
        Paciente:"Karin Fernandez", 
        Rut:"18887662-K",
        Prevision:"Fonasa",
    },
    {
        Hora:"13:30",
        Especialista:"Eduardo Viñuela", 
        Paciente:"Hugo Sanchez", 
        Rut:"17665461-4",
        Prevision:"Fonasa",
    },
    {
        Hora:"14:00",
        Especialista:"Raquel Villaseca", 
        Paciente:"Ana Sepulveda", 
        Rut:"14441281-0",
        Prevision:"Isapre",
    },
];

// Agregar objetos a Traumatología:

Traumatologia.push(
{
    Hora:"9:00",
    Especialista:"René Poblete", 
    Paciente:"Ana Gellona", 
    Rut:"13123329-7",
    Prevision:"Isapre",
},
{
    Hora:"9:30",
    Especialista:"María Solar", 
    Paciente:"Ramiro Andrade", 
    Rut:"12221451-K",
    Prevision:"Fonasa",
},
{
    Hora:"10:00",
    Especialista:"Raul Loyola", 
    Paciente:"Carmen Isla", 
    Rut:"10112348-3",
    Prevision:"Isapre",
},
{
    Hora:"10:30",
    Especialista:"Antonio Larenas", 
    Paciente:"Pablo Loayza", 
    Rut:"13453234-1",
    Prevision:"Isapre",
},
{
    Hora:"12:00",
    Especialista:"Matías Aravena", 
    Paciente:"Susana Poblete", 
    Rut:"14345656-6",
    Prevision:"Fonasa",
},
);

//Eliminar primer y ultimo elemento de Radiologia

Radiologia.shift()
Radiologia.pop()


//Tablas

let texto ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>"
let texto2 ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>"
let texto3 ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>"

for(let i=0; i<Radiologia.length; i++){
    texto += `<tr>
    <td>${Radiologia[i].Hora}</td>
    <td>${Radiologia[i].Especialista}</td>
    <td>${Radiologia[i].Paciente}</td>
    <td>${Radiologia[i].Rut}</td>
    <td>${Radiologia[i].Prevision}</td>
    </tr>`;
}
document.getElementById("cuerpotabla").innerHTML = texto

for(let i=0; i<Traumatologia.length; i++){
    texto2 += `<tr>
    <td>${Traumatologia[i].Hora}</td>
    <td>${Traumatologia[i].Especialista}</td>
    <td>${Traumatologia[i].Paciente}</td>
    <td>${Traumatologia[i].Rut}</td>
    <td>${Traumatologia[i].Prevision}</td>
    </tr>`;
}
document.getElementById("cuerpotabla2").innerHTML = texto2


// Imprimir la lista de consultas medicas de Dental:

const listado2 =() =>{
    for(i=0; i<Dental.length; i++){
        document.write(`${Dental[i].Hora} - ${Dental[i].Especialista} - ${Dental[i].Paciente} - ${Dental[i].Rut} - ${Dental[i].Prevision} <br>`)
    }
}
listado2()
document.write("<br><br>")


//Imprimir un listado de todos los nombres de pacientes del centro medico:

document.write("<h3>Listado de Pacientes Centro Médico</h3>")

let RadioMasTrauma = Radiologia.concat(Traumatologia);
let TotalCentro = RadioMasTrauma.concat(Dental);

const listadoNombres = () =>{
    for(i=0; i<TotalCentro.length; i++){
        document.write(`${TotalCentro[i].Paciente} <br>`)
    }
}
listadoNombres()


//Filtrar pacientes de Dental por ISAPRE:

document.write("<h3>Listado de Pacientes Dental con Isapre</h3>")

const filtradoisapre =() =>{
    let Isapre = Dental.filter((prevision)=>{
        if (prevision.Prevision == "Isapre"){
            return prevision
        }
     }
     )
     return Isapre
}

const listadoisapre = () =>{
    for(i=0; i<filtradoisapre().length; i++){
        document.write(`${filtradoisapre()[i].Paciente} - Isapre <br>`)
    }
}
listadoisapre()


//Filtrar pacientes de Traumatologia por FONASA:

document.write("<h3>Listado de Pacientes Traumatología con Fonasa</h3>")

const filtradofonasa =() =>{
    let Isapre = Traumatologia.filter((prevision)=>{
        if (prevision.Prevision == "Fonasa"){
            return prevision
        }
     }
     )
     return Isapre
}

const listadofonasa = () =>{
    for(i=0; i<filtradofonasa().length; i++){
        document.write(`${filtradofonasa()[i].Paciente} - Fonasa <br>`)
    }
}
listadofonasa()