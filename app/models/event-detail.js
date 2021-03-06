export default DS.Model.extend({

  map: DS.belongsTo('map'),

  flags: DS.attr(),
  level: DS.attr('number'),
  location: DS.attr(),
  name: DS.attr('string')

});

// {
//   "events": {
//     "15141AB4-6090-41C0-A43A-9B339336B021": {
//       "name": "Help the Wyld Hunt valiants clear undead from Treemarch Estuary.",
//       "level": 14,
//       "map_id": 34,
//       "flags": [],
//       "location": {
//         "type": "sphere",
//         "center": [
//           7525,
//           33757.5,
//           -367.797
//         ],
//         "radius": 1863,
//         "rotation": 0
//       }
//     }
//   }
// }
