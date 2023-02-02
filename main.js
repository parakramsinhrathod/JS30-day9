const dogs = [{name: 'Snicker', age: 2}, {name: 'hugo', age: 8}]

// break on > attribute modification 
function makeGreen(){
    const p = document.querySelector('p')
    p.style.color = '#BADA55'
    p.style.fontSize = `50px`
}

// regular
console.log('hello')

// Interpolated
console.log("hello I'm a %s string", '😀')

// styled 
console.log('%c I am some great text', 'font-size: 50px; color:red; background:yellow;')

// warn
console.warn('oh nooo ')

// error
console.error('errreor')

// info
console.info('you can press cmd+j or cnt+j to open console in chrome')

// testing
console.assert(1===2, '%c That is wrong!', 'font-size:30px; color:orange;')

// clear console
// console.clear()

// Viewing DOM element
const p = document.querySelector('p')
console.log(p)
// show dropdown of availabe properties of selected element
console.dir(p)

// grouping things together
dogs.forEach(dog => {
    console.group(`${dog.name}`)
    /* for collapsed group */
    // console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`)
    console.log(`${dog.name} is ${dog.age * 7} dogs year`)
    console.groupEnd(`${dog.name}`)
})

// counting
console.count('wes')
console.count('wes')
console.count('steeve')
console.count('wes')
console.count('wes')
console.count('steeve')
console.count('steeve')
console.count('steeve')
console.count('wes')
console.count('steeve')
console.count('steeve')
console.count('steeve')
console.count('wes')


// timing
console.time('fetching data')

fetch('https://api.github.com/users/webbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data')
        console.table(data)
    })


// table
console.table(dogs)