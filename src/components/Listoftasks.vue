<template>
    <v-list flat>
        <div v-for="task in tasks" :key="task.id">
            <v-list-item :class="{ 'green lighten-2' : task.done }">
                <template v-slot:default>
                    <v-list-item-action>
                        <v-checkbox v-if="!task.done" @click="doneTask(task.id)"
                        :input-value="task.done" color="#303030"></v-checkbox>
                        <v-checkbox v-else @click="undoneTask(task.id)" :input-value="task.done"
                         color="#303030">
                        </v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-if="!task.changing"
                           :class="{'text-decoration-line-through':task.done}">
                            {{task.title}}
                        </v-list-item-title>
                        <input v-else class="chInput" v-model="chTaskTitle"
                        @keyup.enter="changeTask(task.id)" @blur="changeTask(task.id)" v-focus>
                    </v-list-item-content>

                    <v-list-item-action v-if="(!task.done && !task.changing)">
                        <v-btn @click.stop="editTask(task.id)" icon>
                            <v-icon color="#303030">mdi-pencil-outline</v-icon>
                        </v-btn>
                    </v-list-item-action>
                    <v-list-item-action>
                        <v-btn @click.stop="deleteTask(task.id)" icon>
                            <v-icon color="#303030">mdi-delete</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </template>
            </v-list-item>
            <v-divider></v-divider>
        </div>
    </v-list>

</template>

<script>

export default {

  name: 'Listoftasks',

  data() {
    return {

      tasks: [],
      chTaskTitle: '',
    };
  },
  mounted() {
    /* this.showTasks() */
    this.$root.$on('Listoftasks', () => {
      this.showTasks();
    });
    this.showTasks();
  },
  directives: {
    focus: {
      // определение директивы
      inserted(el) {
        el.focus();
      },
    },
  },
  components: {

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
          this.showTasks();
        });
    },

    deleteTask(id) {
      this.$axios.delete(process.env.VUE_APP_ROOT_DEL + id).then(() => {
        this.showTasks();
      });
    },
    showTasks() {
      this.$axios
        .get(process.env.VUE_APP_ROOT_API)
        .then((response) => {
          this.tasks = response.data;
        });
    },
    doneTask(id) {
      this.$axios.patch(process.env.VUE_APP_ROOT_DEL + id, {
        done: true,
      })
        .then(() => {
          this.showTasks();
        });
    },
    undoneTask(id) {
      this.$axios.patch(process.env.VUE_APP_ROOT_DEL + id, {
        done: false,
      })
        .then(() => {
          this.showTasks();
        });
    },
    editTask(id) {
      this.$axios.patch(process.env.VUE_APP_ROOT_DEL + id, {
        changing: true,
      })
        .then(() => {
          this.showTasks();
        });
    },
    changeTask(id) {
      this.$axios.patch(process.env.VUE_APP_ROOT_DEL + id, {

        title: this.chTaskTitle,
        changing: false,

      })
        .then(() => {
          this.showTasks();
          this.chTaskTitle = this.title;
        });
    },

  },
};

</script>
