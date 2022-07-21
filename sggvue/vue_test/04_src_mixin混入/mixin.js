export const mixin = {
    methods: {
        showName() {
            alert(this.name);
        },
    },
    mounted() {
        console.log("使用mixin");
    },
};
