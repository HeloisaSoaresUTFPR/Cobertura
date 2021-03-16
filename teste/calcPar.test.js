import calcPar from '../funcoes/calcPar'


describe ('Teste numeros pares de 0 à 10', () => { 

        test ('Teste pares 0 a 10', () => {
            const resultado = calcPar(10)
            
            expect(resultado).toBe(6)
        })
})
