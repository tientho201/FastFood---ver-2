var apiNotify = new CallApiNotify() ; 
var notify = [] ; 

function getListNotify(){
    var promise = apiNotify.fectchData() ; 
    promise 
        .then(function(result){
            notify = result.data ; 
            renderNotify(notify) ; 
        })
}

getListNotify() ; 

function renderNotify(data){
    var s = "" ; 
    var listNotify = document.querySelector('.header__notify-list') ; 
    for(var i = data.length  - 1  ; i >= 0  ; i--){
        var itemNotify = data[i] ; 
        s += `<li class="header__notify-item header__notify-item--readed">
        <a href="" class="header__notify-link">
            <img src="${itemNotify.img}"
                class="header__notify-img" alt="">
            <div class="header__notify-info">
                <span class="header__notify-name">${itemNotify.name}</span>
                <span class="header__notify-descriotion">${itemNotify.detail}</span>
            </div>
        </a>
    </li>`
    }
    listNotify.innerHTML = s ;
}
