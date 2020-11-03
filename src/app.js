console.log('app.js is running now!')

const app = {
    title: 'Vacation Desination App',
    subTitle: 'Make those 2021 travel plans!',
    options: ['one', 'two']
}
const template  = (
<div>
    <h1>{ app.title }</h1>
    {app.subTitle && <p>{ app.subTitle }</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
</div>
)

const appRoot= document.getElementById('app')

ReactDOM.render(template, appRoot)