<template>
    <div class="container">
        <h2>Cadastro de Cavaleiros</h2>
        <form @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="name" class="form-label">Nome:</label>
                <input type="text" class="form-control" id="name" v-model="cavaleiro.name" required>
            </div>
            <div class="mb-3">
                <label for="nickname" class="form-label">Apelido:</label>
                <input type="text" class="form-control" id="nickname" v-model="cavaleiro.nickname" required>
            </div>
            <div class="mb-3">
                <label for="birthday" class="form-label">Data de Nascimento:</label>
                <input type="date" class="form-control" id="birthday" v-model="cavaleiro.birthday" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Armas:</label>
                <div v-for="weapon in weapons" :key="weapon.name" class="form-check">
                    <input class="form-check-input" type="checkbox" :id="weapon.name" :value="weapon" v-model="cavaleiro.weapons">
                    <label class="form-check-label" :for="weapon.name">{{ weapon.name }}</label>
                </div>
            </div>
            <!-- Atributos -->
            <div class="mb-3" v-for="(value, attribute) in cavaleiro.attributes" :key="attribute">
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <label class="form-label">{{ translateAttribute(attribute) }}</label>
                    </div>
                    <div class="col-md-9">
                        <div class="input-group">
                            <button type="button" class="btn btn-secondary btn-sm" @click="adjustAttribute(attribute, '-')">-</button>
                            <span class="form-control text-center" style="width: 50px; min-width: 50px;">{{ value }}</span>
                            <button type="button" class="btn btn-secondary btn-sm" @click="adjustAttribute(attribute, '+')">+</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Atributo Chave -->
            <div class="mb-3">
                <label for="keyAttribute" class="form-label">Atributo Chave:</label>
                <select class="form-select" id="keyAttribute" v-model="cavaleiro.keyAttribute" required>
                    <option value="strength">Força</option>
                    <option value="dexterity">Destreza</option>
                    <option value="constitution">Constituição</option>
                    <option value="intelligence">Inteligência</option>
                    <option value="wisdom">Sabedoria</option>
                    <option value="charisma">Carisma</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Cadastrar</button>
        </form>
    </div>
</template>

<script>
import KnightsService from '../services/KnightsService';
export default {
    data() {
        return {
            cavaleiro: {
                name: '',
                nickname: '',
                birthday: '',
                weapons: [],
                attributes: {
                    strength: 0,
                    dexterity: 0,
                    constitution: 0,
                    intelligence: 0,
                    wisdom: 0,
                    charisma: 0
                },
                keyAttribute: ''
            },
            weapons: [
                { name: "Espada", mod: 3, attr: "strength", equipped: true },
                { name: "Machado", mod: 4, attr: "strength", equipped: false },
                { name: "Arco", mod: 2, attr: "dexterity", equipped: true },
                { name: "Cajado", mod: 2, attr: "intelligence", equipped: false },
                { name: "Lança", mod: 3, attr: "dexterity", equipped: false }
            ]
        };
    },
    methods: {
        async submitForm() {
            await KnightsService.createUser(this.cavaleiro);
            this.cavaleiro = {
                name: '',
                nickname: '',
                birthday: '',
                weapons: [],
                attributes: {
                    strength: false,
                    dexterity: false,
                },
                keyAttribute: ''
            };
        },
        adjustAttribute(attribute, operation) {
            if (operation === '+') {
                this.cavaleiro.attributes[attribute]++;
            } else if (operation === '-') {
                this.cavaleiro.attributes[attribute]--;
            }
        },
        translateAttribute(attribute) {
            const translations = {
                strength: 'Força',
                dexterity: 'Destreza',
                constitution: 'Constituição',
                intelligence: 'Inteligência',
                wisdom: 'Sabedoria',
                charisma: 'Carisma'
            };
            return translations[attribute];
        }
    }
};
</script>

<style>
/* Adicione estilos CSS conforme necessário */
</style>
