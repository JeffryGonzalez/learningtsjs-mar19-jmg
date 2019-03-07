describe('functions', () => {
    describe('function literals', () => {
        it('has a couple of kinds', () => {

            // Named Function

            expect(add(2, 2)).toBe(4);
            function add(a: number, b: number): number {
                return a + b;
            }
            // Anonymous Functions

            const subtract = function (a: number, b: number) {
                return a - b;
            }
            expect(subtract(10, 2)).toBe(8);

            const multiply = (a: number, b: number) => a * b;
            expect(multiply(3, 3)).toBe(9);

            const divide = (a: number, b: number) => {
                if (b <= 0) {
                    throw new Error('You almost destroyed the universe!');
                } else {
                    return a / b;
                }
            }

            const age = 21;
            const message = age >= 21 ? "Old Enough" : "Too Young";






            function makeMeASalad(lettuce: string, dressing: string) {
                return {
                    lettuce: 'Using ' + lettuce,
                    with: dressing
                }
            }

            const salad = makeMeASalad('Romain', 'Russian');

            expect(salad.with).toBe('Russian');


        });
        it('passing arguments to functions', () => {

            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }
            expect("dog").toBeTruthy();
            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });

        it('using rest parameters', () => {

            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }

            expect(add(2, 2)).toBe(4);
            expect(add(2, 2, 2)).toBe(6);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });
    });
});