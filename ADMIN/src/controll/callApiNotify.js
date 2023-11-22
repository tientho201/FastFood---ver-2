
function CallApiNotify() {
    this.fectchData = function () {
        var promise = axios({
            url: "https://65488f4bdd8ebcd4ab231dd7.mockapi.io/notify",
            method: "GET",
        });
        return promise;
    };
    this.addNotify = function (data) {
  
        return axios({
            url: "https://65488f4bdd8ebcd4ab231dd7.mockapi.io/notify",
            method: "POST",
            data: data,
        });
    };
    this.deleteNotify = function (id) {
        return axios({
            url:
                "https://65488f4bdd8ebcd4ab231dd7.mockapi.io/notify/" + id,
            method: "DELETE",
            
        });
    };
    this.getNotify = function (id) {
        return axios({
            url:
                "https://65488f4bdd8ebcd4ab231dd7.mockapi.io/notify/" + id,
            method: "GET",
        });
    };
    this.editNotify = function (id, data) {
    
    
        return axios({
            url: "https://65488f4bdd8ebcd4ab231dd7.mockapi.io/notify/" + id,
            method: "PUT",
            data: data,
        });
    };
    
}
