//Código del aplicativo

//linea de código que da la bienvenida
   let saludo = "bienvenido a acme school";
           saludar = (saludo) => speechSynthesis.speak( new SpeechSynthesisUtterance(saludo));
           saludar(saludo);


//Inicio del Programa

//Creo mi etiqueta
class Vista1 extends HTMLElement {
    constructor (){
        super();
        this.attachShadow({mode: "open"});
        //Establece el contenido del shadow DOM
        this.render();

    }

    render (){
        this.shadowRoot.innerHTML = 
        `
        <style>
            header{
            height: 20%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color:rgb(0, 85, 244);
            }

            header>h1{
            font-weight: bold;
            font-family:Georgia, 'Times New Roman', Times, serif;
            font-size: 500%;
            color: beige;
            }

            main{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            height: 80%;
            width: 100%;
        }
        main div{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
        }

        aside{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 50%;
            background-color: white;
        }

        aside>button{
            margin: 6%;
            font-family: Georgia, 'Times New Roman', Times, serif;
            border-radius: 12%;
            background-color: beige;
            border-width: 5px;
            border-color: rgb(0, 85, 244);
            color: rgb(0, 85, 244);
            font-size: 200%;
            width: 40%;
            height: 30%;
            font-weight: bold;
        }

        aside>button:hover{
            cursor: pointer;
            transition: ease 0.5s;
            background-color: rgb(0, 85, 244);
            color: beige;  
        }

    </style>
    <header>
        <h1 id="acme-school">acme school</h1>
    </header>
    <main>
        <div id="image1-container">
            <img src="/logos/ACME SCHOOL beige.png" alt="acme-school" id="img1">
        </div>
        <aside id="headerInicio">
            <button id="registrarse">REGISTRARSE</button>
            <button id="entrar">ENTRAR</button>
        </aside>
    </main>
        `;
        this.shadowRoot.querySelector("#registrarse").addEventListener("click",()=>{
            //Creo una instancia del componente FormRegistrousuario
            const FormRegistrarUsuario = document.createElement("form-registrar-usuario");
            this.shadowRoot.querySelector("#headerInicio").innerHTML = ""; // Limpiar el contenido
            this.shadowRoot.querySelector("#headerInicio").appendChild(FormRegistrarUsuario); // Agregar el formulario

        })
        this.shadowRoot.querySelector("#entrar").addEventListener("click",()=>{
            const ingresoUsuario = document.createElement("form-ingresar-usuario");
            this.shadowRoot.querySelector("#headerInicio").innerHTML = ""; //limpio el espacio
            this.shadowRoot.querySelector("#headerInicio").appendChild(ingresoUsuario);
        })
    };
    
    restoreButtons() {
        const buttonsContainer = this.shadowRoot.querySelector("#headerInicio");
        buttonsContainer.innerHTML = ""; // Limpiar el contenido
        const registerButton = document.createElement("button");
        registerButton.id = "registrarse";
        registerButton.textContent = "REGISTRARSE";
        const enterButton = document.createElement("button");
        enterButton.id = "entrar";
        enterButton.textContent = "ENTRAR";

        buttonsContainer.appendChild(registerButton);
        buttonsContainer.appendChild(enterButton);

        // Reagregar los eventos
        registerButton.addEventListener("click", () => {
            const formRegistrarUsuario = document.createElement("form-registrar-usuario");
            buttonsContainer.innerHTML = ""; // Limpiar el contenido
            buttonsContainer.appendChild(formRegistrarUsuario);
        });

        enterButton.addEventListener("click", () => {
            const ingresoUsuario = document.createElement("form-ingresar-usuario");
            this.shadowRoot.querySelector("#headerInicio").innerHTML = ""; //limpio el espacio
            this.shadowRoot.querySelector("#headerInicio").appendChild(ingresoUsuario);
        });
    }
};
class IngresoUsuario extends HTMLElement{
    constructor (){
        super();
        this.attachShadow({mode: "open"});
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = 
        `
        <style>
        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            gap: 10px;
        }
        form>input{
            width: 100%;
            height: 5%;
            border: 3px solid black ;
            border-radius:20px ;
        
        }
        form>label{
            width: 100%;
            height: 5%;
            font-size: 200%;
            font-family: Georgia, 'Times New Roman', Times, serif;
            color: rgb(10, 48, 119);
        }
        
        form>div>button{
            margin: 6%;
            font-family: Georgia, 'Times New Roman', Times, serif;
            border-radius: 12%;
            background-color: beige;
            border-width: 5px;
            border-color: rgb(0, 85, 244);
            color: rgb(0, 85, 244);
            font-size: 150%;
            width: 80%;
            height: 90%;
            font-weight: bold;
        }
        #exit{
            margin: 1%;
            font-family: Georgia, 'Times New Roman', Times, serif;
            border-radius: 12%;
            background-color: beige;
            border-width: 5px;
            border-color: rgb(0, 85, 244);
            color: rgb(0, 85, 244);
            font-size: 150%;
            width: 20%;
            height: 10%;
            font-weight: bold;
            align-self: center;
            justify-self: center;
        }
        
        form select {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 2px solid black;
            border-radius: 8px;
            background-color: white;
            color: black;
            cursor: pointer;
            transition: all 0.3s ease;
        }
          
        select:hover {
            border-color: #003bb5;
            background-color: #f0f0f0;
        }
        
        form>div>button:hover{
            cursor: pointer;
            transition: ease 0.5s;
            background-color: rgb(0, 85, 244);
            color: beige;  
        } 
        
        form>input::placeholder{
            color: gray;
            font-style: italic;
            font-size: 150%;
            opacity: 1; 
            padding-left: 5%;
        }
        
        form>div{
            display: flex;
            flex-direction: row;
        }
        </style>

        <form id="registerUserForm">
                <label for="Número de Identificación" class="labelsRegisterUser">NÚMERO DE IDENTIFICACIÓN</label>
                <input type="text" placeholder="Número de Identificación" required>
                <label for="Nombre" class="labelsRegisterUser">NOMBRE</label>
                <input type="text" placeholder="Nombre" required>
                <label for="email" class="labelsRegisterUser">EMAIL</label>
                <input type="email" placeholder="Email" required>
                <label for="password" class="labelsRegisterUser">CONTRASEÑA</label>
                <input type="password" placeholder="Contraseña" required>
                <div>
                    <button type="submit">Registrar Usuario</button>
                </div>
            </form>
            <button type="exit" id="exit">Salir</button> 
        ` ;
         //Agregar evento al botón salir
         this.shadowRoot.querySelector("#exit").addEventListener("click", ()=>{
            const vista1 = document.querySelector("vista-1");
            vista1.restoreButtons();// llamo la función

        })
    };
}

class FormRegistrarUsuario extends HTMLElement{
    constructor (){
        super();
        this.attachShadow({mode : "open"});
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = 
        `
        <style>
        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            gap: 10px;
        }
        form>input{
            width: 100%;
            height: 5%;
            border: 3px solid black ;
            border-radius:20px ;
        
        }
        form>label{
            width: 100%;
            height: 5%;
            font-size: 200%;
            font-family: Georgia, 'Times New Roman', Times, serif;
            color: rgb(10, 48, 119);
            padding: 5%;
        }
        
        form>div>button{
            margin: 6%;
            font-family: Georgia, 'Times New Roman', Times, serif;
            border-radius: 12%;
            background-color: beige;
            border-width: 5px;
            border-color: rgb(0, 85, 244);
            color: rgb(0, 85, 244);
            font-size: 150%;
            width: 80%;
            height: 90%;
            font-weight: bold;
        }
        #exit{
            margin: 1%;
            font-family: Georgia, 'Times New Roman', Times, serif;
            border-radius: 12%;
            background-color: beige;
            border-width: 5px;
            border-color: rgb(0, 85, 244);
            color: rgb(0, 85, 244);
            font-size: 150%;
            width: 20%;
            height: 10%;
            font-weight: bold;
            align-self: center;
            justify-self: center;
        }
        
        form select {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 2px solid black;
            border-radius: 8px;
            background-color: white;
            color: black;
            cursor: pointer;
            transition: all 0.3s ease;
        }
          
        select:hover {
            border-color: #003bb5;
            background-color: #f0f0f0;
        }
        
        form>div>button:hover{
            cursor: pointer;
            transition: ease 0.5s;
            background-color: rgb(0, 85, 244);
            color: beige;  
        } 
        
        form>input::placeholder{
            color: gray;
            font-style: italic;
            font-size: 150%;
            opacity: 1; 
            padding-left: 5%;
        }
        
        form>div{
            display: flex;
            flex-direction: row;
        }
        </style>

        <form id="registerUserForm">
                <label for="Número de Identificación" class="labelsRegisterUser">NÚMERO DE IDENTIFICACIÓN</label>
                <input type="text" placeholder="Número de Identificación" required>
                <label for="Nombre" class="labelsRegisterUser">NOMBRE</label>
                <input type="text" placeholder="Nombre" required>
                <label for="elepcion" class="labelsRegisterUser">TIPO DE USUARIO</label>
                <select>
                    <option value="administrativo">Administrativo</option>
                    <option value="profesor">Profesor</option>
                </select>
                <label for="email" class="labelsRegisterUser">EMAIL</label>
                <input type="email" placeholder="Email" required>
                <label for="password" class="labelsRegisterUser">CONTRASEÑA</label>
                <input type="password" placeholder="Contraseña" required>
                <div>
                    <button type="submit">Registrar Usuario</button>
                </div>
            </form>
            <button type="exit" id="exit">Salir</button> 
        ` ;
        //Agregar evento al botón salir
        this.shadowRoot.querySelector("#exit").addEventListener("click", ()=>{
            const vista1 = document.querySelector("vista-1");
            vista1.restoreButtons();// llamo la función
        })
    };
}

customElements.define("vista-1",Vista1);
customElements.define("form-registrar-usuario", FormRegistrarUsuario);
customElements.define("form-ingresar-usuario", IngresoUsuario )


