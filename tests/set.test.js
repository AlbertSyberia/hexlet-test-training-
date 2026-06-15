import { strict as assert} from 'node:assert'

import set from '../set.js'

const obj = {}

set(obj, 'key1', 'value1')
assert.deepStrictEqual(obj.key1, 'value1')

set(obj, 'key1', 'next value')
assert.deepStrictEqual(obj.key1, 'next value')

console.log('Все тесты пройдены!')
