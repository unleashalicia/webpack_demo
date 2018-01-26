export const addHtmlToDom = html => {
    const div = document.createElement('div');

    div.innerHTML = html;

    document.getElementById('root').appendChild(div);
}

export const addButton = (text, cb) => {
    const btn = document.createElement('button');

    btn.innerText = text;

    btn.onclick = cb;


    document.body.appendChild(btn);
}