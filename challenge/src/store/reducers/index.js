import { ADD_TO_MY_PROJECTS, UPDATE_PROJECT, DELETE_PROJECT } from "../actions/actions";

const initialState = {
  projects: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_MY_PROJECTS:
      return {
        ...state,
        projects: state.projects.concat(action.payload),
      };

    case UPDATE_PROJECT:
      console.log(action.id);
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload)
      }


    default:
      return {
        ...state,
      };
  }
};

export default reducer;
