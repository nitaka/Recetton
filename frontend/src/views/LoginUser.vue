<template>
    <div class="container">
        <div class="cont">
          <form class="form sign-in">
            <h2>Se connecter</h2>
            <label><span>Email</span><input v-model="login.email" type="email" id="LogEmail" name="email" placeholder="Ton email" required /></label>
            <p id="errMail"></p>
            <label><span>Mot de passe</span><input v-model="login.password" type="password" id="logPassword" name="password" placeholder="password" required /></label>
            <p id="errPass"></p>
            <button type="submit" class="submit" @click="sendLogin" >Connexion</button>
          </form>
          <div class="sub-cont">
            <form class="form sign-up">
              <h2 class="title-sign">Nouveau compte</h2>
              <label><span>Nom</span><input v-model="signup.nom" type="text" id="nom" name="nom" placeholder="Nom de famille" required /></label>
              <label><span>Prénom</span><input v-model="signup.prenom" type="text" id="prenom" name="prenom" placeholder="Prénom" required /></label>
              <label><span>Email</span><input v-model="signup.email" type="email" id="email" name="email" placeholder="Email@gmail.com" required/></label>
              <label><span>Mot de passe</span><input v-model="signup.password" type="password" id="password" name="password" placeholder="Mot de passe" required /></label>
              <button type="submit" class="submit" @click="sendSignup">Validation</button>
            </form>
          </div>
        </div>
    </div>
  </template>
  
  <script>

  
    export default {
      
      data() {
        return {
          signup: {
            nom: "",
            prenom: "",
            email: "",
            password: "",
          },
          login: {
            email: "",
            password: "",
          },
        };
      },
      methods: {
    
      },
      mounted() { 
     
      }
    }

  </script>
  
  
  <style scoped lang="scss">

  </style>