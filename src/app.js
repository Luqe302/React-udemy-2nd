console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options: ' + app.options : 'No options'}</p>

    </div>
);



const user = {
    name: 'Lukasz Grzasko',
    age: 19,
    location: 'Bryhors',
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }else {
    return undefined;
    }
}

const getFirstName = (name) => user.name.split(' ')[0];
console.log(getFirstName(user.name));

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((e) => e * this.multiplyBy);
    }
};
console.log(multiplier.multiply());

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
