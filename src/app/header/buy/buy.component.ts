import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

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


  }


    loading = [false, false, false, false]

    load(index:any) {
        this.loading[index] = true;
        setTimeout(() => this.loading[index] = false, 1000);
    }
    search(text:any){
      // debugger
    //   this.cars=JSON.parse(JSON.stringify(this.copy))
    // this.cars = this.cars.filter( ({ name }) => name.toLowerCase().startsWith(text.toLowerCase()))

    }

}
