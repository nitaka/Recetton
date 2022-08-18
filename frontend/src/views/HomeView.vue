<template>
  <div class="home">
    <section class="main">
      <router-link to="/home-menus" class="main__balance">
        <img src="../assets/balance.png" alt="Une balance">
      </router-link>
      <router-link to="/healthy" class="main__heal">
        <img src="../assets/Healty-logo.png" alt="logo healthy">
      </router-link>
      <router-link to="/hard" class="main__hard">
        <img src="../assets/Hard-logo.png" alt="logo hard">
      </router-link>
    </section>
    <section class="recipe-season">
      <h2 class="sub-title-recipe">Recette de saison</h2>
      <article class="recipe-season__bloc">
        <h1>Recommandation</h1>
        <div class="recipe-season__user">
          <img class="logo-fire" src="../assets/fire.png" alt="logo d'une flamme">
          <div class="recipe-season__hard-user">
            <img class="photo-user" src="../assets/login.png" alt="profil de l'user">
            <h4 class="name-recipe">Nom de la recette</h4>
          </div>
        </div>
        <div class="recipe-season__user">
          <img class="logo-aureole" src="../assets/aureole.png" alt="logo d'une auréole" >
          <div class="recipe-season__heal-user">
            <img class="photo-user" src="../assets/login.png" alt="profil de l'user">
            <h4 class="name-recipe">Nom de la recette</h4>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style lang="scss">
      // MAIN //

.main {
  margin-top: 150px;
  &__heal {
    position: relative;
    right: 20px;
  }
  &__hard {
    position: relative;
    right: 20px;
  }
}

      // MAIN RECIPE //

.recipe-season {

  margin-top: 50px;
  &__bloc {
    width: 80%;
    margin: auto;
    height: 234px;
    border-radius: 20px;
    box-shadow: 2px 5px 5px rgb(141, 141, 141);
    background-color: #E1F6FF;
  }
  &__user {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
  }
  &__hard-user {
    display: flex;
    width: 60%;
    height: 60px;
    background: #FF8686;
    border-radius: 20px;
    box-shadow: 1px 5px 5px rgb(141, 141, 141);
  }
  &__heal-user {
    display: flex;
    width: 60%;
    height: 60px;
    background: #86F0FF;
    border-radius: 20px;
    box-shadow: 1px 5px 5px rgb(141, 141, 141);
  }
}

.sub-title-recipe {
  font-size: 50px;
  font-family: 'Inspiration', cursive;
}

h1 {
  font-family: 'Romanesco', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 55px;
}

.name-recipe {
  font-size: 1em;
  font-weight: bold;
  margin: auto;
}
.photo-user {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-top: 5px;
  margin-left: 5px;
}

</style>