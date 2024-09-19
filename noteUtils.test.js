import { expect, test } from 'vitest'
import getNoteFromKey from './noteUtils'



test('si le paso la letra a devolvera C4', ()=>{
    let note = getNoteFromKey('a')
    expect(note).toBe('C4')
})
