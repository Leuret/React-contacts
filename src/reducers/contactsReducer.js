const initialState = [
  {
    name: "Fulanito",
    gender: "Male"
  },
  {
    name: "Menganita",
    gender: "Female"
  },
  {
    name: "Pepito",
    gender: "Male"
  },
  {
    name: "Margarita",
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