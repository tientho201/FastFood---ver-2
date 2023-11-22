function CallApiProduct() {
    this.fetchData = function () {
        var promise = axios({
            url: "https://652e1b3df9afa8ef4b280b73.mockapi.io/SanPham",
            method: "GET",
        });
        return promise;
    };
    this.addProduct = function (data) {
        var promise = axios({
            url: "https://652e1b3df9afa8ef4b280b73.mockapi.io/SanPham",
            method: "POST",
            data: data,
        });
        return promise;
    };
    this.deleteProduct = function (id) {
        return axios({
            url:
                "https://652e1b3df9afa8ef4b280b73.mockapi.io/SanPham/" + id,
            method: "DELETE",
        });
    };
    this.getProduct = function (id) {
        return axios({
            url:
                "https://652e1b3df9afa8ef4b280b73.mockapi.io/SanPham/" + id,
            method: "GET",
        });
    };
    this.editProduct = function (id, data) {
        var promise = axios({
            url:
                "https://652e1b3df9afa8ef4b280b73.mockapi.io/SanPham/" + id,
            method: "PUT",
            data: data,
        });
        return promise;
    };
}
