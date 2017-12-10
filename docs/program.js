var threeNumbers;
(function (threeNumbers) {
    let $ = document.querySelector.bind(document); // this is just less typing.
    let input1;
    let input2;
    let input3;
    let result;
    function init() {
        input1 = $('#input1');
        input2 = $('#input2');
        input3 = $('#input3');
        result = $('#result');
        [input1, input2, input3].forEach(i => {
            i.addEventListener('keyup', getResult);
            i.addEventListener('change', getResult);
            i.value = '0';
        });
        getResult();
    }
    function getResult() {
        let value = calculate(+input1.value, +input2.value, +input3.value);
        result.innerText = '' + value;
    }
    function calculate(v1, v2, v3) {
        return v1 + v2 + v3;
    }
    document.addEventListener("DOMContentLoaded", init);
})(threeNumbers || (threeNumbers = {}));
//# sourceMappingURL=program.js.map