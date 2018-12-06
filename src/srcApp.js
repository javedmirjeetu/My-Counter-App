
const addOne = () => {
    count++;
    console.log("Added One" ,count);
    render();
   
   }
    const subOne=()=> {
        count--;
        console.log("sub one",count);
        render();
   
        
    }

    const resetAll = ()=> {
        count = 0;
    render();
    }
    
let count = 0;



const render = () => {
const counterTemplate =  (


    <div>

        <h1 id= "counter" className = "counter"> {count}</h1>
<a class="waves-effect waves-light btn" onClick ={addOne}>ADD 1</a>
<a class="waves-effect waves-light btn" onClick ={subOne}>SUB 2</a>
<a class="waves-effect waves-light btn" onClick ={resetAll}>Reset</a>

    </div>
);


const myApp = document.querySelector("#my-app");

ReactDOM.render(counterTemplate,myApp);

}
render();