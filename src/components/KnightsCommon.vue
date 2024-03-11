<template>
    <div class="col-md-4 mb-4">
        <div class="card border-dark">
            <div class="position-relative">
            </div>
            <div class="card-body text-center">
                <h5 class="card-title">{{ cavaleiro.nickname }}</h5>
                <p class="card-text"><strong>Nome:</strong> {{ cavaleiro.name }}</p>
                <p class="card-text"><strong>Idade:</strong> {{ calculateAge(cavaleiro.birthday) }}</p>
                <p class="card-text"><strong>Armas:</strong> {{ cavaleiro.weapons.length }}</p>
                <p class="card-text"><strong>Atributo:</strong> {{ cavaleiro.keyAttribute }}</p>
                <p class="card-text"><strong>Ataque:</strong> {{ attack(cavaleiro) }}</p>
                <p class="card-text"><strong>Exp:</strong> {{ calculateExperience() }}</p>

                <div class="mt-3">
                    <p><strong>Atributo Chave:</strong> {{ cavaleiro.keyAttribute }}</p>
                </div>

                <div class="btn-group">

                    <div class="mb-2">
                        <button @click="openEditForm(cavaleiro.nickname, cavaleiro._id)"
                            class="mr-2 btn btn-primary d-inline-block">Editar apelido</button>

                        <KnightsEdit :nickname="nickname" :showEditForm="showEditForm" :knightsId="knightsId"
                            @closeEdit="closeEdit" @knightEdited="knightEdited" class="d-inline-block"></KnightsEdit>


                        <button @click="openViewForm(cavaleiro._id)"
                            class="ml-2 btn btn-secondary d-inline-block">Visualizar</button>
                        <KnightsView :knightsId="knightsId" :showViewForm="showViewForm" @closeView="closeView"
                            class="d-inline-block"></KnightsView>

                        <button @click="deleteKnight(cavaleiro._id)"
                            class="ml-2 btn btn-danger d-inline-block">Aposentar</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import KnightsEdit from './KnightsEdit.vue';
import KnightsView from './KnightsView.vue';
import KnightsService from '../services/KnightsService';

export default {
    components: {
        KnightsEdit,
        KnightsView
    },
    props: {
        cavaleiro: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            openModalEdit: false,
            age: 0,
            nickname: '',
            knightsId: null,
            showEditForm: false,
            showViewForm: false
        };
    },
    methods: {
        attack(cavaleiro) {
            let attack = 10;
            const keyAttr = cavaleiro.keyAttribute;

            if (cavaleiro.weapons && cavaleiro.weapons.length > 0) {
                cavaleiro.weapons.forEach(weapon => {
                    if (weapon.equipped) {
                        const mod = cavaleiro.attributes[keyAttr];
                        attack += mod + weapon.mod;
                    }
                });
            }

            return attack;
        },
        calculateExperience() {
            const age = this.age;

            if (age < 7) {
                return 0;
            }

            const exp = Math.floor((age - 7) * Math.pow(22, 1.45));
            return exp;
        },
        calculateAge(birthday) {
            const birthDate = new Date(birthday);
            const currentDate = new Date();

            const differenceInMilliseconds = currentDate - birthDate;

            const ageInMilliseconds = new Date(differenceInMilliseconds);
            const age = ageInMilliseconds.getUTCFullYear() - 1970;

            this.age = age;

            return age;
        },
        goTo(url) {
            this.$router.push(`/${url}`);
        },
        openViewForm(knightsId) {
            this.knightsId = knightsId
            this.showViewForm = true;
        },
        closeView() {
            this.showViewForm = false;
        },
        openEditForm(nickname, knightsId) {
            this.nickname = nickname
            this.knightsId = knightsId
            this.showEditForm = true;
        },
        closeEdit() {
            this.showEditForm = false;
        },
        knightEdited() {
            this.showEditForm = false;
            this.$emit('knightEdited');
        },
        async deleteKnight(knightsId) {
            const confirmDelete = confirm("Tem certeza que deseja excluir este cavaleiro?");

            if (confirmDelete) {
                await KnightsService.deleteById(knightsId);
                this.$emit('knightEdited');
            }
        }


    }
};
</script>