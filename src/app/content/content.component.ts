import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})



export class ContentComponent implements OnInit {




getBrands(){
  this.http.get('http://localhost:8080/brand/getBrands').subscribe((data:any)=> {
    this.products = data;
});
}


  products:any[] =  [
    {
      id: "1",
      code: "f230fh0g3",
      name: "Kia",
      description: "Product Description",
      image: "1556017819.png",
      price: 65,
      category: "Accessories",
      quantity: 24,
      inventoryStatus: "INSTOCK",
      rating: 5
    },
    {
      id: "2",
      code: "nvklal433",
      name: "Mercedes",
      description: "Product Description",
      image: "1556634561.png",
      price: 72,
      category: "Accessories",
      quantity: 61,
      inventoryStatus: "INSTOCK",
      rating: 4
    },
    {
      id: "3",
      code: "zz21cz3c1",
      name: "Opel",
      description: "Product Description",
      image: "1539697913.png",
      price: 79,
      category: "Fitness",
      quantity: 2,
      inventoryStatus: "LOWSTOCK",
      rating: 3
    },
    {
      id: "4",
      code: "244wgerg2",
      name: "BMW",
      description: "Product Description",
      image: "1556017808.png",
      price: 29,
      category: "Clothing",
      quantity: 25,
      inventoryStatus: "INSTOCK",
      rating: 5
    },
    {
      id: "5",
      code: "h456wer53",
      name: "Honda",
      description: "Product Description",
      image: "1556018573.png",
      price: 15,
      category: "Accessories",
      quantity: 73,
      inventoryStatus: "INSTOCK",
      rating: 4
    },
    {
      id: "6",
      code: "av2231fwg",
      name: "BYD",
      description: "Product Description",
      image: "1556634597.png",
      price: 120,
      category: "Accessories",
      quantity: 0,
      inventoryStatus: "OUTOFSTOCK",
      rating: 4
    },
    {
      id: "7",
      code: "bib36pfvm",
      name: "Renault",
      description: "Product Description",
      image: "1556634692.png",
      price: 32,
      category: "Accessories",
      quantity: 5,
      inventoryStatus: "LOWSTOCK",
      rating: 3
    },
    {
      id: "8",
      code: "mbvjkgip5",
      name: "Nissan",
      description: "Product Description",
      image: "1556634716.png",
      price: 34,
      category: "Accessories",
      quantity: 23,
      inventoryStatus: "INSTOCK",
      rating: 5
    },
  //   {
  //     id: "1008",
  //     code: "vbb124btr",
  //     name: "Game Controller",
  //     description: "Product Description",
  //     image: "1573558034.png",
  //     price: 99,
  //     category: "Electronics",
  //     quantity: 2,
  //     inventoryStatus: "LOWSTOCK",
  //     rating: 4
  //   },
  //   {
  //     id: "1009",
  //     code: "cm230f032",
  //     name: "Gaming Set",
  //     description: "Product Description",
  //     image: "kia/1532345608.jpeg",
  //     price: 299,
  //     category: "Electronics",
  //     quantity: 63,
  //     inventoryStatus: "INSTOCK",
  //     rating: 3
  //   },
  //   {
  //     id: "1010",
  //     code: "plb34234v",
  //     name: "Gold Phone Case",
  //     description: "Product Description",
  //     image: "kia/gold-phone-case.jpg",
  //     price: 24,
  //     category: "Accessories",
  //     quantity: 0,
  //     inventoryStatus: "OUTOFSTOCK",
  //     rating: 4
  //   },
  //   {
  //     id: "1011",
  //     code: "4920nnc2d",
  //     name: "Green Earbuds",
  //     description: "Product Description",
  //     image: "green-earbuds.jpg",
  //     price: 89,
  //     category: "Electronics",
  //     quantity: 23,
  //     inventoryStatus: "INSTOCK",
  //     rating: 4
  //   },
  //   {
  //     id: "1012",
  //     code: "250vm23cc",
  //     name: "Green T-Shirt",
  //     description: "Product Description",
  //     image: "green-t-shirt.jpg",
  //     price: 49,
  //     category: "Clothing",
  //     quantity: 74,
  //     inventoryStatus: "INSTOCK",
  //     rating: 5
  //   },
  //   {
  //     id: "1013",
  //     code: "fldsmn31b",
  //     name: "Grey T-Shirt",
  //     description: "Product Description",
  //     image: "grey-t-shirt.jpg",
  //     price: 48,
  //     category: "Clothing",
  //     quantity: 0,
  //     inventoryStatus: "OUTOFSTOCK",
  //     rating: 3
  //   },
  //   {
  //     id: "1014",
  //     code: "waas1x2as",
  //     name: "Headphones",
  //     description: "Product Description",
  //     image: "headphones.jpg",
  //     price: 175,
  //     category: "Electronics",
  //     quantity: 8,
  //     inventoryStatus: "LOWSTOCK",
  //     rating: 5
  //   },
  //   {
  //     id: "1015",
  //     code: "vb34btbg5",
  //     name: "Light Green T-Shirt",
  //     description: "Product Description",
  //     image: "light-green-t-shirt.jpg",
  //     price: 49,
  //     category: "Clothing",
  //     quantity: 34,
  //     inventoryStatus: "INSTOCK",
  //     rating: 4
  //   },
  //   {
  //     id: "1016",
  //     code: "k8l6j58jl",
  //     name: "Lime Band",
  //     description: "Product Description",
  //     image: "lime-band.jpg",
  //     price: 79,
  //     category: "Fitness",
  //     quantity: 12,
  //     inventoryStatus: "INSTOCK",
  //     rating: 3
  //   },
  //   {
  //     id: "1017",
  //     code: "v435nn85n",
  //     name: "Mini Speakers",
  //     description: "Product Description",
  //     image: "mini-speakers.jpg",
  //     price: 85,
  //     category: "Clothing",
  //     quantity: 42,
  //     inventoryStatus: "INSTOCK",
  //     rating: 4
  //   },
  //   {
  //     id: "1018",
  //     code: "09zx9c0zc",
  //     name: "Painted Phone Case",
  //     description: "Product Description",
  //     image: "painted-phone-case.jpg",
  //     price: 56,
  //     category: "Accessories",
  //     quantity: 41,
  //     inventoryStatus: "INSTOCK",
  //     rating: 5
  //   },
  //   {
  //     id: "1019",
  //     code: "mnb5mb2m5",
  //     name: "Pink Band",
  //     description: "Product Description",
  //     image: "pink-band.jpg",
  //     price: 79,
  //     category: "Fitness",
  //     quantity: 63,
  //     inventoryStatus: "INSTOCK",
  //     rating: 4
  //   },
  //   {
  //     id: "1020",
  //     code: "r23fwf2w3",
  //     name: "Pink Purse",
  //     description: "Product Description",
  //     image: "pink-purse.jpg",
  //     price: 110,
  //     category: "Accessories",
  //     quantity: 0,
  //     inventoryStatus: "OUTOFSTOCK",
  //     rating: 4
  //   },
  //   {
  //     id: "1021",
  //     code: "pxpzczo23",
  //     name: "Purple Band",
  //     description: "Product Description",
  //     image: "purple-band.jpg",
  //     price: 79,
  //     category: "Fitness",
  //     quantity: 6,
  //     inventoryStatus: "LOWSTOCK",
  //     rating: 3
  //   },
  //   {
  //     id: "1022",
  //     code: "2c42cb5cb",
  //     name: "Purple Gemstone Necklace",
  //     description: "Product Description",
  //     image: "purple-gemstone-necklace.jpg",
  //     price: 45,
  //     category: "Accessories",
  //     quantity: 62,
  //     inventoryStatus: "INSTOCK",
  //     rating: 4
  //   },
  //   {
  //     id: "1023",
  //     code: "5k43kkk23",
  //     name: "Purple T-Shirt",
  //     description: "Product Description",
  //     image: "purple-t-shirt.jpg",
  //     price: 49,
  //     category: "Clothing",
  //     quantity: 2,
  //     inventoryStatus: "LOWSTOCK",
  //     rating: 5
  //   },
  //   {
  //     id: "1024",
  //     code: "lm2tny2k4",
  //     name: "Shoes",
  //     description: "Product Description",
  //     image: "shoes.jpg",
  //     price: 64,
  //     category: "Clothing",
  //     quantity: 0,
  //     inventoryStatus: "INSTOCK",
  //     rating: 4
  //   },
  //   {
  //     id: "1025",
  //     code: "nbm5mv45n",
  //     name: "Sneakers",
  //     description: "Product Description",
  //     image: "sneakers.jpg",
  //     price: 78,
  //     category: "Clothing",
  //     quantity: 52,
  //     inventoryStatus: "INSTOCK",
  //     rating: 4
  //   },
  //   {
  //     id: "1026",
  //     code: "zx23zc42c",
  //     name: "Teal T-Shirt",
  //     description: "Product Description",
  //     image: "teal-t-shirt.jpg",
  //     price: 49,
  //     category: "Clothing",
  //     quantity: 3,
  //     inventoryStatus: "LOWSTOCK",
  //     rating: 3
  //   },
  //   {
  //     id: "1027",
  //     code: "acvx872gc",
  //     name: "Yellow Earbuds",
  //     description: "Product Description",
  //     image: "yellow-earbuds.jpg",
  //     price: 89,
  //     category: "Electronics",
  //     quantity: 35,
  //     inventoryStatus: "INSTOCK",
  //     rating: 3
  //   },
  //   {
  //     id: "1028",
  //     code: "tx125ck42",
  //     name: "Yoga Mat",
  //     description: "Product Description",
  //     image: "yoga-mat.jpg",
  //     price: 20,
  //     category: "Fitness",
  //     quantity: 15,
  //     inventoryStatus: "INSTOCK",
  //     rating: 5
  //   },
  //   {
  //     id: "1029",
  //     code: "gwuby345v",
  //     name: "Yoga Set",
  //     description: "Product Description",
  //     image: "yoga-set.jpg",
  //     price: 20,
  //     category: "Fitness",
  //     quantity: 25,
  //     inventoryStatus: "INSTOCK",
  //     rating: 8
  //   }
  ];


  data: any;

  chartOptions: any;

  subscription: Subscription | undefined;
  cars: any;


  basicData: any;

  basicOptions: any;

  multiAxisData: any;


  multiAxisOptions: any;

  stackedData: any;

  stackedOptions: any;

  horizontalOptions: any;

  // responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];
  carService: any;
  responsiveOptions: { breakpoint: string; numVisible: number; numScroll: number; }[];
  product: any;



  ngOnInit() {
    this.getBrands();
      // this.data = {
      //     labels: ['N','T','F'],
      //     datasets: [
      //         {
      //             data: [15.436, 13.346, 12.137],
      //             backgroundColor: [
      //                 "#42A5F5",
      //                 "#66BB6A",
      //                 "#FFA726"
      //             ],
      //             hoverBackgroundColor: [
      //                 "#64B5F6",
      //                 "#81C784",
      //                 "#FFB74D"
      //             ]
      //         }
      //     ]

      // };
      this.horizontalOptions = {
        indexAxis: 'y',
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    this.basicData = {
      labels: ['Nissan Sunny', 'Toyota Corolla', 'FIAT tipo'],
      datasets: [
          {
              label: 'The First',
              backgroundColor: '#967af5',
              data: [15.436]
          },




          {
              label: 'The Second',
              backgroundColor: '#bcabf7',
              data: [ ,13.346, ]
          },



          {
              label: 'The Third',
              backgroundColor: '#d0c7f0',
              data: [, ,12.137]
          },

        ]

   };

  }

  getLightTheme() {
      return {
          plugins: {
              legend: {
                  labels: {
                      color: '#495057'
                  }
              }
          }
      }
  }

  getDarkTheme() {
      return {
          plugins: {
              legend: {
                  labels: {
                      color: '#ebedef'
                  }
              }
          }
      }
        };


        constructor( private router:Router,
          private activatedRoute: ActivatedRoute,
          private http: HttpClient ) {
          this.responsiveOptions = [
              {
                  breakpoint: '1024px',
                  numVisible: 3,
                  numScroll: 3
              },
              {
                  breakpoint: '768px',
                  numVisible: 2,
                  numScroll: 2
              },
              {
                  breakpoint: '560px',
                  numVisible: 1,
                  numScroll: 1
              }
          ];
// debugger


          // this.activatedRoute.params.subscribe(
          //   (param: any) => {
          //       this.product.id = param[this.cars.model];

          //   });


        }


        openProduct(id:any){
          this.router.navigate(
            ['/products/car/'+id],
          )
        }



}
