
//Para el formulario

function validarDatos () {

    const Apellido_y_Nombre = document.querySelector('#Apellido_y_Nombre').value;

    const Correo_Electronico = document.querySelector('#Correo_Electronico').value;

    const Contraseña = document.querySelector('#Contraseña').value;

    if (Apellido_y_Nombre && Correo_Electronico && Contraseña) {

        console.log("Vuelva a intentarlo");
    } else {

        console.log("Se a completado con exito");
    }
}

document.querySelector('#Formulario').addEventListener('submit', function(evento) {

   evento.preventDefault();
    validarDatos();
});



//Productos ]

ProductosPS4 = [

    {
        id: "juego_ps4_1", nombre: "Resident Evil 2 (2019)", descripcion: "<i>Un clasico del survivor horror vuelve un un rediseño no solo grafico sino que también te hara experimentar el terror como nunca antes, publicado originalmente en 1998, <b>Resident Evil 2</b>, uno de los juegos más icónicos de todos los tiempos, regresa completamente reinventado para las consolas de nueva generación. Juega campañas individuales tanto para <b>Leon Kennedy como para Claire Redfield</b> con una flamante nueva vista en 3.ª persona mientras exploras las áreas infestadas de zombis de Raccoon City, ahora reconstruido espectacularmente con el motor RE Engine de Capcom. Nuevos rompecabezas, tramas y áreas para que tanto los nuevos fans como los más veteranos descubran terroríficas nuevas sorpresas.</i>", precio: "35.000", imagen: "img_proyecto/img_ps4/re2_ps4.jpg"
    },

    {
        id: "juego_ps4_2", nombre: "Red Dead Redemption 2", descripcion:"<i>Ambientado en 1899 en un entorno ficticio, sigue las aventuras de <b>Arthur Morgan y sus compañeros dentro de la banda de Dutch van der Linde</b> doce años antes de la anterior entrega. En este videojuego regresan personajes como <b>John Marston</b>, el protagonista del título previo en una aventura donde el jugador debe enfrentar a otros criminales, a las fuerzas del orden y ejecutar asaltos en un ambiente del salvaje oeste</i>", precio: "54.000", imagen: "img_proyecto/img_ps4/red2_ps4.jpg"
    },

    {
        id: "juego_ps4_3", nombre: "Call of Duty: WWII", descripcion:"<i>Call of Duty regresa a sus raíces con <b>Call of Duty: WWII</b>, una experiencia sobrecogedora que redefine la Segunda Guerra Mundial para una nueva generación. Vive el combate clásico de <b>Call of Duty</b>, los lazos de camaradería y la naturaleza despiadada de la guerra contra una potencia que sume al mundo en la tiranía.</i>", precio: "43.500", imagen: "img_proyecto/img_ps4/WWll_ps4.jpg"
    }

]

const ProductosPS5 = [

    {
        id: "juego_ps5_1", nombre: "Mortal Kombat 1", descripcion:"<i>Tras su pelea final contra el titan Shang Tsung  por la corona de Kronika, el dios del trueno y fuego Liu Kang se empeña utilizar su poder para restaurar la línea de tiempo en base a una <b>Nueva Era</b> en donde los habitantes de todos los reinos sean capaces de tomar sus propias decisiones en una coexistencia simultánea, sin embargo una antigua amenaza renace cuando menos se lo espera durante la lucha del torneo <b>Mortal Kombat</b></i>",  precio: "82.000", imagen: "img_proyecto/img_ps5/MK1_ps5.jpg"
    },
        
    {
        id: "juego_ps5_2", nombre: "DRAGON BALL: Sparking! ZERO", descripcion:"<i><b>DRAGON BALL: Sparking! ZERO</b> lleva a un nuevo nivel el legendario estilo de juego de la serie <b>Budokai Tenkaichi</b>. Aprende a dominar a diversos personajes jugables, cada uno con sus habilidades, transformaciones y técnicas propias. Libera tu espíritu de lucha y pelea en escenarios que se derrumban y reaccionan a tu poder a medida que el combate se recrudece</i>", precio: "95.000", imagen: "img_proyecto/img_ps5/DBZSZ_ps5.jpg"
    },

    {
        id: "juego_ps5_3", nombre: "God of War Ragnarök", descripcion:"<i>Un viaje mítico en busca de respuestas antes de que llegue el <b>Ragnarök</b>. Juntos, padre e hijo deben darlo todo mientras visitan cada uno de los nueve reinos. A través de imponentes paisajes mitológicos, se enfrentarán a aterradores enemigos, desde dioses nórdicos hasta bestias salvajes, mientras se preparan para el enfrentamiento de sus vidas.Armado con sus confiables armas de guerra, incluyendo el Hacha de Leviatán y las Espadas del Caos, las habilidades mortales de Kratos se pondrán a prueba como nunca antes mientras pelea por proteger a su familia</i>", precio: "77.000", imagen: "img_proyecto/img_ps5/GOWR_ps5.jpg"
    }

]

const ProductosPC = [

    {
        id: "juego_pc_1", nombre: "Metro:Saga Boundle", descripcion:"<i>Viaja desde los derruidos túneles del metro de Moscú hasta los eriales desolados de una Rusia postapocalíptica, con <b>Metro:Saga Boundle</b>. En esta misma se incluyen los tres clasicos metros: <b>Metro: 2033 Redux, Metro: Last Light Redux y la ultima entrega Metro: Exodus. Este ultimo con sus característicos DLCS</b>. Podrás disfrutar de los mejores juegos de disparos en primera persona de la última década en una combinación que te llevará de la mano a vivir una aventura épica</i>", precio: "10.000", imagen: "img_proyecto/img_pc/MSB_pc.jpeg"
    },

    {
        id: "juego_pc_2", nombre: "Left 4 Dead 2", descripcion:"<i>Ambientado en el apocalipsis zombi, <b>Left 4 Dead 2</b> es la esperadísima secuela del galardonado <b>Left 4 Dead</b>, el juego cooperativo número 1 de 2008. Este FPS cooperativo de acción y terror os llevará a ti y a tus amigos por las ciudades, pantanos y cementerios del Sur Profundo, desde Savannah hasta Nueva Orleans, a lo largo de cinco extensas campañas", precio: "18.520", imagen: "img_proyecto/img_pc/L4D2_pc.jpg"
    },

    {
        id: "juego_pc_3", nombre: "Resident Evil 4", descripcion:"<i><b>Resident evil 4</b> se ambienta cuatro años despues tras los acontecnimientos ocurridos en la catastrofe de Racoon City, al agente especial <b>Leon S. Kennedy</b> se le asigna la misión de rescatar a la hija del presidente de los EUA, que ha sido secuestrada. Tras llegar a una aldea rural europea, se enfrenta a nuevas amenazas que suponen retos totalmente diferentes de los clásicos enemigos zombis de pesados movimientos de las primeras entregas de esta serie</i>", precio: "12.000", imagen: "img_proyecto/img_pc/re4_pc.jpg"
    }

]

const ProductosXBOX = [

    {
        id: "juego_XBOX_1", nombre: "Halo The Master Chief Collection", descripcion:"<i>Por primera vez, toda la saga del Jefe Maestro en una única consola. Incluye una versión completamente remasterizada de <b>Halo 2: Anniversary, Halo: Combat Evolved Anniversary, Halo 3 y Halo 4</b> recreados con la fidelidad gráfica de Xbox One y a 60 fps, sumergete en uno de los mas grandes shooter en primera persona que hace años, revoluciono el gaming tal y como lo conocemos junto al emblematico Jefe maestro (Master Chief) y Cortana</i>", precio: "45.000", imagen: "img_proyecto/img_xbox/HTMCC_xbox.jpg"
    },

    {
        id: "juego_XBOX_2", nombre: "Gears Of War Ultimate Edition", descripcion:"<i><b>Gears of War: Ultimate Edition</b> es una versión mejorada de este clásico, a medio camino entre la remasterización y el remake, con un aumento de resolución a 1080p nativos, 30fps para la campaña y 60fps en el multijugador competitivo, y modelos poligonales más complejo, nuevas texturas y una iluminación mejorada, en un juego más colorido con una mayor variedad cromática, pero sin perder la esencia de su ambientación original. También cuenta con algunas mejoras en el gameplay más o menos sutiles, como poder reanimar a los compañeros desde una cobertura, cambiar de arma mientras rodamos o la posibilidad de elegir entre diferentes esquemas de control. Además <b>incluye cinco misiones de la campaña</b> que originalmente sólo se lanzaron en PC y no estaban en la versión de Xbox 360, y el modo multijugador se expande con nuevos mapas adicionales, modos de juego y matchmaking mejorado</i>", precio: "23.000", imagen: "img_proyecto/img_xbox/GOWUE_xbox.jpg"
    },

    {
        id: "juego_XBOX_3", nombre: "Dishonored 2", descripcion:"<i><b>Dishonored 2</b> tiene lugar 15 años después de los eventos de <b>Dishonored</b>. La temible peste ha pasado a la historia, pero Dunwall tiene otros problemas. Un asesino en serie conocido como el asesino de la corona ha eliminado a varios enemigos políticos de Emily Kaldwin, la actual emperatriz de las islas, haciéndola parecer culpable. Y pronto se ve en el medio de otro golpe de estado, liderado por la misteriosa Delilah Copperspoon, quien asegura que es la legítima heredera, y el duque de Serkonos Luca Abele.</i>", precio: "33.000", imagen: "img_proyecto/img_xbox/D2_xbox.jpg"
    }

]

function MostrarProductos(){

    const TodoslosProductos = [...ProductosPS4, ...ProductosPS5, ...ProductosPC, ...ProductosXBOX];

    TodoslosProductos.forEach(function(juego) {

        console.log(`id: ${juego.id}`);
        console.log(`nombre: ${juego.nombre}`);
        console.log(`precio: ${juego.precio}`);
        console.log(`descripcion: ${juego.descripcion}`);
        console.log(`imagen: ${juego.imagen}`);

    });
}

function ProductosConsole() {



    MostrarProductos();

}

ProductosConsole();






function ProductosHTML(){

    const main = document.querySelector('.lista-de-productos');

    main.innerHTML = '';

    const TodoslosProductos = [...ProductosPS4, ...ProductosPS5, ...ProductosPC, ...ProductosXBOX];

    TodoslosProductos.forEach(function(juego){

        const ProductoJuego = document.createElement('div');
              
        ProductoJuego.classList.add('Productos');
              
        ProductoJuego.setAttribute('data-id', juego.id);
              
        ProductoJuego.innerHTML = `
        <img src="${juego.imagen}" alt="${juego.nombre}" class="Productos-img" />
        <h3>${juego.nombre}</h3>
        <span class="precio">${juego.precio}</span>
        <button class="agregar" data-id="${juego.id}">Agregar</button>
        <div id="descripcion-${juego.id}" class="descripcion"></div>
        `;

        main.appendChild(ProductoJuego);

    });


}





function MostrarDescripcion(id) {

    const juego = [...ProductosPS4, ...ProductosPS5, ...ProductosPC, ...ProductosXBOX].find(TodoslosProductos => TodoslosProductos.id === id);

    if (juego) {

        console.log(`Descripcion del juego: ${juego.descripcion}`);
        const descripcionjuego = document.querySelector(`#descripcion-${id}`);
        descripcionjuego.innerHTML =  `${juego.descripcion}:`;

    }

}


document.querySelectorAll('.Productos').forEach(juego => {
    juego.addEventListener('click', function() {
        const id = juego.getAttribute('data-id');
        MostrarDescripcion(id);

    });

});



//Carrito


document.querySelectorAll('.agregar').forEach(button => {
    button.addEventListener('click', function (e) {
        const id = e.target.getAttribute('data-id');
        AgregarCarrito(id);
    });
});




function AgregarCarrito (id) {
    const Carrito = JSON.parse(localStorage.getItem('Carrito')) || [];
    const juego = [...ProductosPS4, ...ProductosPS5, ...ProductosPC, ...ProductosXBOX].find(juego => juego.id === id);

    if (juego) {

        Carrito.push(juego);
        localStorage.setItem('Carrito', JSON.stringify(Carrito));
        console.log(`Se agrego al carrito: ${juego.nombre}`);
        AgregarCarrito (id);

    }
}


function MostrarCarrito () {

    const Carrito = JSON.parse(localStorage.getItem('Carrito')) || [];
    const CarritoContenedor = document.querySelector('.Carrito');
    CarritoContenedor.innerHTML = '';

    Carrito.forEach(juego => {

        const CarritoItem = document.createElement('div');
        CarritoItem.classList.add('juego-seleccionado');
        CarritoItem.innerHTML = `
        <img src="${juego.imagen}" alt="${juego.nombre}" class="Productos-img" />
        <h4>${juego.nombre}</h4>
        <span>${juego.precio}</span>
        <button class="eliminar" data-id="${juego.id}">Eliminar</button>
        `;
        CarritoContenedor.appendChild(CarritoItem);
    });
}


function EliminarCarrito (id){

    let Carrito = JSON.parse(localStorage.getItem('Carrito')) || [];
    Carrito = Carrito.filter(juego => juego.id !==id);
    localStorage.setItem('Carrito', JSON.stringify(Carrito));
    MostrarCarrito();

}

document.querySelector('#Carrito').addEventListener('click',function(eliminar){
    if(eliminar.target.classList.contains('eliminar')) {
        const id = eliminar.target.dataset.id;
        EliminarCarrito(id);
    }
});


