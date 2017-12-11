namespace threeNumbers {
    type point = [number, number, number];

    let $: Function = document.querySelector.bind(document); // this is just less typing.
    let input1: HTMLInputElement;
    let input2: HTMLInputElement;
    let input3: HTMLInputElement;
    let result: HTMLElement;

    const a_x = 0;
    const a_y = 1079.5;
    const b_x = -1079.5;
    const b_y = 0;
    const c_x = 1079.5;
    const c_y = 0;
    const d_x = 0;
    const d_y = 1079.5;

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
        let a_z = +input1.value;
        let b_z = +input2.value;
        let c_z = +input3.value;

        let a:point = [a_x, a_y, a_z];
        let b:point = [b_x, b_y, b_z];
        let c:point = [c_x, c_y, c_z];

        let ab:point = [b_x - a_x, b_y - a_y, b_z - a_z];
        let ac:point = [c_x - a_x, c_y - a_y, c_z - a_z];
        let vector_result:point = [
            (ab[1] * ac[2]) - (ac[1] * ab[2]),
            
        ];
        let value = calculate(+input1.value, +input2.value, +input3.value);
        result.innerText = '' + value;
    }

    function calculate(v1: number, v2: number, v3: number): number {
        return v1 + v2 + v3;
    }

    document.addEventListener("DOMContentLoaded", init);
}