var threeNumbers;
(function (threeNumbers) {
    var Point = /** @class */ (function () {
        function Point(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        return Point;
    }());
    var $ = document.querySelector.bind(document);
    var input_a_z;
    var input_b_z;
    var input_c_z;
    var output;
    var a_x = 0;
    var a_y = 1079.5;
    var b_x = -1079.5;
    var b_y = 0;
    var c_x = 1079.5;
    var c_y = 0;
    var d_x = 0;
    var d_y = -1079.5;
    function init() {
        input_a_z = $('#input1');
        input_b_z = $('#input2');
        input_c_z = $('#input3');
        output = $('#result');
        [input_a_z, input_b_z, input_c_z].forEach(function (i) {
            i.addEventListener('keyup', getResult);
            i.addEventListener('change', getResult);
        });
        getResult();
    }
    function getResult() {
        var a = new Point(a_x, a_y, +input_a_z.value);
        var b = new Point(b_x, b_y, +input_b_z.value);
        var c = new Point(c_x, c_y, +input_c_z.value);
        var ab = new Point(b.x - a.x, b.y - a.y, b.z - a.z);
        var ac = new Point(c.x - a.x, c.y - a.y, c.z - a.z);
        var r = new Point((ab.y * ac.z) - (ac.y * ab.z), ((ab.x * ac.z) - (ac.x * ab.z)) * -1, (ab.x * ac.y) - (ac.x * ab.y));
        var result = (+(-r.x * d_x)
            - (r.y * d_y)
            + (r.y * a.y)
            + (r.z * a.z)) / r.z;
        output.innerText = '' + result;
    }
    document.addEventListener("DOMContentLoaded", init);
})(threeNumbers || (threeNumbers = {}));
//# sourceMappingURL=program.js.map