import {Meteor} from 'meteor/meteor';
import Profiles from "../collections";

Meteor.startup(() => {
  if (Profiles.find().count() === 0){
    console.log("There are no profiles");
    let dummyProfiles = [
      { name: "Ana Toledo", age: 50},
      { name: "Maribel Gomez", age: 40},
      { name: "Varsobia Putin", age: 60},
      { name: "Greta Thunberg", age: 20},
      { name: "Julio Cesar Turbay", age: 10},
    ];

    dummyProfiles.forEach(e => {
      Profiles.insert(e);
    })
  }
});

