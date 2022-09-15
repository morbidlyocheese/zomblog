const Surreal = require('surrealdb.js');

const db = new Surreal('https://localhost:8000/rpc');

async function main() {

    try {

        // Signin as a namespace, database, or root user
        await db.signin({
            user: 'root',
            pass: 'root',
        });

        // Select a specific namespace / database
        await db.use('test', 'test');

        let user = await db.create('user');
        let post = await db.create('post')

        // Create a new person with a random id
        let created = await db.create("person", {
            title: 'Founder & CEO',
            name: {
                first: 'Tobie',
                last: 'Morgan Hitchcock',
            },
            marketing: true,
            identifier: Math.random().toString(36).substr(2, 10),
        });

        // // Update a person record with a specific id
        // let updated = await db.change("person:jaime", {
        //     marketing: true,
        // });

        // // Select all people records
        // let people = await db.select("person");

        // // Perform a custom advanced query
        // let groups = await db.query('SELECT marketing, count() FROM type::table($tb) GROUP BY marketing', {
        //     tb: 'person',
        // });

    } catch (e) {

        console.error('ERROR', e);

    }

}

main();