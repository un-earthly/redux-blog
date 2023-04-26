import loadTalksAction from "../redux/actions/blogsActions";

const loadTalks = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/talks")
        const { data } = await res.json()
        if (data.length) {
            dispatch(loadTalksAction(data));
        }
    }
}

export default loadTalks;