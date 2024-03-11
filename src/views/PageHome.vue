<template>
    <div>
        <KnightsSection @changeTab="changeTab" />
    </div>
    <div v-if="mostrarTabCavaleiros" class="knight-common col-12 my-2 p-2">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <KnightsCommon v-for="(cavaleiro, index) in cavaleiros" :key="index" :cavaleiro="cavaleiro"
                    @knightEdited="knightEdited"
                        class="col-12 col-md-6 col-lg-4" />
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="mostrarTabHerois" class="knight-common col-12 my-2 p-2">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <KnightsHero v-for="(heroi, index) in herois" :key="index" :cavaleiro="heroi"
                    @knightHeroEdited="knightHeroEdited"
                        class="col-12 col-md-6 col-lg-4" />
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import KnightsSection from '../components/KnightsSection.vue';
import KnightsCommon from '../components/KnightsCommon.vue';
import KnightsHero from '../components/KnightsHero.vue';
import KnightsService from '../services/KnightsService';


export default {
    components: {
        KnightsCommon,
        KnightsHero,
        KnightsSection
    },
    data() {
        return {
            mostrarTabCavaleiros: true,
            mostrarTabHerois: false,
            cavaleiros: [],
            herois: []
        };
    },
    async mounted() {
        this.cavaleiros = await KnightsService.getUsers();
    },
    methods: {
        async getUsers(){
            return await KnightsService.getUsers();
        },
        async getUsersHero(){
            return await KnightsService.getUsers('hero');
        },
        async changeTab(text) {
            if (text === 'Herois') {
                this.herois = await this.getUsersHero();
                this.mostrarTabHerois = true;
                this.mostrarTabCavaleiros = false;
            } else {
                this.mostrarTabHerois = false;
                this.mostrarTabCavaleiros = true;
                this.cavaleiros = await this.getUsers();
            }
        },
        mostrarCavaleiros() {
            this.mostrarTabCavaleiros = true;
            this.mostrarTabHerois = false;
        },
        mostrarHerois() {
            this.mostrarTabCavaleiros = false;
            this.mostrarTabHerois = true;
        },
        async knightEdited(){
            this.cavaleiros = await this.getUsers();
        },
        async knightHeroEdited(){
            this.herois = await this.getUsersHero();
        }
    }
}
</script>

<style>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}

.b-example-divider {
    width: 100%;
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
}

.bi {
    vertical-align: -.125em;
    fill: currentColor;
}

.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
    --bd-violet-bg: #712cf9;
    --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

    --bs-btn-font-weight: 600;
    --bs-btn-color: var(--bs-white);
    --bs-btn-bg: var(--bd-violet-bg);
    --bs-btn-border-color: var(--bd-violet-bg);
    --bs-btn-hover-color: var(--bs-white);
    --bs-btn-hover-bg: #6528e0;
    --bs-btn-hover-border-color: #6528e0;
    --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
    --bs-btn-active-color: var(--bs-btn-hover-color);
    --bs-btn-active-bg: #5a23c8;
    --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
    z-index: 1500;
}

.knight-common .row {
    margin-left: -5px;
    margin-right: -5px;
}

.knight-common .col-12 {
    padding-left: 3%;
    padding-right: 3%
}
</style>./components/KnightsSection.vue