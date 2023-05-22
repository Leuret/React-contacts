const initialState = [
  {
    id: 1,
    name: "Fulanito",
    mail: "fulanito@mail",
    phone: "92374813"
  },
  {
    id: 2,
    name: "Menganita",
    mail: "fulanito@mail",
    phone: "92374813"
  },
  {
    id: 3,
    name: "Pepito",
    mail: "fulanito@mail",
    phone: "92374813"
  },
  {
    id: 4,
    name: "Margarita",
    mail: "fulanito@mail",
    phone: "92374813"
  }
]


const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload]
    case "DELTE_CONTACT":
      return state.filter(contact => contact.id !== action.payload)
    default:
      return state;
  }
}

export default contactReducer