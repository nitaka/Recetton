<template>
  <div>
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
          <router-link class="navbar__title navbar-brand" to="/">Recetton</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <router-link class="nav-link active" aria-current="page" to="/user">Profil</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="#">A propos</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/login">Se connecter</router-link>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderView',

  data() {
    return {

    }
  },
  methods: {
    responsiveNav() {
      let x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += "responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
      // HEADER //

.header {
  position: absolute;
  width: 100%;
  height: 94px;
  left: 0px;
  top: 0px;
  background-color: #E1F6FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.navbar {
  background-color: #E1F6FF;
  margin-top: 0px;
  box-shadow: 1px 1px 8px rgb(88, 88, 88);
  &__title {
    font-size: 60px;
    font-family: 'Inspiration', cursive;
  }
}

</style>
