/**
 * Created by troy on 3/6/15.
 */
eventsApp.factory("eventData", function () {
    return {
        event: {
            name: 'Angular Boot Camp',
            date: 1359781015626,
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                state: 'CA'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorname: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorname: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorname: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.',
                    upVoteCount: 0
                }
            ]
        }
    };
});
