//Salviamo in una variabile locale la funzione
//createApp, presa dalla variabile globale Vue.

const { createApp } = Vue

createApp ({
    data() {
        return{
            //dichiaro una variabiule che mostri le immagini e la inizializzo alla prima
            activeImage: 0,
            //creo l array contenente gli oggetti
             slides : [
                   {
                        image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, 
                    {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, 
                    {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, 
                    {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, 
                    {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ],
                autoscroll: null,
        }

    },
    // creo i metodi
    methods:{
        // prossima immagine
        nextImage(){
            if(this.activeImage== this.slides.length-1){
                this.activeImage=0;
            }
            else{
                this.activeImage++                
            }
        },
        //immagine precedente
        prevvImage(){
            if(this.activeImage==0){
                this.activeImage= this.slides.length-1;
            }
            else{
                this.activeImage--               
            } 
        },
        imageCurrent(index){
            this.activeImage= index;

        },
        startAutoscroll(){
            this.autoscroll= setInterval(() =>{
                this.nextImage()
            },3000);
        },
        stopIntervall(){
            clearInterval(this.autoscroll);
            this.autoscroll = null
        },
        resetAutoscroll(){
            this.stopIntervall();
            this.activeImage= 0;
        }

    }
}).mount("#app")

