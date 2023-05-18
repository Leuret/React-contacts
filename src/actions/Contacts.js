//Action creators ( factory)

export const getFemales = (payload) => {
  return {type:"GET_FEMALES", payload}
}

export const AddContact = (payload) => {
  return {type:"ADD_CONTACT", payload}
}

/*
{
  type: "GET_CONTACTS"
}

{
  type: "GET_CONTACT",
  payload: id
}

{
  type: "ADD_CONTACT",
  payload: {
    name: "One NAme",
    mail: "mail"
  }
}
*/