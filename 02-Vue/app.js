const app = Vue.createApp({
    template: `
    <div v-if='showInfo'>If else deneme</div>
    <div v-if='!showInfo'>If else deneme2</div>
    <button @click="toggle">
        <span v-if="!showInfo">Göster</span>
        <span v-else>Gizle</span>
    </button>
    `,
    data(){
        return{
            showInfo:true
        }
            
    },

    methods: {
        toggle(){
            this.showInfo=!this.showInfo;
        }
        
        
    }
});

app.mount('#app')