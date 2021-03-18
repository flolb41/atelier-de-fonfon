<template>
<div class="footer">
    <p>Application créée par <a href="mailto:florian.le.blanc.dev41@gmail.com">Florian Le Blanc</a></p>
    <p>© Copyright - Tous droits réservés</p>
</div>  
</template>

<script>
export default {
    name: 'footer',
}
</script>

<style lang="scss">
.footer {
    position: fixed;
    bottom: 0;
    padding: 0;
    margin: 0;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
p {
    font-size: 1em;
}
</style>