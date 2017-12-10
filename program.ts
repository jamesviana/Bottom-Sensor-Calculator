namespace threeNumbers {
    let $: Function = document.querySelector.bind(document); // this is just less typing.
    let input1: HTMLInputElement;
    let input2: HTMLInputElement;
    let input3: HTMLInputElement;
    let result: HTMLElement;

    function init() {
        input1 = $('#input1');
        input2 = $('#input2');
        input3 = $('#input3');
        result = $('#result');

        [input1, input2, input3].forEach(i => {
            i.addEventListener('keyup', getResult);
            i.addEventListener('change', getResult);
        });
        getResult();
    }

    function getResult(): void {
        let value = calculate(+input1.value, +input2.value, +input3.value);
        result.innerText = '' + value;
    }

    function calculate(v1: number, v2: number, v3: number): number {
        return v1 + v2 + v3;
    }

    document.addEventListener("DOMContentLoaded", init);
}