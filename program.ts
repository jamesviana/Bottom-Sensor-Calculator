namespace threeNumbers {
    
    class Point {
        constructor(public x: number, public y: number, public z: number) { }
    }

    let $: Function = document.querySelector.bind(document); 
    let input_a_z: HTMLInputElement;
    let input_b_z: HTMLInputElement;
    let input_c_z: HTMLInputElement;
    let output: HTMLElement;

    const a_x = 0;
    const a_y = 1079.5;
    const b_x = -1079.5;
    const b_y = 0;
    const c_x = 1079.5;
    const c_y = 0;
    const d_x = 0;
    const d_y = -1079.5;

    function init() {
        input_a_z = $('#input1');
        input_b_z = $('#input2');
        input_c_z = $('#input3');
        output = $('#result');

        [input_a_z, input_b_z, input_c_z].forEach(i => {
            i.addEventListener('keyup', getResult);
            i.addEventListener('change', getResult);
        });
        getResult();
    }

    function getResult(): void {
        let a = new Point(a_x, a_y, +input_a_z.value);
        let b = new Point(b_x, b_y, +input_b_z.value);
        let c = new Point(c_x, c_y, +input_c_z.value);

        let ab = new Point(b.x - a.x, b.y - a.y, b.z - a.z);
        let ac = new Point(c.x - a.x, c.y - a.y, c.z - a.z);
        let r = new Point(
            (ab.y * ac.z) - (ac.y * ab.z),
            ((ab.x * ac.z) - (ac.x * ab.z)) * -1,
            (ab.x * ac.y) - (ac.x * ab.y)
        );

        let result = (
            + (-r.x * d_x) 
            - (r.y * d_y) 
            + (r.y * a.y) 
            + (r.z * a.z)
        ) / r.z;

        output.innerText = '' + result;
    }

    document.addEventListener("DOMContentLoaded", init);
}