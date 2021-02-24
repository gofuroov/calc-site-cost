var app = new Vue({
    el: '#app',
    data: {
        hisob: {
            start: 0,
            soni: 0,
            dizayni: 0,
            blog2:[],
            blog3: 0,
        },
        admin: {
            blog1:{
                soni: [
                    {
                        nomi: "0-5",
                        narxi: 500000
                    },
                    {
                        nomi: "5-10",
                        narxi: 1000000
                    },
                    {
                        nomi: "10-15",
                        narxi: 123
                    },
                    {
                        nomi: "Dostonbek",
                        narxi: 1234
                    }
                ],
                dizayni: [
                    {
                        nomi: "Tayyor shablon",
                        narxi: 1500000
                    },
                    {
                        nomi: "Maxsus dizayn",
                        narxi: 3500000
                    }
                ]
            },
            blog2: [
                {
                    nomi: "Ro'yxatdan o'tish / Profil",
                    narxi: 1
                },
                {
                    nomi: "Foto / video galereya",
                    narxi: 2
                },
                {
                    nomi: "Saytning mobil versiyasi",
                    narxi: 3
                },
                {
                    nomi: "Olimjon",
                    narxi: 12345689
                },
                {
                    nomi: "Pythonda backend",
                    narxi: 123457800
                }
            ],
            blog3: [
                {
                    nomi: "O'zimning domen va hostingim bor",
                    narxi: 123456
                },
                {
                    nomi: "Domen / hosting yo'q, yangi olish kerak",
                    narxi: 1234567
                }
            ]
        }
    },
    computed: {
        jami(){
            return this.hisob.start+this.hisob.soni+this.hisob.dizayni+this.summBlog2+this.hisob.blog3
        },
        summBlog2(){
            return this.hisob.blog2.reduce((a, b) => a + b, 0)
        }
    },
    methods: {
        show(){
            alert(this.jami+" so'm")
        },
        calcId(str){
            return window.btoa(str)
        }
    }
})