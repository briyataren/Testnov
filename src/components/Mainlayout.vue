<template>

    <div class="pa-10">
<Addingtask />
        <Listoftasks />
    </div>
</template>

<script>
import Listoftasks from './Listoftasks.vue';
import Addingtask from './Addingtask.vue';
/* import Addingtask from './Addingtask.vue' */

export default {

  name: 'Mainlayout',
  data() {
    return { tasks: [] };
  },

  components: {
    /*  Addingtask, */
    Listoftasks,
    Addingtask,
  },
};

</script>
