<template>
  <div class="lampes container">
    <ul class="lampe-list">
      <div class="card-container">
        <li class="card" v-for="item in lampes" :key="item.id">
          <img
            class="card-img-top zoom"
            :src="`${publicPath}` + item.img"
            :alt="item.name"
          />
          <div class="card-body">
            <h2 class="name">{{ item.name }}</h2>
            <p class="desc">{{ item.description }}</p>
          </div>
          <div class="card-footer">
            <div v-if="item.vendu == false" class="en-vente">
              <span class="prix-list">{{ item.price }},00 €</span>
            </div>
            <div v-else class="vente-faite">
              <span class="prix-vendu"
                ><s>{{ item.price }},00 €</s></span
              >
              <span class="vendu">Pièce déjà vendue</span>
            </div>
          </div>
        </li>
      </div>
      <div id="scroll_to_top">
        <a href="#top"
          ><font-awesome-icon
            :icon="['fas', 'chevron-circle-up']"
            size="3x"
            color="grey"
        /></a>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Lampes",
  components: {},
  data() {
    return {
      lampes: null,
      publicPath: process.env.BASE_URL,
    };
  },
  created() {
    fetch("http://localhost:3000/api/lampes/")
      .then((response) => response.json())
      .then((response) => {
        this.lampes = response;
        console.log(this.lampes);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss">
.lampe-list {
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.card {
  margin: 7% auto;
}
.lampe-list img {
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
.lampe-list li {
  margin: 7% auto;
}
.lampes {
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