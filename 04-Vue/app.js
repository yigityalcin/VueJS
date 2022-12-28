const app = Vue.createApp({
    // template: `
    // <ul>
    //     <li v-for="gun in gunler">{{gun}}</li>
    // </ul>
    // `,
    template: `
    <ul>
        <li v-for="person in persons">Calisan: {{person.isim}} - Maaş: {{person.maas}}</li>
    </ul>
    `,
    data(){
        return{
            // gunler: ["Pazartesi", "Salı", "Çarşamba",
            // "Perşembe","Cuma","Cumartesi","Pazar"]
            persons: [
                {isim:"Yigit", maas:8500},
                {isim:"Batu", maas:20500},
                {isim:"Serdar", maas:3130}
            ]
        }
    },
    methods: {
        
    },
});

app.mount('#app')