const root = $('#root');
const clickMe = $('#add-card');

let deckRef;
let cardArr = [];
let angle = 0;

axios.get('http://deckofcardsapi.com/api/deck/new/').then(
    response => {
        const { deck_id } = response.data;
        deckRef = deck_id;
        }).catch(err => {
            console.log('ERorRoRORORO', err)});
        
        
clickMe.on('click', () => {
    axios.get(`http://deckofcardsapi.com/api/deck/${deckRef}/shuffle/`).then( res => 
        axios.get(`http://deckofcardsapi.com/api/deck/${deckRef}/draw/?count=1`)).then(response => {
        const { cards, remaining } = response.data;
        const { image } = cards[0];
        addCard({ image, remaining });
        }).catch(err => {
            console.log('ERorRoRORORO', err)});
        });



function addCard ({image, remaining}) {
    if(remaining > 0) {
        const cardBody = `<div class="card" style="transform: rotate(${angle}deg);"><img alt="card-img" src="${image}"</div>`;
        let newCard = $(cardBody);
        root.append(newCard);
        angle += 10;
    }
}

