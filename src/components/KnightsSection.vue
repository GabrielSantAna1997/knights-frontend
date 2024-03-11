<template>
    <div class="custom-color">
        <section class="py-5 text-center container ">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h1 class="fw-light">Cavaleiros</h1>
                    <p class="lead text-body-secondary">Escolha entre Cavaleiros Comuns e Cavaleiros que Já São Heróis.
                    </p>
                    <p>
                        <a class="btn btn-primary my-2" @click="changeTab('Comuns')">Comuns</a>
                        <a class="btn btn-secondary my-2" @click="changeTab('Herois')">Herois</a>
                    </p>
                </div>
            </div>
        </section>
    </div>

</template>

<script>

export default {

    methods: {
        changeTab(text) {
            this.$emit('changeTab', text);
        }
    }
}
</script>

<style>
.custom-color {
    background-color: rgb(231, 231, 231);
}
</style>