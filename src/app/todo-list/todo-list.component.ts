import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  selectedSellReq: any;

  constructor(private http: HttpClient) { }
  sellReq:any[]=[];
  buyReq:any[]=[];
  done:any[]=[];

  ngOnInit(): void {
    this.http.get('http://localhost:8080/getSellRequests').subscribe((res:any)=> {
    debugger
    if(res&&res.length>0){
        for(let i=0;i<res.length;i++){
        if(!res[i].approved) this.sellReq.push(res[i])
        else this.done.push(res[i])
        }

    

    }
  });
  }
  approve(displayMaximizable:any){
    
    this.selectedSellReq.approved=true;
    this.http.post('http://localhost:8080/approve',this.selectedSellReq).subscribe((res:any)=> {
    debugger
    if(res&&res.length>0){
      this.done=[];
      this.sellReq=[];

        for(let i=0;i<res.length;i++){
        if(!res[i].approved) this.sellReq.push(res[i])
        else this.done.push(res[i])
        }

    

    }
  });
  }
   state = [];

   setDefaultState() {
    var id = this.generateID();
    var baseState = {};
    // baseState[id] = {
    //   status: "new",
    //   id: id,
    //   title: "This site uses 🍪to keep track of your tasks"
    // };
    this.syncState(baseState);
  }

   generateID() {
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return randLetter + Date.now();
  }

   pushToState(title:any, status:any, id:any) {
    var baseState = this.getState();
    baseState[id] = { id: id, title: title, status: status };
    this.syncState(baseState);
  }

   setToDone(id: string | number) {
    var baseState = this.getState();
    if (baseState[id].status === 'new') {
      baseState[id].status = 'done'
    } else {
      baseState[id].status =  'new';
    }

    this.syncState(baseState);
  }

   deleteTodo(id: string | number) {
    console.log(id)
    var baseState = this.getState();
    delete baseState[id]
    this.syncState(baseState)
  }

   resetState() {
    localStorage.setItem("state", "null");
  }

   syncState(state: {}) {
    localStorage.setItem("state", JSON.stringify(state));
  }

   getState() {
    return JSON.parse(localStorage.getItem("state")+"");
  }

   addItem(text: string, status: string, id: string, noUpdate: any) {
    var id = id ? id : this.generateID();
    var c = status === "done" ? "danger" : "";
    var item =
      '<li data-id="' +
      id +
      '" class="animated flipInX ' +
      c +
      '"><div class="checkbox"><span class="close"><i class="fa fa-times"></i></span><label><span class="checkbox-mask"></span><input type="checkbox" />' +
      text +
      "</label></div></li>";

    // var isError = $(".form-control").hasClass("hidden");

    // if (text === "") {
    //   $(".err")
    //     .removeClass("hidden")
    //     .addClass("animated bounceIn");
    // } else {
    //   $(".err").addClass("hidden");
    //   $(".todo-list").append(item);
    // }

    // $(".refresh").removeClass("hidden");

    // $(".no-items").addClass("hidden");

    // $(".form-control")
    //   .val("")
    //   .attr("placeholder", "✍️ Add item...");
    // setTimeout(()=>
    //   $(".todo-list li").removeClass("animated flipInX")
    // , 500);

    // if (!noUpdate) {
    //   this.pushToState(text, "new", id);
    // }
  }

  //  refresh() {
  //   $(".todo-list li").each((i) =>{
  //     $(this)
  //       .delay(70 * i)
  //       .queue(() =>{
  //         $(this).addClass("animated bounceOutLeft");
  //         $(this).dequeue();
  //       });
  //   });

  //   setTimeout(()=> {
  //     $(".todo-list li").remove();
  //     $(".no-items").removeClass("hidden");
  //     $(".err").addClass("hidden");
  //   }, 800);
  // }

  // $(() {
  //   var err = $(".err"),
  //     formControl = $(".form-control"),
  //     isError = formControl.hasClass("hidden");

  //   if (!isError) {
  //     formControl.blur(() {
  //       err.addClass("hidden");
  //     });
  //   }

  //   $(".add-btn").on("click", () {
  //     var itemVal = $(".form-control").val();
  //     addItem(itemVal);
  //     formControl.focus();
  //   });

  //   $(".refresh").on("click", refresh);

  //   $(".todo-list").on("click", 'input[type="checkbox"]', () {
  //     var li = $(this)
  //       .parent()
  //       .parent()
  //       .parent();
  //     li.toggleClass("danger");
  //     li.toggleClass("animated flipInX");

  //     setToDone(li.data().id);

  //     setTimeout(() {
  //       li.removeClass("animated flipInX");
  //     }, 500);
  //   });

  //   $(".todo-list").on("click", ".close", () {
  //     var box = $(this)
  //       .parent()
  //       .parent();

  //     if ($(".todo-list li").length == 1) {
  //       box.removeClass("animated flipInX").addClass("animated                bounceOutLeft");
  //       setTimeout(() {
  //         box.remove();
  //         $(".no-items").removeClass("hidden");
  //         $(".refresh").addClass("hidden");
  //       }, 500);
  //     } else {
  //       box.removeClass("animated flipInX").addClass("animated bounceOutLeft");
  //       setTimeout(() {
  //         box.remove();
  //       }, 500);
  //     }

  //     deleteTodo(box.data().id)
  //   });

  //   $(".form-control").keypress((e) {
  //     if (e.which == 13) {
  //       var itemVal = $(".form-control").val();
  //       addItem(itemVal);
  //     }
  //   });
  //   $(".todo-list").sortable();
  //   $(".todo-list").disableSelection();
  // });

   todayContainer:any = document.querySelector(".today");


   d:any = new Date();


   weekday:any[] = ["Sunday 🖖","Monday 💪😀","Tuesday 😜"];
  // weekday[0] = "Sunday 🖖";
  // weekday[1] = "Monday 💪😀";
  // weekday[2] = "Tuesday 😜";
  // weekday[3] = "Wednesday 😌☕️";
  // weekday[4] = "Thursday 🤗";
  // weekday[5] = "Friday 🍻";
  // weekday[6] = "Saturday 😴";


   n:any = this.weekday[this.d.getDay()];


   randomWordArray = Array(
    "Oh my, it's ",
    "Whoop, it's ",
    "Happy ",
    "Seems it's ",
    "Awesome, it's ",
    "Have a nice ",
    "Happy fabulous ",
    "Enjoy your "
  );

   randomWord =
    this.randomWordArray[Math.floor(Math.random() * this.randomWordArray.length)];


  // this.todayContainer.innerHTML = this.randomWord + this.n;

  // $(document).ready(() {
  //   var state = getState();

  //   if (!state) {
  //     setDefaultState();
  //     state = getState();
  //   }

  //   Object.keys(state).forEach((todoKey)=>{
  //     var todo = state[todoKey];
  //     addItem(todo.title, todo.status, todo.id, true);
  //   });

  //   var mins, secs, update;

  //   init();
  //    init() {
  //     (mins = 25), (secs = 59);
  //   }


  //   new Set();
  //    new Set() {
  //     $(".mins").text(mins);
  //   }


  //   $("#start").on("click", start_timer);
  //   $("#reset").on("click", reset);
  //   $("#inc").on("click", inc);
  //   $("#dec").on("click", dec);

  //    start_timer() {

  //     new Set();

  //     $(".dis").attr("disabled", "true");

  //     $(".mins").text(--mins);
  //     $(".separator").text(":");
  //     update_timer();

  //     update = setInterval(update_timer, 1000);
  //   }

  //    update_timer() {
  //     $(".secs").text(secs);
  //     --secs;
  //     if (mins == 0 && secs < 0) {
  //       reset();
  //     } else if (secs < 0 && mins > 0) {
  //       secs = 59;
  //       --mins;
  //       $(".mins").text(mins);
  //     }
  //   }


  //    reset() {
  //     clearInterval(update);
  //     $(".secs").text("");
  //     $(".separator").text("");
  //     init();
  //     $(".mins").text(mins);
  //     $(".dis").attr("disabled", "false");
  //   }


  //    inc() {
  //     mins++;
  //     $(".mins").text(mins);
  //   }


  //    dec() {
  //     if (mins > 1) {
  //       mins--;
  //       $(".mins").text(mins);
  //     } else {
  //       alert("This is the minimum limit.");
  //     }
  //   }
  // });


  displayModal: boolean | undefined;

    displayBasic: boolean | undefined;

    displayBasic2: boolean | undefined;

    displayMaximizable: boolean | undefined;

    displayPosition: boolean | undefined;

    position: string | undefined;

  
    showMaximizableDialog(c:any) {
      this.selectedSellReq=c;
        this.displayMaximizable = true;
    }

  



}
function dec() {
  throw new Error('Function not implemented.');
}

function inc() {
  throw new Error('Function not implemented.');
}

function reset() {
  throw new Error('Function not implemented.');
}

function update_timer() {
  throw new Error('Function not implemented.');
}

function start_timer() {
  throw new Error('Function not implemented.');
}

function init() {
  throw new Error('Function not implemented.');
}

function addItem(title: any, status: any, id: any, arg3: boolean) {
  throw new Error('Function not implemented.');
}

function getState(): any {
  throw new Error('Function not implemented.');
}

function setDefaultState() {
  throw new Error('Function not implemented.');
}

function deleteTodo(id: any) {
  throw new Error('Function not implemented.');
}

