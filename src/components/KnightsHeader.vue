<template>
    <div>
        <header data-bs-theme="dark">
            <div class="navbar navbar-dark bg-dark shadow-sm">
                <div class="container d-flex justify-content-between align-items-center">
                    <div>
                        <a @click="goTo('')" class="navbar-brand">
                            <strong>Cavaleiros</strong>
                        </a>
                    </div>
                    <div>
                        <button class="btn btn-outline-light me-2" @click="goTo('register')">Cadastrar Cavaleiro</button>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>


<script>

export default {
    methods: {
        goTo(url) {
            this.$router.push(`/${url}`);
        }
    }
}
</script>

<style></style>