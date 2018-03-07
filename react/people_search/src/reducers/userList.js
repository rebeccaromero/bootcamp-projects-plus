const users = [
{name: 'Charlie', city: 'San Diego', industry: 'Brewing', hobbies: 'surfing, hooting, clay', email: 'cool_guy21@SD.com'},
{name: 'Janel', city: 'San Diego', industry: 'Hospitality', hobbies: 'trolley hopping, skin regimens, adventuring', email: 'bbqGoyle@calicomf.net'},
{name: 'Hank', city: 'Arlen', industry: 'Propane', hobbies: 'grilling, mowing, beer', email: 'bobbysDaddio@texas.com'},
{name: 'Dan', city: 'Los Angeles', industry: 'Coding', hobbies: 'boardgames, video games, escape rooms', email: 'danieljr25@gmail.com'},
{name: 'Libby', city: 'DC', industry: 'Government', hobbies: 'arguing, brunch, meow', email: 'terriblyNamed@nova.org'},
{name: 'Henry', city: 'London', industry: 'Monarchy', hobbies: 'beheading, women, food', email: 'baldGuyThe8th@rich.web'},
{name: 'Paula', city: 'Hollywood', industry: 'Acting', hobbies: 'running, being blonde, awful', email: 'phonybalogna@tanned.net'},
{name: 'Dimitri', city: 'St.Petersburg', industry: 'Dancing', hobbies: 'dancing, dancing, fighting bears', email: 'bear_wrestler5000@niet.com'}
]

const userList = (state = users, action) => {
    switch (action.type) {
        case 'FILTER_BY': 
            return [ state ]
        default:
            return state
    }
}

export default userList