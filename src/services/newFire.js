import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA5IKZkbLtl62c3E5cJsNIrKsGRo0pzCkA",
    authDomain: "tcc-rpgtooler.firebaseapp.com",
    databaseURL: "https://tcc-rpgtooler.firebaseio.com",
    projectId: "tcc-rpgtooler",
    storageBucket: "tcc-rpgtooler.appspot.com",
    messagingSenderId: "10500260634",
    appId: "1:10500260634:web:31ce7ae8b1b7d85d9762a3",
    measurementId: "G-KTHWBYYSCP"
}

class newFire{
    constructor() {
      firebase.initializeApp(firebaseConfig);
      this.auth = firebase.auth();
      this.db = firebase.database();
      this.storage = firebase.storage();
      this.onlineUrlPrevious = ''
      this.onlineUrl = ''
  
      this.state = {
        
      };
    }

    async register(email, password, payload,) {
        console.log("payload before:", payload)
        return await this.auth.createUserWithEmailAndPassword(email, password)
        .then(function (rollback) {
          setTimeout(async () => {
            console.log("payload after:", payload)
              
            console.log(rollback)
            var info=firebase.database().ref("user/" + rollback.user.uid + "/info" );

            info.set({
              username: payload.username,
              email: email
            });
            alert("Seja muito bem vindo ", info.username, "!")

            })
            .catch(function (error) {
              console.log("Deu errado ): ")
              console.log(error.message)
              return error
            });}, 1500)
                
      }

      login(email, password, props) {
        console.log("====== newFire.login() ======")
         return this.auth.signInWithEmailAndPassword(email, password)
             .then(function (response) {
              console.log("=== response ===")
              console.log(response)
              return true
            })
            .catch(function (error) {
              switch(error.code ){
                case "auth/invalid-email":
                    console.log("Email inválido!")
                    alert("Email inválido!")
                break;
                
                case "auth/wrong-password":
                    console.log("Senha incorreta!")
                    alert("Senha incorreta!")
                break;
    
                case "auth/user-not-found":
                    console.log("Usuário não encontrado!")
                    alert("Usuário não encontrado!")
                break;
                default:
                console.log(error.message)
                return false
            }
            })
      }
      gerarHabCacador(){
        return firebase.database().ref("habilidades/classes/caçador").once("value").then((habilidadesCacador) => {
          var habCacador = habilidadesCacador.val();
          var listaHabilidades = Object.keys(habCacador);
          var indice = Math.floor(Math.random()*(listaHabilidades.length - 1));
          
          console.log(listaHabilidades)
          console.log(indice)
          console.log(habCacador[listaHabilidades[indice]])

          return listaHabilidades[indice], habCacador[listaHabilidades[indice]]
        })
      }
    }

    

    export default new newFire(); 