<template>
    <div class="layout bg-gray-200">
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
    },
}
</script>

<style lang="scss">
.layout {
    background: #f0f0f0;
    .content {
        min-height: 600px;
    }
}
</style>