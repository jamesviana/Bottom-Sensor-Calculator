namespace threeNumbers {
    let $: Function = document.querySelector.bind(document); // this is just less typing.
    let input1:HTMLInputElement = $('#input1');
    let input2:HTMLInputElement = $('#input2');
    let input3:HTMLInputElement = $('#input3');
    let run:HTMLButtonElement = $('#run');
    let result:HTMLElement = $('#result');

    run.addEventListener('click', getResult);

    function getResult():void {
        let v1 = +input1.value;
    }
}