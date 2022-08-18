import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  images: any[]=[];
  // [
//     {
//       "previewImageSrc": "assets/img/Unknown.jpeg",
//       "thumbnailImageSrc": "assets/img/Unknown.jpeg",
//       "alt": "Description for Image 1",
//       "title": "Title 1"
//   },{
//     "previewImageSrc": "assets/img/Unknown.jpeg",
//     "thumbnailImageSrc": "assets/img/Unknown.jpeg",
//     "alt": "Description for Image 1",
//     "title": "Title 2"
// }
// ]
;

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  carId: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
     this.activatedRoute.params.subscribe(
      (params: any) => {
        this.carId = params["id"];
      }
    );
    if(this.carId)this.getCarDetails(this.carId);

      // ((images: any[]) =>{
      //     this.images = images
      // })
    }

    getCarDetails(carId:any){
      this.http.get('http://localhost:8080/getCarDetails/'+parseInt(carId)).subscribe((data:any)=> {
      debugger
      if(data&&data.allImages){
        this.images = [];
      let images = data.allImages.split(",")
        images.forEach((img:any) => {
          this.images.push( {
          "previewImageSrc": img,
          "thumbnailImageSrc": img,
          "alt": data.description,
          "title": data.name
      });
      });}
      this.products.push({
        "id": "1000",
        "code": "Body Style",
        "name": data.details1,
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "price": 65,
        "category": "Accessories",
        "quantity": 24,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },{
        "id": "1000",
        "code": "Engine Capacity",
        "name": data.details2,
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "price": 65,
        "category": "Accessories",
        "quantity": 24,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      })

    });
    }

  products: any[]=[]
  // [
  //   {
	// 		"id": "1000",
	// 		"code": "f230fh0g3",
	// 		"name": "Bamboo Watch",
	// 		"description": "Product Description",
	// 		"image": "bamboo-watch.jpg",
	// 		"price": 65,
	// 		"category": "Accessories",
	// 		"quantity": 24,
	// 		"inventoryStatus": "INSTOCK",
	// 		"rating": 5
	// 	},
  //   {
	// 		"id": "1001",
	// 		"code": "f230fh0g3",
	// 		"name": "Bamboo Watch",
	// 		"description": "Product Description",
	// 		"image": "bamboo-watch.jpg",
	// 		"price": 65,
	// 		"category": "Accessories",
	// 		"quantity": 24,
	// 		"inventoryStatus": "INSTOCK",
	// 		"rating": 5
	// 	},
  // ];








}


