// IMPORT MODULES under test here:
import { renderGame, renderTeam } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const game = {
        name1: 'Trev',
        score1: 50,
        name2: 'Chas',
        score2: 49
    };

    const expected = '<div class="game"><div class="team"><p class="name">Trev</p><p class="score">50</p></div><div class="team"><p class="name">Chas</p><p class="score">49</p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(game).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


