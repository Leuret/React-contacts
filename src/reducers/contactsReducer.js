const initialState = [
  {
    id: 1,
    name: "Fulanito",
    mail: "fulanito@mail",
    phone: "92374813",
    gender: "Male"
  },
  {
    id: 2,
    name: "Menganita",
    mail: "fulanito@mail",
    phone: "92374813",
    gender: "Female"
  },
  {
    id: 3,
    name: "Pepito",
    mail: "fulanito@mail",
    phone: "92374813",
    gender: "Male"
  },
  {
    id: 4,
    name: "Margarita",
    mail: "fulanito@mail",
    phone: "92374813",
    gender: "Female"
  }
]


const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FEMALES":
      return state.filter(contact => contact.gender === "Female")
    case "ADD_CONTACT":
      return [...state, action.payload]
    default:
      return state;
  }
}

export default contactReducer