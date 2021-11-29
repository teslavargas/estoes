export const ADD_TO_MY_PROJECTS = 'ADD_TO_MY_PROJECTS'; 
export const UPDATE_PROJECT = 'UPDATE_PROJECT'; 
export const DELETE_PROJECT = 'DELETE_PROJECT'; 

export function addToMyProjects(payload){
    return {
        type: ADD_TO_MY_PROJECTS,
        payload,
    }
}

export function updateProject(payload, id){
    return {
        type: UPDATE_PROJECT,
        payload,
        id
    }
}

export function deleteProject(payload, id){
    return {
        type: DELETE_PROJECT,
        payload,
        id
    }
}
