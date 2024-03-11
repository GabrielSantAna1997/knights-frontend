<template>
    <div>
        <!-- Modal -->
        <div v-if="showViewForm" class="modal-mask">
            <div class="modal-container medieval-style">
                <h2 class="modal-title">Detalhes do Cavaleiro</h2>
                <div class="modal-content">
                    <div v-if="cavaleiro">
                        <p><strong>Nome:</strong> {{ cavaleiro.name }}</p>
                        <p><strong>Apelido:</strong> {{ cavaleiro.nickname }}</p>
                        <p><strong>Data de Nascimento:</strong> {{ formattedBirthday  }}</p>
                        <p><strong>Armas:</strong></p>
                        <ul class="weapons-list">
                            <li v-for="arma in cavaleiro.weapons" :key="arma">{{ arma }}</li>
                        </ul>
                        <p><strong>Atributos:</strong></p>
                        <ul class="attributes-list">
                            <li v-for="(value, attribute) in cavaleiro.attributes" :key="attribute">
                                <span class="attribute-name">{{ attribute }}:</span> <span class="attribute-value">{{ value }}</span>
                            </li>
                        </ul>
                        <p><strong>Atributo Chave:</strong> {{ cavaleiro.keyAttribute }}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger medieval-btn" @click="closeModal">Fechar</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import KnightsService from '../services/KnightsService';

export default {
    props: {
        knightsId: {
            type: String,
            required: true
        },
        showViewForm: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            cavaleiro: {},
        };
    },
    watch: {
        async showViewForm(value) {
            if (value) {
                this.cavaleiro = await KnightsService.getById(this.knightsId);
            }
        }
    },
    computed: {
        formattedBirthday() {
            if (this.cavaleiro && this.cavaleiro.birthday) {
                const date = new Date(this.cavaleiro.birthday);
                const formattedDate = date.toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' });
                return formattedDate;
            }
            return '';
        }
    },
    methods: {
        closeModal() {
            this.cavaleiro = {}
            this.$emit('closeView');
        },
    }
};
</script>

<style scoped>
.modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-container {
    background-color: #fff;
    border: 2px solid #0d6efd; /* Marrom escuro */
    border-radius: 10px;
    padding: 20px;
    max-width: 600px;
}

.modal-title {
    color: #0d6efd; /* Marrom escuro */
    text-align: center;
}

.weapons-list,
.attributes-list {
    list-style-type: none;
    padding-left: 0;
}

.attribute-name {
    font-weight: bold;
}

.attribute-value {
    color: #0d6efd; /* Marrom escuro */
}

.medieval-btn {
    background-color: #0d6efd; /* Marrom escuro */
    border-color: #0d6efd; /* Marrom escuro */
}

.medieval-btn:hover {
    background-color: #0a58ca; /* Marrom claro */
    border-color: #0a58ca; /* Marrom claro */
}
</style>