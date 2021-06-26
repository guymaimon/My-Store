import Category from "../models/Category"

export const CATEGORIES = [
    new Category('c1', 'Shirts', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy6vdeUdOXteJJF48K5zwcDa4yrnxNytbMiQ&usqp=CAU'),
    new Category('c2', 'Pants', 'https://media.gq.com/photos/606e29d927fd7ab051def285/master/w_2000,h_1333,c_limit/Abercrombie-&-Fitch-straight-chino-pants.jpg'),
    new Category('c3', 'Watch', 'https://images.samsung.com/is/image/samsung/in-watch-active2-r820ns-sm-r820nskainu-frontblack-189191172?$720_576_PNG$'),
    new Category('c4', 'Hats', 'https://images-na.ssl-images-amazon.com/images/I/71RUxoV0VjL._AC_UL1500_.jpg'),
    new Category('c5', 'Jeans', 'https://5.imimg.com/data5/AQ/HD/MY-38850010/jeans-500x500.jpg'),
    new Category('c6', 'Shoes', 'https://assets.ajio.com/medias/sys_master/root/h5a/h59/13018715881502/-1117Wx1400H-460342492-blue-MODEL.jpg'),
]

// import:
import Product from "../models/Product";

// add data for Trips:
id,
categoryIds,
title,
imageUrl,
description,
size,
delivery,
finalPrice
export const PRODUCT = [
  new Product(
    "t1",
    ["c1"], // Array of countries id's
    "T-shirt1",
    "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9088.png",
    "T-shirt1",
    "M-L",
    20,
    60
  ),
  new Product(
    "t2",
    ["c1"], // Array of countries id's
    "T-shirt2",
    "https://www.asket.com/imgproxy/e:1/format:jpeg/width:1080/resize:fit/quality:80/plain/https://asket.centracdn.net/client/dynamic/images/2_00d6bb1f5b-asket_tee_white_cart_thumb-original.jpg@jpg",
    "T-shirt2",
    "M-L",
    20,
    60
  ),
  new Product(
    "t3",
    ["c1"], // Array of countries id's
    "T-shirt3",
    "https://www.mesinio.co.il/wp-content/uploads/2021/04/dsquared_icon_tshirt_white_22783_01al.jpg",
    "T-shirt3",
    "M-L",
    20,
    60
  ),
  new Product(
    "t4",
    ["c1"], // Array of countries id's
    "T-shirt4",
    "https://www.artofbrilliance.co.uk/wp-content/uploads/2019/02/happy-lightblue.jpg",
    "T-shirt4",
    "M-L",
    20,
    60
  ),
  new Product(
    "p1",
    ["c2"],
    "pants1",
    "https://ae01.alicdn.com/kf/HTB1zl1TXx1YBuNjy1zcq6zNcXXa7/ICPANS-Pants-Full-Length-Cotton-Pants-Men-regular-Zipper-men-pants-casual-mens-business-trousers-pants.jpg_Q90.jpg_.webp" ,
    "pants1",
    "M-L",
    20,
    60
  ),
  new Product(
    "p2",
    ["c2"],
    "pants2",
    "https://www.nautica.com/dw/image/v2/BDCV_PRD/on/demandware.static/-/Sites-nautica-master-catalog/default/dw6cb26883/images/0731516000016_PR9101_444_A.jpg?sw=600&sh=600&sm=fit" ,
    "pants2",
    "M-L",
    20,
    60
  ),
  new Product(
    "p3",
    ["c2"],
    "pants3",
    "https://sc04.alicdn.com/kf/UTB8p2zwHNHEXKJk43Jeq6yeeXXaE.jpg" ,
    "pants3",
    "M-L",
    20,
    60
  ),
  new Product(
    "p4",
    ["c2"],
    "pants4",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoCcO08Tm9SfO8SDCxL4_ZReZT3vXFP7lcmQ&usqp=CAU" ,
    "pants4",
    "M-L",
    20,
    60
  ),
  new Product(
    "w1", // id
    ['c3'], // countryIds
    "Watch1", // title
    "https://fdn.gsmarena.com/imgroot/news/21/04/oneplus-watch-update/-1200/gsmarena_002.jpg", 
    "Watch1", 
    "M-L",
    20,
    60
  ),
  new Product(
    "w2",
    ['c3'],
    "Watch2",
    "https://images-na.ssl-images-amazon.com/images/I/71t9cFFRpaL._AC_UX569_.jpg",
    "Watch2",
    "M-L",
    20,
    60
  ),
  new Product(
    "w3", // id
    ['c3'], // countryIds
    "Watch3", // title
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbf583TviyYVy_3NW7-Vp6nbeOEMtnAY2hw&usqp=CAU", 
    "Watch3", 
    "M-L",
    20,
    60
  ),
  new Product(
    "w4", // id
    ['c3'], // countryIds
    "Watch4", // title
    "https://images-na.ssl-images-amazon.com/images/I/61WixzlVuXL._UL1280_.jpg", 
    "Watch4", 
    "M-L",
    20,
    60
  ),
  new Product(
    "h1", // id
    ['c4'], // countryIds
    "Hats1", // title
    "https://static.footshop.com/436834-full_product/79795.jpg", 
    "Hats1", 
    "M-L",
    20,
    60
  ),
  new Product(
    "h2", // id
    ['c4'], // countryIds
    "Hats2", // title
    "https://images-na.ssl-images-amazon.com/images/I/71RUxoV0VjL._AC_UL1500_.jpg", 
    "Hats2", 
    "M-L",
    20,
    60
  ),
  new Product(
    "h3", // id
    ['c4'], // countryIds
    "Hats3", // title
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocdpDq8uuK_W3sBflbrqkzSJm5MsMU8M5og&usqp=CAU", 
    "Hats3", 
    "M-L",
    20,
    60
  ),
  new Product(
    "h4", // id
    ['c4'], // countryIds
    "Hats4", // title
    "https://images.footballfanatics.com/FFImage/thumb.aspx?i=/productimages/_3492000/ff_3492199-30da91678f4f35664c95_full.jpg&w=600", 
    "Hats4", 
    "M-L",
    20,
    60
  ),
  new Product(
    "j1", // id
    ['c5'], // countryIds
    "jeans1", // title
    "https://images-na.ssl-images-amazon.com/images/I/71knWTZ7YeL._AC_UX385_.jpg", 
    "jeans1", 
    "M-L",
    20,
    60
  ),
  new Product(
    "j2", // id
    ['c5'], // countryIds
    "jeans1", // title
    "https://ae05.alicdn.com/kf/HTB19QnTa.vrK1RjSspcq6zzSXXas/Enjeolon-2020-New-Mens-Jeans-Brand-Black-Jeans-Men-Fashion-Long-Trousers-Mens-Denim-Jeans-Pants.jpg", 
    "jeans2", 
    "M-L",
    20,
    60
  ),
  new Product(
    "j3", // id
    ['c5'], // countryIds
    "jeans3", // title
    "https://5.imimg.com/data5/WJ/RT/MY-69166437/slim-men-jeans-500x500.jpg", 
    "jeans3", 
    "M-L",
    20,
    60
  ),
  new Product(
    "j4", // id
    ['c5'], // countryIds
    "jeans4", // title
    "https://5.imimg.com/data5/AQ/HD/MY-38850010/jeans-500x500.jpg", 
    "jeans4", 
    "M-L",
    20,
    60
  ),
  new Product(
    "s1", // id
    ['c6'], // countryIds
    "shoes1", // title
    "http://cdn.shopify.com/s/files/1/0107/9820/2938/products/greymatter1_grande.jpg?v=1609796968", 
    "shoes1", 
    "M-L",
    20,
    60
  ),
  new Product(
    "s2", // id
    ['c6'], // countryIds
    "shoes2", // title
    "https://www.ara-shoes.com/wp-content/uploads/2021/01/sapporo.png", 
    "shoes2", 
    "M-L",
    20,
    60
  ),
  new Product(
    "s3", // id
    ['c6'], // countryIds
    "shoes3", // title
    "https://images-na.ssl-images-amazon.com/images/I/41Leu3gBUFL.jpg", 
    "shoes3", 
    "M-L",
    20,
    60
  ),
  new Product(
    "s4", // id
    ['c6'], // countryIds
    "shoes4", // title
    "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192790/02/sv01/fnd/EEA/fmt/png/Flyer-Runner-Engineered-Knit-Men's-Running-Shoes", 
    "shoes4", 
    "M-L",
    20,
    60
  )
];