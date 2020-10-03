<template>
  <div class="estudiante">
    <h1>Lista de estudiantes</h1>
    <blockquote>
      <div>
        <label>Nombre: </label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label>Activo: </label>
        <input type="checkbox" v-model="active" />
      </div>
    </blockquote>
    <button @click="crear">create</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000";

export default {
  name: "EstudianteCreate",
  data() {
    return {
      name: "",
      active: false
    };
  },
  methods: {
    crear() {
      let datosform = {
        name: this.name,
        active: this.active
      };
      axios
        .post("/api/estudiantes/", datosform)
        .then(res => {
          console.log(res.data);
          console.log(datosform);
          this.$router.push({
            name: "Estudiantes",
            params: {
              massage:
                "exito al crear registro " + res.data.id + " " + res.data.name,
              color: "green"
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
