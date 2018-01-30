"use strict";
var Post = (function () {
    function Post(name, description, price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
    Post.prototype.toForm = function () {
        return "name=" + this.name + "&description=" + this.description + "&price=" + this.price;
    };
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=comment.js.map