console.log('build-it-visible.js is running!');

const app = {
    title: 'Visibility Toggle',
    text: 'Hey. These are some details'
};

const appRoot = document.getElementById('app');

let isShown = false;

const getToggleBtnText = () => {
    let result;
    if (isShown === true){
        result = 'Hide details';
    }
    else{
        result = 'Show details'
    }
    return result;
}

const toggle = () => {
    let text = document.getElementById('text');
    
    if (isShown === true) {
        isShown = false;
        text.innerHTML = '';
    }
    else {
        isShown = true;
        text.innerHTML = app.text;
    }
    let btn = document.getElementById('btn');
    btn.innerHTML = getToggleBtnText();
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggle} id="btn">{getToggleBtnText()}</button>
            <p id='text'></p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();