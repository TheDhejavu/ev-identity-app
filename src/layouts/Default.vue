<template>
    <div class="layout">
        <Header/>
        <main class="content">
            <slot/>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Header from "./Header";
import Footer  from "./Footer";

export default {
    name: "layout",
    components: {
        Header,
        Footer,
    }
}
</script>

<style lang="scss">
.layout {
    .content {
        padding:40px 0;
    }
}
</style>