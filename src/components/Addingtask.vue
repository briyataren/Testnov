<template>
    <div>
        <v-text-field v-model="newTaskTitle" @click:append="addTask" @keyup.enter="addTask"
        color="#303030" class="pa-2" outlined label="Add task" append-icon="mdi-plus"
        hide-details clearable></v-text-field>
    </div>
</template>

<script>
export default {

  name: 'Addingtask',

  data() {
    return {

      newTaskTitle: '',
      tasks: [],
    };
  },
  methods: {

    addTask() {
      this.$axios.post(process.env.VUE_APP_ROOT_API, {
        id: Date.now(),
        title: this.newTaskTitle,
        done: false,
        changing: false,
      })
        .then(() => {
          this.eshowTasks();
        });
    },
    eshowTasks() {
      this.$root.$emit('Listoftasks');
    },
  },
};

</script>
