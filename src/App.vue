<template>
    <v-app id="inspire">
        <Mainlayout />
    </v-app>
</template>

<script>
import Mainlayout from './components/Mainlayout.vue';

export default {

  name: 'App',

  components: {
    Mainlayout,
  },

  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
    .chInput:focus {
        outline: none;

    }

</style>
