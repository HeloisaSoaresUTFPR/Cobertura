//const func = require('../funcoes/func')
import numeroPositivo from '../funcoes/NumeroPositivo'

describe ('Teste numero positivo', () => { 

        test ('Teste numero positivo', () => {
            const resultado = numeroPositivo(3)
            
            expect(resultado).toBe(true)
        })

        test ('Teste numero positivo', () => {
            const resultado = numeroPositivo(-1)
            
            expect(resultado).toBe(false)
        })
})