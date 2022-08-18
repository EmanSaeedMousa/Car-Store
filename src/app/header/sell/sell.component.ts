import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  preview: any;
  @ViewChild('container', { static: false })
  container!: ElementRef;

  formdata:any;
  image:any;

  submit(form:any) {
    debugger;
    // if (form.checkValidity() === true) {
      let data = form.value;
    data.image = this.image ;
    this.http.post('http://localhost:8080/AddSellRequest',data).subscribe((res:any)=> {
       this.messageService.add({severity:'success', summary:'alert', detail:"Data Saved Successfully"});

  });
    // }
    
 
    }

  constructor( private messageService: MessageService,
    private http: HttpClient) { }
  ngOnInit(): void {
    this.formdata = new FormGroup({
      brand: new FormControl(""),
      model: new FormControl(""),
      year: new FormControl(""),
      price: new FormControl(""),
      details: new FormControl(""),
      image: new FormControl(""),
      name: new FormControl(""),
      mobile: new FormControl(""),
      email: new FormControl("")
   });
    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event: { preventDefault: () => void; stopPropagation: () => void; }) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();



  //   function readURL(input: { files: Blob[]; }) {
  //     if (input.files && input.files[0]) {

  //       var reader = new FileReader();

  //       reader.onload = function(e) {
  //         $('.image-upload-wrap').hide();

  //         $('.file-upload-image').attr('src', e.target.result);
  //         $('.file-upload-content').show();

  //         $('.image-title').html(input.files[0].name);
  //       };

  //       reader.readAsDataURL(input.files[0]);

  //     } else {
  //       removeUpload();
  //     }
  //   }

  //   function removeUpload() {
  //     $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  //     $('.file-upload-content').hide();
  //     $('.image-upload-wrap').show();
  //   }
  //   $('.image-upload-wrap').bind('dragover', function () {
  //   $('.image-upload-wrap').addClass('image-dropping');
  //   });
  //   $('.image-upload-wrap').bind('dragleave', function () {
  //   $('.image-upload-wrap').removeClass('image-dropping');
  //   });




  // }





  // const showPreview = (event: { target: { files: string | any[]; }; }) =>{
  //   if(event.target.files.length > 0){
  //     var src = URL.createObjectURL(event.target.files[0]);
  //     var preview = document.getElementById("file-ip-1-preview");
  //    this.preview.src = src;
  //     this.preview.style.display = "block";
  //   }
  // }



}

uploadImage(e:any){
  debugger;

 let file =  e.target.files[0];
 this.image = "assets/img/"+file.name;
 this.container.nativeElement.innerHTML = '  <img style="height:-webkit-fill-available;width:-webkit-fill-available" src='+this.image +' >'//file.name;

}

}
