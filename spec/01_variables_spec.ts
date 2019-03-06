describe('variables and constants', () => {
    describe('declaring variables', () => {
        it('has a let keyword', () => {
            let x: number | string = 12;
            interface Food {
                name: string;
                calories: number;
            }
            let z: number | string | Food; // Union type


            expect(x).toBe(12);

            x = 13;

            expect(x).toBe(13);

            let y;

            y = 18;
            expect(y).toBe(18);

            y = 'Tacos!';

            expect(y).toBe('Tacos!');

            //x = function () { console.log('Hello, World') };
        });
        it('using the const keyword', () => {
            const MIN_AGE = 13;

            // MIN_AGE = 32;
            const FAVORITE_NUMBERS = [9, 20, 108];
            FAVORITE_NUMBERS[0] = 10;

            const ACTOR = {
                name: 'Peter Mayhew',
                role: 'Chewbacca'
            };

            ACTOR.role = 'Chewie';
        });
        it('still has var but it is bad and you should feel bad if you use it', () => {

            const age = 22;
            if (age >= 21) {
                var oldEnough = true;
            }
            expect(oldEnough).toBe(true);
        });
    });
    describe('literals', () => {
        it('has numeric literals', () => {
            let first = 10;
            let second = 3.12;
            let salary = 10_001_800;
            let hexNumber = 0xff;
            let binary = 0b101010;
            let octal = 0o744;

        });
        it('has string literals', () => {
            let firstString = 'Hello, World';
            expect(firstString).toBe("Hello, World");

            let story = 'He said "Oh My gosh"';
            let author = "Flanner O'Connel";

            expect("hi").toBe(`hi`);

            let lifeStory = `It all happened so quickly.
            
            
            There I was in my mom, and then I wasn't. Weird.
            
            the end.`;

            let name = 'Jeff', age = 49;

            let info = `His name is ${name} and his age is ${age}.`;
            console.log(info);

        });
        it('has array literals', () => {
            const things = [];
            things[0] = 'Hello';
            things[1] = 42;
            things[989] = 'You went this far?';
            things[990] = things;
            things[991] = ['Dog', 'Cat', 'Mouse'];

            expect(things[2]).toBeUndefined();

            const luckyNumbers: Array<number | string> = [];
            const friends: (string | number)[] = [];
            friends[0] = 'David';
            friends[1] = 'Stacey';
            friends[2] = 42;




        });
    });
});