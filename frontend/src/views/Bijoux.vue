<template>
  <div class="bijoux container">
    <ul class="bijoux-list">
      <div class="card-container">
        <li class="card" v-for="item in bijoux" :key="item.id">
          <img
            class="card-img-top zoom"
            :src="`${publicPath}` + item.img"
            :alt="item.name"
          />
          <div class="card-body">
            <h2 class="card-title name">{{ item.name }}</h2>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text taille">{{ item.taille }}</p>
          </div>
          <div class="card-footer">
            <div v-if="item.vendu == false" class="en-vente">
            <span  class="prix-list"
              >{{ item.price }},00 €</span
            ></div>
            <div v-else class="vente-faite">
              <span class="prix-vendu"><s>{{ item.price }},00 €</s></span>
            <span class="vendu">Pièce déjà vendue</span>
            </div>
          </div>
        </li>
      </div>
      <div id="scroll_to_top">
        <a href="#top"
          ><font-awesome-icon :icon="['fas', 'chevron-circle-up']" size="3x" color="grey"
        /></a>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "bijoux",
  data() {
    return {
      bijoux: null,
      publicPath: process.env.BASE_URL,
    };
  },
  created() {
    fetch("http://localhost:3000/api/bijoux/")
      .then((response) => response.json())
      .then((response) => {
        this.bijoux = response;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
.bijoux-list {
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.bijoux-list img {
  width: 90%;
  margin: 5% auto;
}
li:hover {
  transition-duration: 0.5s;
  transform: scale(1.1);
  img {
    transition-duration: 0.5s;
    transform: scale(1.1);
  }
}
.bijoux-list li {
  margin: 7% auto;
}
.bijoux {
  width: 80%;
  margin: 0 auto;
}
.card-container {
  margin: auto;
}
.card-body h2 {
  font-family: Tangerine;
  font-size: 4em;
}
.card-body p {
  font-size: 1.5em;
}
.card-footer span {
  font-size: 1.8em;
}
.card-img-top {
  margin: 0 auto;
}
.vente-faite span {
  margin: 0 5%;
}
#scroll_to_top {
  position: fixed;
  width: 25px;
  height: 25px;
  bottom: 3%;
  right: 3%;

}
#scroll_to_top img {
  width: 25px;
}
</style>