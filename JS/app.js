//toast msg 
let div = null;

function generateToastMessage(msg) {
    //create div
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message my-btn-pulse-grow toast-message-slide-in';

    div.addEventListener('click', function () {
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out');

        div.addEventListener('animationend', function () {
            div.remove();
            div = null;
        });
    });

    document.body.appendChild(div);
}


function getInput(identity) {
    if (!identity || typeof identity !== 'string') return false;

    // get the element
    const element = document.querySelector(identity);
    const elementData = parseFloat(element.value);

    if (typeof elementData !== 'number' || isNaN(elementData) || elementData < 0) {
        const errFeedback = document.querySelector(`.invalid-feedback[data-target='${identity}']`);

        if (errFeedback) {
            errFeedback.innerText = 'please enter a valid number'
            if (div !== null) {
                div.remove();
                div = null;
                return generateToastMessage(`Please input valid amount of Iccome in number format `);
            }
        }

        element.classList.add('is-invalid')
        return false;
    }

    element.classList.remove('is-invalid')
    return elementData;
}