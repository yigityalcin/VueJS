const app = Vue.createApp({
    template: `
    <h2>Başlık: {{baslik}}</h2>
    <h3>İçerik: {{icerik}}</h3>
    <p>Yorum Sayısı: {{yorumSayisi}}</p>
    <button v-on:click="ekle()">Ekle</button>
    <p>{{yazi}}</p>
    `,
    data(){
        return{
            baslik: 'Vue ',
            icerik: 'Vue 3 Subjects',
            yorumSayisi: 0,
            yazi: 'Yorum eklemek icin tıkla'
        }
    },
    methods: {
        ekle(){
            console.log('ekle methodu calisti');
            this.yorumSayisi++;
            this.yazi=`${this.yorumSayisi} tane yorum yazıldı`
        }
    }
});

app.mount('#app')