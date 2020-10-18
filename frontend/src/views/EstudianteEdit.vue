<template>
  <div class="estudiante">
    <h1>Editar estudiante</h1>
    <blockquote>
      <div>
        <label>Nombre: </label>
        <input type="text" v-model="estudiante.name" />
      </div>
      <div v-if="estudiante.active == 1">
        <label>Activo: </label>
        <input type="checkbox" v-model="estudiante.active" checked />
      </div>
      <div v-else>
        <label>Activo: </label>
        <input type="checkbox" v-model="estudiante.active" />
      </div>
    </blockquote>
    <button @click="actualizar">Save</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
//axios.defaults.baseURL = "http://127.0.0.1:8000";

export default {
  name: "EstudianteEdit",
  props: ["id"],
  data() {
    return {
      estudiante: "",
      id_estudiante: this.id
    };
  },
  created() {
    this.getEstudiante();
  },
  methods: {
    getEstudiante() {
      /*if(!id){ //pasando parmetro id en esta funcion sin declarar id_estudiante
        id = this.id;
      };*/
      axios
        .get("/api/estudiantes/" + this.id_estudiante)
        .then(res => {
          // const {data:{data}} = res;
          this.estudiante = res.data;
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    actualizar() {
      let datosform = {
        name: this.estudiante.name,
        active: this.estudiante.active
      };
      axios
        .put("/api/estudiantes/" + this.id_estudiante, datosform)
        .then(res => {
          console.log(res.data);
          console.log(datosform);
          this.$router.push({
            name: "Estudiante",
            params: {
              id: this.id_estudiante,
              massage: "exito al actualizar registro " + this.id_estudiante,
              color: "#dba340"
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
