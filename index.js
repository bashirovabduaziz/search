let filter = [];

let galleryarray = [
    {
        id:1,
        name: "img1",
        src:"./img/firstimg.jpg",
        desc: "Uyda tushgan rasm" 
    },
    {
        id:2,
        name: "img2",
        src:"./img/secondimg.png",
        desc: "Litseyda tushgan rasm" 
    },
    {
        id:3,
        name: "img3",
        src:"./img/threeimg.png",
        desc: "Makroda tushgan rasm" 
    },
    {
        id:4,
        name: "img4",
        src:"./img/fourimg.png",
        desc: "Magic city da tushgan rasm" 
    },
    {
        id:5,
        name: "img5",
        src:"./img/fiveimg.png",
        desc: "Qishda tushgan rasm" 
    },
    {
        id:6,
        name: "img6",
        src:"./img/siximg.png",
        desc: "Qishda tushgan rasm" 
    }
]




showgallery(galleryarray)

function showgallery(currarray){

    document.getElementById("card").innerText="";

    for(var i = 0; i < currarray.length;i++){
        document.getElementById("card").innerHTML +=`
        <div class="col-md-4 mt3">
        <div class="card p-3 ps-5 pe-5">
        <h4 class="text-capitalize text-center">${currarray[i].name}</h4>
        <img src="${currarray[i].src}" width="100%" height="320px"/>
        <p class="mt-2">${currarray[i].desc}</p>
        <button class="btn btn-primary w-100 mx-auto">More</button>
        </div>
        </div>
        `
    }
}


document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;
    filter = galleryarray.filter(function(a){
      if(a.name.includes(text)){
        return a.name;
      };

    });
    if(this.value == ""){
        showgallery(galleryarray);
    }
    else{
        if(filter == ""){
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        }
        else{
            showgallery(filter);
            document.getElementById("para").style.display = 'none';
        }
    }
})