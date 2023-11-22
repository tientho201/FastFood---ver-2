function CallApiOrder() {
    this.fectchData = function () {
        var promise = axios({
            url: "https://654891e6dd8ebcd4ab2323b3.mockapi.io/DonHang",
            method: "GET",
        });
        return promise;
    };
    this.addOrder = function (data) {
        var promise = axios({
            url: "https://654891e6dd8ebcd4ab2323b3.mockapi.io/DonHang",
            method: "POST",
            data: data,
        });
        return promise;
    };
    this.deleteOrder = function (id) {
        return axios({
            url:
                "https://654891e6dd8ebcd4ab2323b3.mockapi.io/DonHang/" + id,
            method: "DELETE",
        });
    };
    this.getOrder = function (id) {
        return axios({
            url:
                "https://654891e6dd8ebcd4ab2323b3.mockapi.io/DonHang/" + id,
            method: "GET",
        });
    };
    this.editOrder = function (id, data) {
        var promise = axios({
            url:
                "https://654891e6dd8ebcd4ab2323b3.mockapi.io/DonHang/" + id,
            method: "PUT",
            data: data,
        });
        return promise;
    };
}