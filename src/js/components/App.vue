<template>
    <div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
            </div>
            <input type="text" v-model="search" class="form-control form-search" placeholder="Quick search for title. eg: DigitalOcean" />
        </div>
        <div class="row-grid">
            <div class="card-custom" v-for="art in artsFilterList" :key="art.codepen">
                <div class="card-img-container">
                    <img class="card-img-top" :src="art.image" alt="Banner" loading="lazy" />
                </div>
                <div class="card-body" :class="art.border">
                    <h5 class="card-title">{{ art.title }}</h5>
                    <a :href="art.codepen" class="btn btn-link" target="_blank">
                        <i class="fab fa-codepen"></i>
                        CodePen
                    </a>
                    <a :href="art.github" class="btn btn-link" target="_blank">
                        <i class="fab fa-github"></i>
                        Github
                    </a>
                    <a :href="art.website" v-if="art.website" class="btn btn-link" target="_blank">
                        <i class="fas fa-globe"></i>
                        Website
                    </a>
                    <a :href="art.design" v-if="art.design" class="btn btn-link" target="_blank">
                        <i class="fas fa-image"></i>
                        Design
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import arts from "./arts.json";

export default {
    el: "#app",

    data() {
        return {
            search: "",
            arts: arts,
        };
    },

    computed: {
        artsFilterList() {
            return this.arts.filter((art) => {
                return this.search
                    .toLowerCase()
                    .split(" ")
                    .every((v) => art.title.toLowerCase().includes(v));
            });
        },
    },
};
</script>
