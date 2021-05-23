<template>
    <div id="app">
        <div id="data" class="row card-container">
            <div class="card col-sm-12 col-md-4 custom-card" v-for="item in output" :key="item._id">
                <div class="title">{{item.name}}</div>
                <img :id=item._id :src="item.img" @click="modalshow(item._id)" />
                <div class="price"> {{item.price}}</div>
            </div>
        </div>
        <div id="condition" v-bind:style="[isVisible ? { display: 'block' } : {display: 'none'}]" class="overlay">
            <div id="text">
                <div class="closeIcon" @click="modalhide()"><span class="closetext">X</span></div>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators" id="ind">
                        <li v-for="(item, index) in output" v-bind:key="index" data-target="#carouselExampleIndicators"
                            v-bind:class="{'active': item.active}"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner">
                        <div v-for="(item, index) in output" v-bind:key="index" class="item"
                            v-bind:class="{'active': item.active}">
                            <img class="" :src="item.img" alt="slide">
                        </div>
                    </div>

                    <!-- Left and right controls -->
                    <a class="left carousel-control" href="#myCarousel" data-slide="prev" @click="previousImage()">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" data-slide="next" @click="nextImage()">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    const $ = window.$;

    export default {
        name: 'App',
        data() {
            return {
                output: [],
                images: [],
                isVisible: false
            }
        },
        created() {
            this.loadImages();
        },
        mounted() {
            if ($) {
                $('.carousel').carousel({
                    keyboard: true,
                    interval: '9999999'
                });
            }
        },
        methods: {
            loadImages() {
                const formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2
                });
                axios
                    .get("https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json")
                    .then(result => {
                        const {data: {groups} = []} = result;
                        this.images = groups;
                        for (let z = 0; z < this.images.length; z++) {
                            if (this.images[z].price) {
                                this.output.push({
                                    name: this.images[z].name,
                                    img: this.images[z].hero ? this.images[z].hero.href : '#',
                                    price: formatter.format(this.images[z].price.selling),
                                    thumbnail: this.images[z].thumbnail ? this.images[z].thumbnail.href : '#',
                                    _id: this.images[z].id
                                });
                            } else {
                                this.output.push({
                                    name: this.images[z].name,
                                    img: this.images[z].hero ? this.images[z].hero.href : '#',
                                    price: formatter.format(this.images[z].priceRange.selling.high),
                                    thumbnail: this.images[z].thumbnail ? this.images[z].thumbnail.href : '#',
                                    _id: this.images[z].id
                                });
                            }
                        }
                        this.output[0].active = true;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            modalshow(id) {
                for (let k = 0; k < this.output.length; k++) {
                    if (this.output[k]._id == id) {
                        $('.carousel').carousel(k);
                    }
                }
                this.isVisible = true;
            },
            nextImage() {
                $('.carousel').carousel('next');
            },
            previousImage() {
                $('.carousel').carousel('prev');
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
        padding: 2px;
    }

    .card-container {
        justify-content: center;
        margin: 0;
    }

    .card-container img {
        cursor: pointer;
        min-height: 415px;
        width: 100%;
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
        width: 72px;
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

    @media (max-width: 768px) {
        #text {
            top: 27%;
        }
    }

    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait) {
        #text {
            top: 27%;
        }
    }

    @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
        #text {
            top: 27%;
        }
    }

    @media only screen and (max-width: 600px) {
        #text {
            width: 350px !important;
        }
    }

    /*iPhone 6 Portrait*/
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation : portrait) {
        #text {
            top: 27%;
        }
    }

    /*iPhone 6 landscape*/
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation : landscape) {
        #text {
            top: 27%;
        }
    }

    /*iPhone 6+ Portrait*/
    @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation : portrait) {
        #text {
            top: 45%
        }
    }

    /*iPhone 6+ landscape*/
    @media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation : landscape) {
        #text {
            top: 45%
        }
    }

    /*iPhone 6 and iPhone 6+ portrait and landscape*/
    @media only screen and (max-device-width: 640px),
    only screen and (max-device-width: 667px),
    only screen and (max-width: 480px) {
        #text {
            top: 45%
        }
    }

    /*iPhone 6 and iPhone 6+ portrait*/
    @media only screen and (max-device-width: 640px),
    only screen and (max-device-width: 667px),
    only screen and (max-width: 480px) and (orientation : portrait) {
        #text {
            top: 45%
        }

    }

    /*iPhone 6 and iPhone 6+ landscape*/
    @media only screen and (max-device-width: 640px),
    only screen and (max-device-width: 667px),
    only screen and (max-width: 480px) and (orientation : landscape) {
        #text {
            top: 45%
        }
    }

    .item img {
        width: 100%;
    }

    .closeIcon {
        background: black;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        float: right;
        margin: 3px;
        display: flex;
        justify-content: center;
    }

    .closetext {
        font-size: 10px;
        color: white;
        font-weight: 700;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>