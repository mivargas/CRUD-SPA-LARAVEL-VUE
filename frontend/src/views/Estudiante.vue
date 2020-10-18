<template>
  <div class="estudiante">
    <h1>Estudiante</h1>
    <div :style="'color:' + color">{{ massage }}</div>
    <p>{{ estudiante.id }} | {{ estudiante.name }} | {{ estudiante.active }}</p>
    <button @click="editar">Edit</button>
    <button @click="eliminar">Dalete</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
//axios.defaults.baseURL = "http://127.0.0.1:8000";

export default {
  name: "Estudiante",
  props: ["id", "massage", "color"],
  data() {
    return {
      estudiante: "",
      id_estudiante: this.id,
      mensaje: this.massage
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
    editar() {
      this.$router.push("/estudiante/" + this.id + "/edit");
    },
    eliminar() {
      let confirmacion = confirm("Deseas eliminar el registro " + this.id);
      if (confirmacion) {
        axios
          .delete("/api/estudiantes/" + this.id)
          .then(() => {
            this.$router.push({
              name: "Estudiantes",
              params: { massage: "Eliminado registro " + this.id, color: "red" }
            });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        return false;
      }
    }
  }
};
</script>
