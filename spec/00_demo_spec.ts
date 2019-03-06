describe('writing basic specs', () => {
    it('can add two numbers', () => {
        // Given (Arrange)
        const a = 10, b = 20;

        // When (Act)
        const answer = a + b;
        // then (assert)
        expect(answer).toBe(30);

    });
});