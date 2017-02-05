Array.prototype.rand = function() {
    return this[Math.floor(Math.random() * this.length)];
};

String.prototype.sanitize = function() {
    return this.replace(/(<([^>]+)>)/ig, '').trim();
};

let quote = function() {
    const name = document.querySelector('#heroName').value.sanitize();

    if (name.length === 0)
        return false;
    else if (name.length > 20) {
        alert("The Phantom says no one has that long name.");
        return false;
    }

    const proverbs = [
        `You will never find ${name} - they will find you`,
        `To wake up in the dark and see ${name} - what a horrible end to villains`,
        `To wake up in the dark and see the face of ${name} - what a horrible end`,
        `They who see the face of ${name} without a mask will face a horrible death`,
        `They who see the face of ${name} will face a horrible death`,
        `When a villain sees the the face of ${name} without a mask, they face a horible death`,
        `When ${name} asks a question, you answer`,
        `When ${name} speaks, you listen`,
        `When ${name} is moving even the most rapid flash is as slow as a tortoise`,
        `When ${name} is angry even the jungle shakes`,
        `When ${name} acts even the most rapid flash is as slow as a tortoise`,
        `When ${name} looks at you your blood freezes`,
        `${name} is a person of few words but is equipped with the wisdom of Solomon`,
        `${name} sneaks in silence like a jungle cat`,
        `${name} moves in the jungle faster than a helicopter flies`,
        `${name} is rough to the rough people`,
        `${name} has the strength of ten tigers`,
        `${name} has thousand eyes and thousand ears`,
        `Sometimes ${name} leaves the jungle and walks out on the streets like one of us`,
        `Sometimes ${name} leaves the jungle and walks in the city like one of us`,
        `Never point your gun at ${name}`,
        `The rage of ${name} is like a hurricane`,
        `The fists of ${name} are steel`
    ];

    result.querySelector('span').innerHTML = `${proverbs.rand()}.`;
    result.classList.remove('hide');
}

const trigger = document.querySelector('#triggerButton');
const result = document.querySelector('.proverb');

trigger.addEventListener('click', quote);
