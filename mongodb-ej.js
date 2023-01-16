conn = new Mongo();
db = conn.getDB('unir-live');

// result = db.movies.find({ year: 1994 });

// result = db.movies.aggregate([
//     { $match: { 'imdb.rating': { $gt: 9.5 } } }
// ]);

// result = db.movies.aggregate([
//     { $match: { cast: { $in: ['Tom Hanks', 'Leonardo DiCaprio'] } } }
// ]);

// result = db.movies.aggregate([
//     { $group: { _id: '$year', total: { $sum: 1 } } },
//     { $sort: { total: 1 } }
// ]);

// result = db.movies.aggregate([
//     { $match: { year: 1944 } },
//     { $project: { _id: 0, title: 1, cast: 1 } }
// ]);

// result = db.movies.aggregate([
//     { $match: { year: 1944 } },
//     {
//         $project: {
//             _id: 0, title: 1, cast: 1, rating: '$imdb.rating', wins: '$awards.wins'
//         }
//     },
//     { $sort: { wins: -1 } },
//     { $limit: 5 },
//     { $addFields: { developer: 'Mario Girón' } }
// ]);

// result = db.movies.aggregate([
//     { $match: { title: 'Wilson' } },
//     { $unwind: '$cast' },
//     { $count: 'total' }
// ]);

// result = db.movies.aggregate([
//     { $sortByCount: '$year' }
// ]);

// result = db.movies.aggregate([
//     { $match: { cast: { $in: ['Lisa Kudrow'] } } },
//     {
//         $facet: {
//             'ratings': [
//                 { $project: { _id: 0, title: 1, rating: '$imdb.rating' } },
//                 { $sort: { rating: -1 } }
//             ],
//             'castPartners': [
//                 { $project: { _id: 0, title: 1, year: 1, cast: 1 } },
//                 { $sort: { year: 1 } }
//             ]
//         }
//     }
// ]);

// db.movies.createIndex({ title: 'text' });

result = db.movies.aggregate([
    { $match: { $text: { $search: 'moon' } } },
    { $project: { _id: 0, title: 1 } },
    { $count: 'total' }
]);

result.forEach(printjson);