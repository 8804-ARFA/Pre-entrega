
//Para el formulario

function validarDatos () {

    const Apellido_y_Nombre = document.querySelector('#Apellido_y_Nombre').value;

    const Correo_Electronico = document.querySelector('#Correo_Electronico').value;

    const Contraseña = document.querySelector('#Contraseña').value;

    if (!Apellido_y_Nombre || !Correo_Electronico || !Contraseña) {

        console.log("Vuelva a intentarlo");
    } else {

        console.log("Se a completado con exito");
    }
}

document.querySelector('#Formulario').addEventListener('submit', function(e) {

    e.preventDefault();
    formularioCompletado();
});



//Productos 




//array

const ProductosPS4 = [

    {
        id: "Juego_ps4_1", nombre: "Resident Evil 2 (2019)", precio: "35.000", imagen: "img_proyecto/img_ps4/re2_ps4.jpg"
    },

    {
        id: "Juego_ps4_2", nombre: "Red Dead Redemption 2", precio: "54.000", imagen: "img_proyecto/img_ps4/red2_ps4.jpg"
    },

    {
        id: "Juego_ps4_3", nombre: "Call of Duty: WWII", precio: "43.500", imagen: "img_proyecto/img_ps4/WWll_ps4.jpg"
    }

]

const ProductosPS5 = [

    {
        id: "Juego_ps5_1", nombre: "Mortal Kombat 1", precio: "82.000", imagen: "img_proyecto/img_ps5/MK1_ps5.jpg"
    },
        
    {
        id: "Juego_ps5_2", nombre: "DRAGON BALL: Sparking! ZERO", precio: "95.000", imagen: "img_proyecto/img_ps5/DBZSZ_ps5.jpg"
    },

    {
        id: "Juego_ps5_3", nombre: "God of War Ragnarök", precio: "77.000", imagen: "img_proyecto/img_ps5/GOWR_ps5.jpg"
    }

]

const ProductosPC = [

    {
        id: "Juego_pc_1", nombre: "Metro:Saga Boundle", precio: "10.000", imagen: "img_proyecto/img_pc/MSB_pc.jpeg"
    },

    {
        id: "Juego_pc_2", nombre: "Left 4 Dead 2", precio: "18.520", imagen: "img_proyecto/img_pc/L4D2_pc.jpg"
    },

    {
        id: "Juego_pc_3", nombre: "Resident Evil 4", precio: "12.000", imagen: "img_proyecto/img_pc/re4_pc.jpg"
    }

]

const ProductosXBOX = [

    {
        id: "Juego_XBOX_1", nombre: "Halo The Master Chief Collection", precio: "45.000", imagen: "img_proyecto/img_xbox/HTMCC_xbox.jpg"
    },

    {
        id: "Juego_XBOX_2", nombre: "Gears Of War Ultimate Edition", precio: "23.000", imagen: "img_proyecto/img_xbox/GOWUE_xbox.jpg"
    },

    {
        id: "Juego_XBOX_3", nombre: "Dishonored 2", precio: "33.000", imagen: "img_proyecto/img_xbox/D2_xbox.jpg"
    }

]

function MostrarProductos(){

    const TodoslosProductos = [ProductosPS4, roductosPS5, ProductosPC, ProductosXBOX];

    TodoslosProductos.forEach(function(Juego)) {

        console.log(`id: ${juego.id}`);
        console.log(`Nombre: ${juego.Nombre}`);
        console.log(`Precio: ${juego.Precio}`);
        console.log(`Imagen: ${juego.Imagen}`);



    }
}


