<template>
  <div class="estudiante">
    <h1>Lista de estudiantes</h1>
    <div :style="'color:' + color">{{ massage }}</div>
    <div v-for="estudiante in estudiantes" :key="estudiante.id">
      <p>
        <router-link :to="'/estudiante/' + estudiante.id" :id="estudiante.id">
          {{ estudiante.id }} |
        </router-link>
        {{ estudiante.name }} |
        {{ estudiante.active }}
      </p>
    </div>
    <button @click="nuevo">new</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
//axios.defaults.baseURL = config.API_BASE_URL;

export default {
  name: "Estudiantes",
  props: ["massage", "color"],
  data() {
    return {
      estudiantes: null
    };
  },
  created() {
    this.getEstudiantes();
  },
  methods: {
    getEstudiantes() {
      axios
        .get("/api/estudiantes")
        .then(res => {
          // const {data:{data}} = res;
          this.estudiantes = res.data.data;
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    nuevo() {
      this.$router.push("/estudiante/create");
    }
  }
};
</script>
