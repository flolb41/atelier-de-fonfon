<template>
  <div class="home">
    <img alt="photo Marie-philippe Jué" src="../assets/mpjue.jpg" />
    <div class="description">
      <div class="desc1">
        <p class="p1">
          Je m'appelle Jué Marie-Philippe, je suis artiste peintre.
        </p>
        <p class="p2">
          J'ai fait deux ans d'études en école de peinture à Blois.
        </p>
        <p class="p3">
          Je peins à l'huile, sculpte, crée des lampes, des objets de décoration
          et des bijoux.
        </p>

        <p class="p4">
          N'hésitez pas à me laisser vos impressions par e-mail, cliquez <a href="mailto:marierire@hotmail.fr"><i class="far fa-envelope"></i></a>.<br />
          Bonne découverte. Merci d'être passés !
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: { Footer },
};
</script>

<style lang="scss">
img {
  width: 25%;
}
.description {
  font-size: 1.5em;
  margin-top: 20px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgb(2, 2, 104)),
    to(rgb(91, 91, 250))
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.p1 {
  font-size: 1.5em;
}
.p2 {
  font-size: 1.4em;
}
.p3 {
  font-size: 1.4em;
}
.p4 {
  font-size: 1.4em;
}
.desc1 {
  text-align: start;
  margin: 4% ;
  width: 80%;
}
.p1,
.p2,
.p3 {
  margin-left: 1%;
  color: rgb(48, 56, 180);
}
.p4 {
  margin-top: 60px;
  text-align: start;
  margin: 0 0 0 1%;
  width: 80%;
}
.p4 a {
  color: orangered;
}
</style>