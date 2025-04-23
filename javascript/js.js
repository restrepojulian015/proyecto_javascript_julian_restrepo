//Código del aplicativo

//linea de código que da la bienvenida
  let saludo = "Bienvenido a Ecma School";
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
            document.querySelector("#headerInicio").innerHTML = 
            `
            <form id="registerUser Form"></form>
            `;
        })
    };
    
};

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
            width: 70%;
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

        <form id="registerUser Form">
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
                    <button type="exit">Salir</button> 
                </div>
            </form>
        ` ;
    };
}

customElements.define("vista-1",Vista1);


