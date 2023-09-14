const parent = React.createElement('div', {id:"parent"}, [
    React.createElement("div", {id:"child 1"}, [
        React.createElement("h1", {}, "I am child 1_1"),
        React.createElement("h1", {}, "I am child 1_2")
    ]),
    React.createElement("div", {id:"child 2"}, [
        React.createElement("h1", {}, "I am child 2_1"),
        React.createElement("h1", {}, "I am child 2_2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);