import './main.html';
import {Session} from 'meteor/session';
import Profiles from '../collections';

Template.profile.created = () => {
  console.log("Created con el profile template");
}

Template.profile.rendered = () => {
  console.log("Redered the profile template");
}

Template.profile.helpers({
  exampleHelper: () => {
    return "String creado con el exampleHelper";
  },
  profileList: () => {
    return [
      {
        name: "Juan Rodríguez", age: 25
      },
      {
        name: "Gloria Borger", age: 9999
      },
      {
        name: "Mary Ham", age: 27
      }
    ]
  },
  passingData: (myString1, myString2) => {
    console.log(`These are the strings ${myString1} ${myString2}`)
  },
  randomHelper: () => {
    return Session.get("randomNumber");
  },
  profilesCollection: () => {
    return Profiles.find({});
  }
});

Template.formulario.events({
  'submit form': (event) => {

    const target = event.target;
    const name = target.name.value;
    const age = target.age.value;

    Profiles.insert({name: name, age: age});
    event.preventDefault();

  }
});