/* 1 */

const button = document.getElementById('my-button');



/* 2 */
function generateGameGrid(){
    document.querySelector('#my-table').innerHTML = '';
    for (let i = 0; i < 100; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.innerText = i+1;
        cell.addEventListener('click', function(){
            this.classList.toggle('clicked')
            console.log(this.innerText)
        })
        document.querySelector('#my-table').appendChild(cell)
    }
}



button.addEventListener('click', function(){
    generateGameGrid()
})

/* 3 */

