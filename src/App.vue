<template>
  <div id="app">
     <div class="responsive">
        <div id="data" class="row m-0 p-3">
          <div class="card col-sm-12 col-md-3  custom-card p-0" v-for="item in output" :key="item._id">
            <div  class="title">{{item.name}}</div>
                <img :id=item._id :src="item.img" @click="modalshow(item._id)" >
            <div class="price"> {{item.price}}</div>
          </div>
        </div>
    </div>
    <div id="condition" v-bind:style="[isVisible ? { display: 'block' } : {display: 'none'}]" class="overlay">
        <div id="text">
            <div class="closeIcon" @click="modalhide()"><span class="closetext">X</span></div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators" id="ind">
                   <li data-target="#carouselExampleIndicators" data-slide-to=iterator class="active"></li> 
                </ol>
                <div class="carousel-inner" id="cor">
                    <div class="carousel-item active">
                        <img class="d-block w-100" :src="imagePath" alt="slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'app',
    data(){
    return {
            output : [],
            images : [],
            isVisible : false,
            imagePath :""
        }
    },
    created(){
        this.loadImages()
    },
    methods:{
        loadImages(){
        axios
            .get("https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json")
            .then(result => {
                this.images = result.data.groups;
                for (let z = 0; z < this.images.length; z++) {
                    if (this.images[z].price) {
                        this.output.push({
                            name: this.images[z].name,
                            img: this.images[z].hero.href,
                            price: this.images[z].price.selling,
                            thumbnail: this.images[z].thumbnail.href,
                            _id: this.images[z].id
                        });
                    } else {
                        this.output.push({
                            name: this.images[z].name,
                            img: this.images[z].hero.href,
                            price: this.images[z].priceRange.selling.high,
                            thumbnail: this.images[z].thumbnail.href,
                            _id: this.images[z].id
                        });
                    }
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
        modalshow(id) {
            this.isVisible = true;
            for (let k = 0; k < this.output.length; k++) {
                if (this.output[k]._id == id) {
                    this.imagePath = this.output[k].thumbnail;
                }
            }
        },
        modalhide() {
            this.isVisible = false;
        }
    }
}
</script>
  
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.custom-card {
    margin: 2px;
}

.title {
    background: #E8E8E8;
    padding: 6px;
    font-weight: 600;
    font-size: 14px;
    color: #363636;
}

.price {
    background: black;
    width: 55px;
    color: whitesmoke;
    margin: 7px;
    padding: 2px;
    font-size: 13px;
}

.overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    cursor: pointer;
}

#text {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    color: white;
    width: 500px;
    height: 500px;
    background: white;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

@media only screen and (max-width: 600px) {
    #text {
        width: 350px !important;
    }
    .responsive {
        margin-left: 0px !important;
    }
}

.closeIcon {
    background: black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    float: right;
    margin: 3px;
}

.closetext {
    font-size: 10px;
    color: white;
    font-weight: 700;
    z-index: 20;
    position: absolute;
    /* left: 15px; */
    padding: 8px;
    margin-left: -10px;
}

.responsive {
    margin-left: 200px;
}

.carousel-control-prev {
    left: 0;
    background: grey;
    width: 30px;
    height: 32px;
    position: absolute;
    top: 50%;
}

.carousel-control-next {
    right: 0;
    /* left: 0; */
    background: grey;
    width: 30px;
    height: 32px;
    position: absolute;
    top: 50%;
}
</style>
