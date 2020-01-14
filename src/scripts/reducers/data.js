import immutable from "immutable"


const defaultState = immutable.fromJS({
    count: 2000,
    Likelist: [],
    getProductdetail: null
})

export const data = (state = defaultState, action) => {
    console.log(action)

    switch (action.type) {

        case "getLikelist":
            return state.set("Likelist", action.payload)
            break

        case "getProductdetail":
            return state.set("productdetail", action.payload)
            break

        default:
            return state
            break
    }
}

