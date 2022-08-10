<template>
  <div >
      <header class="header">
        <h1>Recetton</h1>
      </header>
      <section class="body">
        <a href="../views/HomeMenus.vue" class="balance">
          <img src="../assets/balance.png" alt="Une balance">
        </a>
      </section>
    
  </div>
</template>

<script>
export default {
  name: 'HeaderView',
  /* props: {
    msg: String
  } */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Inspiration&display=swap');

      
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

h1 {
  position: absolute;
  width: 182px;
  height: 80px;
  left: 40px;
  bottom: -40px;

  font-family: 'Inspiration', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 81px;

  color: #000000;
}

      // BODY //
.balance {
  position: absolute;
  width: 187px;
  height: 187px;
  left: 28%;
  top: 130px;
}
</style>
