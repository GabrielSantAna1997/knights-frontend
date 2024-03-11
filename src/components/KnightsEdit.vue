<template>
  <div>
    <!-- Modal -->
    <div v-if="showEditForm" class="modal-mask">
      <div class="modal-container">
        <h2>Editar Cavaleiro</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="nickname" class="form-label">Apelido:</label>
            <input type="text" class="form-control" id="nickname" v-model="newNikeName" required>
          </div>
          <button type="submit" class="btn btn-primary">Atualizar</button>
          <button type="button" class="btn btn-danger" @click="closeModal" >Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import KnightsService from '../services/KnightsService';

export default {
  props: {
    nickname: {
      type: String,
      required: true
    },
    showEditForm: {
      type: Boolean,
      default: false
    },
    knightsId: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      showModal: false,
      newNikeName: '',
    };
  },
  watch: {
    showEditForm() {
      this.newNikeName = this.nickname;
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
      this.newNikeName = '';
      this.$emit('closeEdit');
    },
    async submitForm() {
      await KnightsService.updateUser(this.knightsId, this.newNikeName);
      this.showModal = false;
      this.$emit('knightEdited');
    },
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
}
</style>
