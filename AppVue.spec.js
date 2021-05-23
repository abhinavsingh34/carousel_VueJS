import App from "../App.vue";
import { shallowMount } from "@vue/test-utils";
import axios from "axios";

jest.mock("axios", () => ({
get: jest.fn(() => Promise.resolve({ data: 3 })),
}));

describe("Mounted App", () => {
const wrapper = shallowMount(App);

beforeEach(() => {
global.$ = jest.fn();
});

test("App", () => {
// render the component
global.$ = jest.fn();
// window.$ = jest.fn();
expect(wrapper.isVueInstance()).toBeTruthy();
});

it("Calls axios.get", () => {
const result = wrapper.vm.loadImages();

expect(result).toEqual();
expect(axios.get).toBeCalledWith(
"https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json"
);
});

it("loadImages function to be called for image price", () => {
const output = [
{
_id: "hth-gingham-bath-mat-b3589",
active: true,
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0362/heather-taylor-home-gingham-bath-mat-1-m.jpg",
name: "Heather Taylor Home Gingham Bath Mat",
price: "$40.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0362/heather-taylor-home-gingham-bath-mat-1-m.jpg",
},
{
_id: "hth-scallop-edge-bath-mat-b3587",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0260/heather-taylor-home-scallop-edge-bath-mat-m.jpg",
name: "Heather Taylor Home Scallop Edge Bath Mat",
price: "$40.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0260/heather-taylor-home-scallop-edge-bath-mat-m.jpg",
},
{
_id: "hth-gingham-shower-curtain-b3590",
img: "#",
name: "Heather Taylor Home Gingham Shower Curtain",
price: "$80.00",
thumbnail: "#",
},
{
_id: "oval-ikat-shower-curtain-b3591",
img: "#",
name: "Oval Ikat Shower Curtain",
price: "$90.00",
thumbnail: "#",
},
{
_id: "organic-stripe-stitch-candlewick-shower-curtain-b3108",
img: "#",
name: "Organic Stripe Stitch Candlewick Shower Curtain",
price: "$90.00",
thumbnail: "#",
},
{
_id: "hth-gingham-stripe-bath-towel-b3588",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0258/heather-taylor-home-gingham-stripe-bath-towel-2-m.jpg",
name: "Heather Taylor Home Gingham &amp; Stripe Bath Towels",
price: "$34.50",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0258/heather-taylor-home-gingham-stripe-bath-towel-2-m.jpg",
},
{
_id: "nova-pedal-waste-bin-b3583",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0200/nova-pedal-waste-bin-1-m.jpg",
name: "Nova Pedal Waste Bin",
price: "$110.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0200/nova-pedal-waste-bin-1-m.jpg",
},
{
_id: "ume-pedal-waste-bin-b3586",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/ume-pedal-waste-bin-m.jpg",
name: "Ume Pedal Waste Bin",
price: "$85.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/ume-pedal-waste-bin-m.jpg",
},
{
_id: "nova-toilet-brush-b3582",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/nova-toilet-brush-2-m.jpg",
name: "Nova Toilet Brush",
price: "$69.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/nova-toilet-brush-2-m.jpg",
},
{
_id: "dylan-industrial-bed-h8077",
img: "#",
name: "Dylan Industrial Bed",
price: "$1,399.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202118/0060/dylan-industrial-bed-1-m.jpg",
},
{
_id: "hth-gingham-bath-mat-b3589",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0362/heather-taylor-home-gingham-bath-mat-1-m.jpg",
name: "Heather Taylor Home Gingham Bath Mat",
price: "$40.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0362/heather-taylor-home-gingham-bath-mat-1-m.jpg",
},
{
_id: "hth-scallop-edge-bath-mat-b3587",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0260/heather-taylor-home-scallop-edge-bath-mat-m.jpg",
name: "Heather Taylor Home Scallop Edge Bath Mat",
price: "$40.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0260/heather-taylor-home-scallop-edge-bath-mat-m.jpg",
},
{
_id: "hth-gingham-shower-curtain-b3590",
img: "#",
name: "Heather Taylor Home Gingham Shower Curtain",
price: "$80.00",
thumbnail: "#",
},
{
_id: "oval-ikat-shower-curtain-b3591",
img: "#",
name: "Oval Ikat Shower Curtain",
price: "$90.00",
thumbnail: "#",
},
{
_id: "organic-stripe-stitch-candlewick-shower-curtain-b3108",
img: "#",
name: "Organic Stripe Stitch Candlewick Shower Curtain",
price: "$90.00",
thumbnail: "#",
},
{
_id: "hth-gingham-stripe-bath-towel-b3588",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0258/heather-taylor-home-gingham-stripe-bath-towel-2-m.jpg",
name: "Heather Taylor Home Gingham &amp; Stripe Bath Towels",
price: "$34.50",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0258/heather-taylor-home-gingham-stripe-bath-towel-2-m.jpg",
},
{
_id: "nova-pedal-waste-bin-b3583",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0200/nova-pedal-waste-bin-1-m.jpg",
name: "Nova Pedal Waste Bin",
price: "$110.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0200/nova-pedal-waste-bin-1-m.jpg",
},
{
_id: "ume-pedal-waste-bin-b3586",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/ume-pedal-waste-bin-m.jpg",
name: "Ume Pedal Waste Bin",
price: "$85.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/ume-pedal-waste-bin-m.jpg",
},
{
_id: "nova-toilet-brush-b3582",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/nova-toilet-brush-2-m.jpg",
name: "Nova Toilet Brush",
price: "$69.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/nova-toilet-brush-2-m.jpg",
},
{
_id: "dylan-industrial-bed-h8077",
img: "#",
name: "Dylan Industrial Bed",
price: "$1,399.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202118/0060/dylan-industrial-bed-1-m.jpg",
},
];

wrapper.vm.images = [
{
flags: [],
hero: {},
id: "hth-gingham-bath-mat-b3589",
images: [],
links: {},
messages: [],
name: "Heather Taylor Home Gingham Bath Mat",
price: {
regular: "40",
selling: "50",
},
reviews: {},
swatches: [],
thumbnail: {},
},
];

wrapper.vm.loadImages();
expect(wrapper.vm.output).toEqual(output);
});

it("loadImages function to be called for image price null", () => {
const output = [
{
_id: "hth-gingham-bath-mat-b3589",
active: true,
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0362/heather-taylor-home-gingham-bath-mat-1-m.jpg",
name: "Heather Taylor Home Gingham Bath Mat",
price: "$40.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0362/heather-taylor-home-gingham-bath-mat-1-m.jpg",
},
{
_id: "hth-scallop-edge-bath-mat-b3587",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0260/heather-taylor-home-scallop-edge-bath-mat-m.jpg",
name: "Heather Taylor Home Scallop Edge Bath Mat",
price: "$40.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0260/heather-taylor-home-scallop-edge-bath-mat-m.jpg",
},
{
_id: "hth-gingham-shower-curtain-b3590",
img: "#",
name: "Heather Taylor Home Gingham Shower Curtain",
price: "$80.00",
thumbnail: "#",
},
{
_id: "oval-ikat-shower-curtain-b3591",
img: "#",
name: "Oval Ikat Shower Curtain",
price: "$90.00",
thumbnail: "#",
},
{
_id: "organic-stripe-stitch-candlewick-shower-curtain-b3108",
img: "#",
name: "Organic Stripe Stitch Candlewick Shower Curtain",
price: "$90.00",
thumbnail: "#",
},
{
_id: "hth-gingham-stripe-bath-towel-b3588",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0258/heather-taylor-home-gingham-stripe-bath-towel-2-m.jpg",
name: "Heather Taylor Home Gingham &amp; Stripe Bath Towels",
price: "$34.50",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0258/heather-taylor-home-gingham-stripe-bath-towel-2-m.jpg",
},
{
_id: "nova-pedal-waste-bin-b3583",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0200/nova-pedal-waste-bin-1-m.jpg",
name: "Nova Pedal Waste Bin",
price: "$110.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0200/nova-pedal-waste-bin-1-m.jpg",
},
{
_id: "ume-pedal-waste-bin-b3586",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/ume-pedal-waste-bin-m.jpg",
name: "Ume Pedal Waste Bin",
price: "$85.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/ume-pedal-waste-bin-m.jpg",
},
{
_id: "nova-toilet-brush-b3582",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/nova-toilet-brush-2-m.jpg",
name: "Nova Toilet Brush",
price: "$69.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/nova-toilet-brush-2-m.jpg",
},
{
_id: "dylan-industrial-bed-h8077",
img: "#",
name: "Dylan Industrial Bed",
price: "$1,399.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202118/0060/dylan-industrial-bed-1-m.jpg",
},
{
_id: "hth-gingham-bath-mat-b3589",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0362/heather-taylor-home-gingham-bath-mat-1-m.jpg",
name: "Heather Taylor Home Gingham Bath Mat",
price: "$40.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0362/heather-taylor-home-gingham-bath-mat-1-m.jpg",
},
{
_id: "hth-scallop-edge-bath-mat-b3587",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0260/heather-taylor-home-scallop-edge-bath-mat-m.jpg",
name: "Heather Taylor Home Scallop Edge Bath Mat",
price: "$40.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0260/heather-taylor-home-scallop-edge-bath-mat-m.jpg",
},
{
_id: "hth-gingham-shower-curtain-b3590",
img: "#",
name: "Heather Taylor Home Gingham Shower Curtain",
price: "$80.00",
thumbnail: "#",
},
{
_id: "oval-ikat-shower-curtain-b3591",
img: "#",
name: "Oval Ikat Shower Curtain",
price: "$90.00",
thumbnail: "#",
},
{
_id: "organic-stripe-stitch-candlewick-shower-curtain-b3108",
img: "#",
name: "Organic Stripe Stitch Candlewick Shower Curtain",
price: "$90.00",
thumbnail: "#",
},
{
_id: "hth-gingham-stripe-bath-towel-b3588",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0258/heather-taylor-home-gingham-stripe-bath-towel-2-m.jpg",
name: "Heather Taylor Home Gingham &amp; Stripe Bath Towels",
price: "$34.50",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0258/heather-taylor-home-gingham-stripe-bath-towel-2-m.jpg",
},
{
_id: "nova-pedal-waste-bin-b3583",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0200/nova-pedal-waste-bin-1-m.jpg",
name: "Nova Pedal Waste Bin",
price: "$110.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0200/nova-pedal-waste-bin-1-m.jpg",
},
{
_id: "ume-pedal-waste-bin-b3586",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/ume-pedal-waste-bin-m.jpg",
name: "Ume Pedal Waste Bin",
price: "$85.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/ume-pedal-waste-bin-m.jpg",
},
{
_id: "nova-toilet-brush-b3582",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/nova-toilet-brush-2-m.jpg",
name: "Nova Toilet Brush",
price: "$69.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/nova-toilet-brush-2-m.jpg",
},
{
_id: "dylan-industrial-bed-h8077",
img: "#",
name: "Dylan Industrial Bed",
price: "$1,399.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202118/0060/dylan-industrial-bed-1-m.jpg",
},
{
_id: "hth-gingham-bath-mat-b3589",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0362/heather-taylor-home-gingham-bath-mat-1-m.jpg",
name: "Heather Taylor Home Gingham Bath Mat",
price: "$40.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0362/heather-taylor-home-gingham-bath-mat-1-m.jpg",
},
{
_id: "hth-scallop-edge-bath-mat-b3587",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0260/heather-taylor-home-scallop-edge-bath-mat-m.jpg",
name: "Heather Taylor Home Scallop Edge Bath Mat",
price: "$40.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0260/heather-taylor-home-scallop-edge-bath-mat-m.jpg",
},
{
_id: "hth-gingham-shower-curtain-b3590",
img: "#",
name: "Heather Taylor Home Gingham Shower Curtain",
price: "$80.00",
thumbnail: "#",
},
{
_id: "oval-ikat-shower-curtain-b3591",
img: "#",
name: "Oval Ikat Shower Curtain",
price: "$90.00",
thumbnail: "#",
},
{
_id: "organic-stripe-stitch-candlewick-shower-curtain-b3108",
img: "#",
name: "Organic Stripe Stitch Candlewick Shower Curtain",
price: "$90.00",
thumbnail: "#",
},
{
_id: "hth-gingham-stripe-bath-towel-b3588",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0258/heather-taylor-home-gingham-stripe-bath-towel-2-m.jpg",
name: "Heather Taylor Home Gingham &amp; Stripe Bath Towels",
price: "$34.50",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202116/0258/heather-taylor-home-gingham-stripe-bath-towel-2-m.jpg",
},
{
_id: "nova-pedal-waste-bin-b3583",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0200/nova-pedal-waste-bin-1-m.jpg",
name: "Nova Pedal Waste Bin",
price: "$110.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0200/nova-pedal-waste-bin-1-m.jpg",
},
{
_id: "ume-pedal-waste-bin-b3586",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/ume-pedal-waste-bin-m.jpg",
name: "Ume Pedal Waste Bin",
price: "$85.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/ume-pedal-waste-bin-m.jpg",
},
{
_id: "nova-toilet-brush-b3582",
img:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/nova-toilet-brush-2-m.jpg",
name: "Nova Toilet Brush",
price: "$69.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202117/0282/nova-toilet-brush-2-m.jpg",
},
{
_id: "dylan-industrial-bed-h8077",
img: "#",
name: "Dylan Industrial Bed",
price: "$1,399.00",
thumbnail:
"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202118/0060/dylan-industrial-bed-1-m.jpg",
},
];

wrapper.vm.images = [
{
flags: [],
hero: {},
id: "hth-gingham-bath-mat-b3589",
images: [],
links: {},
messages: [],
name: "Heather Taylor Home Gingham Bath Mat",
price: {
regular: "40",
selling: "50",
},
reviews: {},
swatches: [],
thumbnail: {},
},
];

wrapper.vm.loadImages();
expect(wrapper.vm.output).toEqual(output);
});

it("modalshow function to be called", () => {
wrapper.vm.modalshow("hth-gingham-bath-mat-b3589");
expect(wrapper.vm.isVisible).toEqual(true);
});

it("modalhide function to be called", () => {
wrapper.vm.modalhide();
expect(wrapper.vm.isVisible).toEqual(false);
});

it("nextImage function to be called", () => {
wrapper.vm.nextImage();
// expect(wrapper.vm.isVisible).toEqual(false);
});

it("previousImage function to be called", () => {
wrapper.vm.previousImage();
// expect(wrapper.vm.isVisible).toEqual(false);
});

it("renders the correct html", () => {
expect(wrapper.html()).toMatchSnapshot();
});
});