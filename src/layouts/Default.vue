<template>
    <div class="layout">
        <Header/>
        <main class="content max-w-screen-xl m-auto ">
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
        min-height: 600px;
    }
}
</style>