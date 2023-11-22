
function CallApiAccount() {
    this.fectchData = function () {
        var promise = axios({
            url: "https://652d1ea5f9afa8ef4b26ceb3.mockapi.io/LoginAndSignin",
            method: "GET",
        });
        return promise;
    };
    this.addAccount = function (data) {
        var promise = axios({
            url: "https://652d1ea5f9afa8ef4b26ceb3.mockapi.io/LoginAndSignin",
            method: "POST",
            data: data,
        });
        return promise;
    };
    this.deleteAccount = function (id) {
        return axios({
            url:
                "https://652d1ea5f9afa8ef4b26ceb3.mockapi.io/LoginAndSignin/" + id,
            method: "DELETE",
        });
    };
    this.getAccount = function (id) {
        return axios({
            url:
                "https://652d1ea5f9afa8ef4b26ceb3.mockapi.io/LoginAndSignin/" + id,
            method: "GET",
        });
    };
    this.editAccount = function (id, data) {
        var promise = axios({
            url:
                "https://652d1ea5f9afa8ef4b26ceb3.mockapi.io/LoginAndSignin/" + id,
            method: "PUT",
            data: data,
        });
        return promise;
    };
}