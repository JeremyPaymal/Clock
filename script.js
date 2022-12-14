const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondsDegree = ((360/60) * second) + 90;
    secondHand.style.transition = secondsDegree === 90 ? 'all 0s' : 'all 0.05s';
    secondHand.style['transition-timing-function'] = 'cubic-bezier(0.1,2.7, 0.58, 1)';
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    const min = now.getMinutes();
    const minDegree = ((360/60) * min) + 90;
    minHand.style.transition = minDegree === 90 ? 'all 0s' : 'all 0.05s';
    minHand.style['transition-timing-function'] = 'cubic-bezier(0.1,2.7, 0.58, 1)';
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = now.getHours();
    const hoursDegree = ((360/12) * hour) + 90 + (minDegree/12-8);
    hourHand.style.transition = hoursDegree === 90 ? 'all 0s' : 'all 0.05s';
    hourHand.style['transition-timing-function'] = 'cubic-bezier(0.1,2.7, 0.58, 1)';
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);
