describe('canGregBuyBeer', () => {
    describe('when greg is 18', () => {
      it('should return "Greg is 18, he can buy beer!"', () => {
        const originalAge = greg.age;
        greg.age = 18
        
        const result = canGregBuyBeer();
  
        expect(result).toBe('Greg is 18, he can buy beer!');
        greg.age = originalAge;
      })
    });
  });