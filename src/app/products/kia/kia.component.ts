import { Component, OnInit, ViewChild } from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table'
import { CarService } from './car-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-kia',
  templateUrl: './kia.component.html',
  styleUrls: ['./kia.component.scss']
})
export class KiaComponent implements OnInit {
  primengConfig: any;
  modelId: any;
  modelIMG: any;

  // carsNew: any[] = [];

  ngOnInit(): void {
    // debugger;
    let x = this.activatedRoute.params.subscribe(
      (params: any) => {
        this.modelId = params["id"];
      }
    );
    // this.cars=  this.cars.filter(car => {
    //   if( car.model === this.modelId){
    //     return car;
    //   }
    //  });
    if(this.modelId)this.getCarById(this.modelId);
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
  ];
  // this.primengConfig.ripple = true;
// debugger
  // let y = this.activatedRoute.params.subscribe(
  //   (params: any) => {
  //     this.modelIMG = params["model"];
  //   }
  // );

  // this.cars=  this.cars.filter(car => {
  //   if( car.image === this.modelIMG){
  //     return car;
  //   }
  //  });


  }

  getCarById(model:any){
    debugger
    this.http.get('http://localhost:8080/getCar/'+parseInt(model)).subscribe((data:any)=> {
    debugger
    this.cars = data;
  });
  }
  cars:any[] =  [
    {
      model:"1",
      id: "1000",
      code: "f230fh0g3",
      name: "Pegas",
      description: "SEDAN | 1400 CC | 95 HP | 2020 ",
      image: "kia/1555515075.jpeg",
      price: 239.900,
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5
    },
    {
      model:"1",
      id: "1001",
      code: "nvklal433",
      name: "picanto",
      description: "  HatchBack | 1200 CC|87 HP| 2019",
      image: "kia/1532345676.jpeg",
      price: 285.000,
      category: "Accessories",
      quantity: 61,
      inventoryStatus: "INSTOCK",
      rating: 4
    },
    {
      model:"1",
      id: "1002",
      code: "zz21cz3c1",
      name: "Rio ",
      description: "SEDAN|1600 CC|123 HP|2019",
      image: "kia/1532345552.jpeg",
      price: 284.900,
      category: "Fitness",
      quantity: 2,
      inventoryStatus: "LOWSTOCK",
      rating: 3
    },
    {
      model:"1",
      id: "1003",
      code: "244wgerg2",
      name: "Sportage",
      description: "SUV|1600 CC|140 HP|2022",
      image: "kia/1613304244.jpeg",
      price: 424.900 ,
      category: "Clothing",
      quantity: 25,
      inventoryStatus: "INSTOCK",
      rating: 5
    },
    {
      model:"1",
      id: "1004",
      code: "h456wer53",
      name: "Sorento",
      description: " SUV|2400 CC|172 HP|2020",
      image: "kia/1532345696.jpeg",
      price: 549.900 ,
      category: "Accessories",
      quantity: 73,
      inventoryStatus: "INSTOCK",
      rating: 4
    },
    {
      model:"1",
      id: "1005",
      code: "av2231fwg",
      name: "Brown Purse",
      description: "Product Description",
      image: "kia/1532345732.jpeg",
      price: 120,
      category: "Accessories",
      quantity: 0,
      inventoryStatus: "OUTOFSTOCK",
      rating: 4
    },
    {
      model:"1",
      id: "1006",
      code: "bib36pfvm",
      name: "Soul",
      description: "SUV|1600 CC|124 HP|2019",
      image: "kia/1613302858.jpeg",
      price: 384.000,
      category: "Accessories",
      quantity: 5,
      inventoryStatus: "LOWSTOCK",
      rating: 3
    },
    {
      model:"1",
      id: "1007",
      code: "mbvjkgip5",
      name: " Cerato",
      description: "SEDAN|1600 CC|130 HP|2021",
      image: "kia/1532345576.jpeg",
      price: 309.900,
      category: "Accessories",
      quantity: 23,
      inventoryStatus: "INSTOCK",
      rating: 5
    },
    {
      model:"1",
      id: "1008",
      code: "vbb124btr",
      name: "Ceed",
      description: "Hatchback|1600 CC|130 HP|2019",
      image: "kia/1532345629.jpeg",
      price: 360.000,
      category: "Electronics",
      quantity: 2,
      inventoryStatus: "LOWSTOCK",
      rating: 4
    },
    {
      model:"1",
      id: "1009",
      code: "cm230f032",
      name: "Carnival ",
      description: "VAN|3300 CC|270 HP|2020",
      image: "kia/1532345608.jpeg",
      price: 1650.000 ,
      category: "Electronics",
      quantity: 63,
      inventoryStatus: "INSTOCK",
      rating: 3
    },
    {
      model:"1",
      id: "1010",
      code: "plb34234v",
      name: " Carems ",
      description: " MVP|1600 CC|135 HP|2019",
      image: "kia/1532345608.jpeg",
      price: 459.000,
      category: "Accessories",
      quantity: 0,
      inventoryStatus: "OUTOFSTOCK",
      rating: 4
    },
    {
      model:"2",
      id: "1011",
      code: "4920nnc2d",
      name: "Green Earbuds",
      description: "Product Description",
      image: "green-earbuds.jpg",
      price: 89,
      category: "Electronics",
      quantity: 23,
      inventoryStatus: "INSTOCK",
      rating: 4
    },
    // {
    //   id: "1012",
    //   code: "250vm23cc",
    //   name: "Green T-Shirt",
    //   description: "Product Description",
    //   image: "green-t-shirt.jpg",
    //   price: 49,
    //   category: "Clothing",
    //   quantity: 74,
    //   inventoryStatus: "INSTOCK",
    //   rating: 5
    // },
    // {
    //   id: "1013",
    //   code: "fldsmn31b",
    //   name: "Grey T-Shirt",
    //   description: "Product Description",
    //   image: "grey-t-shirt.jpg",
    //   price: 48,
    //   category: "Clothing",
    //   quantity: 0,
    //   inventoryStatus: "OUTOFSTOCK",
    //   rating: 3
    // },
    // {
    //   id: "1014",
    //   code: "waas1x2as",
    //   name: "Headphones",
    //   description: "Product Description",
    //   image: "headphones.jpg",
    //   price: 175,
    //   category: "Electronics",
    //   quantity: 8,
    //   inventoryStatus: "LOWSTOCK",
    //   rating: 5
    // },
    // {
    //   id: "1015",
    //   code: "vb34btbg5",
    //   name: "Light Green T-Shirt",
    //   description: "Product Description",
    //   image: "light-green-t-shirt.jpg",
    //   price: 49,
    //   category: "Clothing",
    //   quantity: 34,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1016",
    //   code: "k8l6j58jl",
    //   name: "Lime Band",
    //   description: "Product Description",
    //   image: "lime-band.jpg",
    //   price: 79,
    //   category: "Fitness",
    //   quantity: 12,
    //   inventoryStatus: "INSTOCK",
    //   rating: 3
    // },
    // {
    //   id: "1017",
    //   code: "v435nn85n",
    //   name: "Mini Speakers",
    //   description: "Product Description",
    //   image: "mini-speakers.jpg",
    //   price: 85,
    //   category: "Clothing",
    //   quantity: 42,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1018",
    //   code: "09zx9c0zc",
    //   name: "Painted Phone Case",
    //   description: "Product Description",
    //   image: "painted-phone-case.jpg",
    //   price: 56,
    //   category: "Accessories",
    //   quantity: 41,
    //   inventoryStatus: "INSTOCK",
    //   rating: 5
    // },
    // {
    //   id: "1019",
    //   code: "mnb5mb2m5",
    //   name: "Pink Band",
    //   description: "Product Description",
    //   image: "pink-band.jpg",
    //   price: 79,
    //   category: "Fitness",
    //   quantity: 63,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1020",
    //   code: "r23fwf2w3",
    //   name: "Pink Purse",
    //   description: "Product Description",
    //   image: "pink-purse.jpg",
    //   price: 110,
    //   category: "Accessories",
    //   quantity: 0,
    //   inventoryStatus: "OUTOFSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1021",
    //   code: "pxpzczo23",
    //   name: "Purple Band",
    //   description: "Product Description",
    //   image: "purple-band.jpg",
    //   price: 79,
    //   category: "Fitness",
    //   quantity: 6,
    //   inventoryStatus: "LOWSTOCK",
    //   rating: 3
    // },
    // {
    //   id: "1022",
    //   code: "2c42cb5cb",
    //   name: "Purple Gemstone Necklace",
    //   description: "Product Description",
    //   image: "purple-gemstone-necklace.jpg",
    //   price: 45,
    //   category: "Accessories",
    //   quantity: 62,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1023",
    //   code: "5k43kkk23",
    //   name: "Purple T-Shirt",
    //   description: "Product Description",
    //   image: "purple-t-shirt.jpg",
    //   price: 49,
    //   category: "Clothing",
    //   quantity: 2,
    //   inventoryStatus: "LOWSTOCK",
    //   rating: 5
    // },
    // {
    //   id: "1024",
    //   code: "lm2tny2k4",
    //   name: "Shoes",
    //   description: "Product Description",
    //   image: "shoes.jpg",
    //   price: 64,
    //   category: "Clothing",
    //   quantity: 0,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1025",
    //   code: "nbm5mv45n",
    //   name: "Sneakers",
    //   description: "Product Description",
    //   image: "sneakers.jpg",
    //   price: 78,
    //   category: "Clothing",
    //   quantity: 52,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1026",
    //   code: "zx23zc42c",
    //   name: "Teal T-Shirt",
    //   description: "Product Description",
    //   image: "teal-t-shirt.jpg",
    //   price: 49,
    //   category: "Clothing",
    //   quantity: 3,
    //   inventoryStatus: "LOWSTOCK",
    //   rating: 3
    // },
    // {
    //   id: "1027",
    //   code: "acvx872gc",
    //   name: "Yellow Earbuds",
    //   description: "Product Description",
    //   image: "yellow-earbuds.jpg",
    //   price: 89,
    //   category: "Electronics",
    //   quantity: 35,
    //   inventoryStatus: "INSTOCK",
    //   rating: 3
    // },
    // {
    //   id: "1028",
    //   code: "tx125ck42",
    //   name: "Yoga Mat",
    //   description: "Product Description",
    //   image: "yoga-mat.jpg",
    //   price: 20,
    //   category: "Fitness",
    //   quantity: 15,
    //   inventoryStatus: "INSTOCK",
    //   rating: 5
    // },
    // {
    //   id: "1029",
    //   code: "gwuby345v",
    //   name: "Yoga Set",
    //   description: "Product Description",
    //   image: "yoga-set.jpg",
    //   price: 20,
    //   category: "Fitness",
    //   quantity: 25,
    //   inventoryStatus: "INSTOCK",
    //   rating: 8
    // }
  ];

  copy:any[] =  [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Pegas",
      description: "SEDAN | 1400 CC | 95 HP | 2020 ",
      image: "kia/1555515075.jpeg",
      price: 239.900,
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5
    },
    {
      id: "1001",
      code: "nvklal433",
      name: "picanto",
      description: "  HatchBack | 1200 CC|87 HP| 2019",
      image: "kia/1532345676.jpeg",
      price: 285.000,
      category: "Accessories",
      quantity: 61,
      inventoryStatus: "INSTOCK",
      rating: 4
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      name: "Rio ",
      description: "SEDAN|1600 CC|123 HP|2019",
      image: "kia/1532345552.jpeg",
      price: 284.900,
      category: "Fitness",
      quantity: 2,
      inventoryStatus: "LOWSTOCK",
      rating: 3
    },
    {
      id: "1003",
      code: "244wgerg2",
      name: "Sportage",
      description: "SUV|1600 CC|140 HP|2022",
      image: "kia/1613304244.jpeg",
      price: 424.900 ,
      category: "Clothing",
      quantity: 25,
      inventoryStatus: "INSTOCK",
      rating: 5
    },
    {
      id: "1004",
      code: "h456wer53",
      name: "Sorento",
      description: " SUV|2400 CC|172 HP|2020",
      image: "kia/1532345696.jpeg",
      price: 549.900 ,
      category: "Accessories",
      quantity: 73,
      inventoryStatus: "INSTOCK",
      rating: 4
    },
    {
      id: "1005",
      code: "av2231fwg",
      name: "Brown Purse",
      description: "Product Description",
      image: "kia/1532345732.jpeg",
      price: 120,
      category: "Accessories",
      quantity: 0,
      inventoryStatus: "OUTOFSTOCK",
      rating: 4
    },
    {
      id: "1006",
      code: "bib36pfvm",
      name: "Soul",
      description: "SUV|1600 CC|124 HP|2019",
      image: "kia/1613302858.jpeg",
      price: 384.000,
      category: "Accessories",
      quantity: 5,
      inventoryStatus: "LOWSTOCK",
      rating: 3
    },
    {
      id: "1007",
      code: "mbvjkgip5",
      name: " Cerato",
      description: "SEDAN|1600 CC|130 HP|2021",
      image: "kia/1532345576.jpeg",
      price: 309.900,
      category: "Accessories",
      quantity: 23,
      inventoryStatus: "INSTOCK",
      rating: 5
    },
    {
      id: "1008",
      code: "vbb124btr",
      name: "Ceed",
      description: "Hatchback|1600 CC|130 HP|2019",
      image: "kia/1532345629.jpeg",
      price: 360.000,
      category: "Electronics",
      quantity: 2,
      inventoryStatus: "LOWSTOCK",
      rating: 4
    },
    {
      id: "1009",
      code: "cm230f032",
      name: "Carnival ",
      description: "VAN|3300 CC|270 HP|2020",
      image: "kia/1532345608.jpeg",
      price: 1650.000 ,
      category: "Electronics",
      quantity: 63,
      inventoryStatus: "INSTOCK",
      rating: 3
    },
    {
      id: "1010",
      code: "plb34234v",
      name: " Carems ",
      description: " MVP|1600 CC|135 HP|2019",
      image: "kia/1532345608.jpeg",
      price: 459.000,
      category: "Accessories",
      quantity: 0,
      inventoryStatus: "OUTOFSTOCK",
      rating: 4
    },
    // {
    //   id: "1011",
    //   code: "4920nnc2d",
    //   name: "Green Earbuds",
    //   description: "Product Description",
    //   image: "green-earbuds.jpg",
    //   price: 89,
    //   category: "Electronics",
    //   quantity: 23,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1012",
    //   code: "250vm23cc",
    //   name: "Green T-Shirt",
    //   description: "Product Description",
    //   image: "green-t-shirt.jpg",
    //   price: 49,
    //   category: "Clothing",
    //   quantity: 74,
    //   inventoryStatus: "INSTOCK",
    //   rating: 5
    // },
    // {
    //   id: "1013",
    //   code: "fldsmn31b",
    //   name: "Grey T-Shirt",
    //   description: "Product Description",
    //   image: "grey-t-shirt.jpg",
    //   price: 48,
    //   category: "Clothing",
    //   quantity: 0,
    //   inventoryStatus: "OUTOFSTOCK",
    //   rating: 3
    // },
    // {
    //   id: "1014",
    //   code: "waas1x2as",
    //   name: "Headphones",
    //   description: "Product Description",
    //   image: "headphones.jpg",
    //   price: 175,
    //   category: "Electronics",
    //   quantity: 8,
    //   inventoryStatus: "LOWSTOCK",
    //   rating: 5
    // },
    // {
    //   id: "1015",
    //   code: "vb34btbg5",
    //   name: "Light Green T-Shirt",
    //   description: "Product Description",
    //   image: "light-green-t-shirt.jpg",
    //   price: 49,
    //   category: "Clothing",
    //   quantity: 34,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1016",
    //   code: "k8l6j58jl",
    //   name: "Lime Band",
    //   description: "Product Description",
    //   image: "lime-band.jpg",
    //   price: 79,
    //   category: "Fitness",
    //   quantity: 12,
    //   inventoryStatus: "INSTOCK",
    //   rating: 3
    // },
    // {
    //   id: "1017",
    //   code: "v435nn85n",
    //   name: "Mini Speakers",
    //   description: "Product Description",
    //   image: "mini-speakers.jpg",
    //   price: 85,
    //   category: "Clothing",
    //   quantity: 42,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1018",
    //   code: "09zx9c0zc",
    //   name: "Painted Phone Case",
    //   description: "Product Description",
    //   image: "painted-phone-case.jpg",
    //   price: 56,
    //   category: "Accessories",
    //   quantity: 41,
    //   inventoryStatus: "INSTOCK",
    //   rating: 5
    // },
    // {
    //   id: "1019",
    //   code: "mnb5mb2m5",
    //   name: "Pink Band",
    //   description: "Product Description",
    //   image: "pink-band.jpg",
    //   price: 79,
    //   category: "Fitness",
    //   quantity: 63,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1020",
    //   code: "r23fwf2w3",
    //   name: "Pink Purse",
    //   description: "Product Description",
    //   image: "pink-purse.jpg",
    //   price: 110,
    //   category: "Accessories",
    //   quantity: 0,
    //   inventoryStatus: "OUTOFSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1021",
    //   code: "pxpzczo23",
    //   name: "Purple Band",
    //   description: "Product Description",
    //   image: "purple-band.jpg",
    //   price: 79,
    //   category: "Fitness",
    //   quantity: 6,
    //   inventoryStatus: "LOWSTOCK",
    //   rating: 3
    // },
    // {
    //   id: "1022",
    //   code: "2c42cb5cb",
    //   name: "Purple Gemstone Necklace",
    //   description: "Product Description",
    //   image: "purple-gemstone-necklace.jpg",
    //   price: 45,
    //   category: "Accessories",
    //   quantity: 62,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1023",
    //   code: "5k43kkk23",
    //   name: "Purple T-Shirt",
    //   description: "Product Description",
    //   image: "purple-t-shirt.jpg",
    //   price: 49,
    //   category: "Clothing",
    //   quantity: 2,
    //   inventoryStatus: "LOWSTOCK",
    //   rating: 5
    // },
    // {
    //   id: "1024",
    //   code: "lm2tny2k4",
    //   name: "Shoes",
    //   description: "Product Description",
    //   image: "shoes.jpg",
    //   price: 64,
    //   category: "Clothing",
    //   quantity: 0,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1025",
    //   code: "nbm5mv45n",
    //   name: "Sneakers",
    //   description: "Product Description",
    //   image: "sneakers.jpg",
    //   price: 78,
    //   category: "Clothing",
    //   quantity: 52,
    //   inventoryStatus: "INSTOCK",
    //   rating: 4
    // },
    // {
    //   id: "1026",
    //   code: "zx23zc42c",
    //   name: "Teal T-Shirt",
    //   description: "Product Description",
    //   image: "teal-t-shirt.jpg",
    //   price: 49,
    //   category: "Clothing",
    //   quantity: 3,
    //   inventoryStatus: "LOWSTOCK",
    //   rating: 3
    // },
    // {
    //   id: "1027",
    //   code: "acvx872gc",
    //   name: "Yellow Earbuds",
    //   description: "Product Description",
    //   image: "yellow-earbuds.jpg",
    //   price: 89,
    //   category: "Electronics",
    //   quantity: 35,
    //   inventoryStatus: "INSTOCK",
    //   rating: 3
    // },
    // {
    //   id: "1028",
    //   code: "tx125ck42",
    //   name: "Yoga Mat",
    //   description: "Product Description",
    //   image: "yoga-mat.jpg",
    //   price: 20,
    //   category: "Fitness",
    //   quantity: 15,
    //   inventoryStatus: "INSTOCK",
    //   rating: 5
    // },
    // {
    //   id: "1029",
    //   code: "gwuby345v",
    //   name: "Yoga Set",
    //   description: "Product Description",
    //   image: "yoga-set.jpg",
    //   price: 20,
    //   category: "Fitness",
    //   quantity: 25,
    //   inventoryStatus: "INSTOCK",
    //   rating: 8
    // }
  ];

    sortOptions!: SelectItem[];
    sortOrder!: number;
    sortField!: string;
    sortKey!: string;
    products: any;
    dv!:Table;

    constructor(private carService: CarService,
       private router: Router,
       private activatedRoute: ActivatedRoute,
       private http: HttpClient) { }


    onSortChange(event: { value: any; }) {
        let value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        }
        else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }
    // filter(event :Event , contains:string){
    //   debugger
    //   this.dv.filterGlobal((event.target as HTMLInputElement).value , contains)
    // }


    search(text:any){
      // debugger
      this.cars=JSON.parse(JSON.stringify(this.copy))
    this.cars = this.cars.filter( ({ name }) => name.toLowerCase().startsWith(text.toLowerCase()))

    }

    carDetails(id:any){
      debugger
      this.router.navigate(
        ['/products/view/'+id],
      )
    }
}


export interface Car {
  vin: any;
  year: any;
  brand: any;
  color: any;
}




