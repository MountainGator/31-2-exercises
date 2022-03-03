const input = $('#my-num');
const form = $('#new-number');
const root = $('#root');

form.on('submit', (e) => {
    e.preventDefault();
    axios.get(`http://numbersapi.com/${input.val()}/trivia`).then(response => {
        printNum(response.data)
    })
});

function printNum (data) {
    let info = $(`<p>${data}</p>`);
    root.append(info);
}