document.addEventListener('DOMContentLoaded', () => {
    const value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const club = [
        { symbol: '♥', color: 'red' },
        { symbol: '♦', color: 'red' },
        { symbol: '♠', color: 'black' },
        { symbol: '♣', color: 'black' }
    ]

    function generateCardAleatory() {
        const valueRandom = value[Math.floor(Math.random() * value.length)]
        const clubRandom = club[Math.floor(Math.random() * club.length)]

        const numElem = document.querySelectorAll('.number')
        const bigSuit = document.querySelector('.big-suit')
       

        numElem.forEach(elem => {
            elem.textContent = valueRandom;
            elem.className = `number ${clubRandom.color}`
        });

        bigSuit.textContent = clubRandom.symbol;
        bigSuit.className = `big-suit ${clubRandom.color}`
    }


    generateCardAleatory()


    document.querySelector('#newCard').addEventListener('click', generateCardAleatory)


    window.addEventListener('load', generateCardAleatory)
})