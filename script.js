const base = {
    toString: function () {
        let string = ''
        for (const property in this) {
            const value = this[property]
            if (typeof value === 'function') continue
            string = string + value + ' '
        }
        return string.slice(0, -1)
    }
}

const obj0 = { name: 'Mateusz' }
const obj1 = Object.create(base)
obj1.name = 'Mateusz'

console.log(obj0.__proto__ === Object.prototype)
console.log(obj1.__proto__ === Object.prototype)
console.log(obj1.__proto__ === base)
console.log(obj1.__proto__.__proto__ === Object.prototype)

console.log('Hello ' + obj0)
console.log('Hello ' + obj1)

const obj2 = Object.create(obj1)

const normalObj = Object.create({})
const nullObj = Object.create(null)

normalObj.name = 'Mateusz'
nullObj.name = 'Mateusz'

console.log('Hello ' + normalObj)
console.log('Hello ' + nullObj)