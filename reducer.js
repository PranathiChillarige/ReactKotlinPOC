const initialState = {
    visible:false,
    uniqueID:"",
    EventObject:{
        ID:"",
        Name:"",
        CreatedBy:"",
        Date:""
    },
    history: []
  };
  
  const reducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "SAVE":
          
        return {
          ...state,
          history: state.history.concat({ id: Math.random(), EventObject: state.EventObject }),
          visible: false
        };
        break;
  
      case "SHOW_POPUP":
        return {
          ...state,
          visible: true,
        };
        break;
        case "UNIQUE_ID":
        return {
          ...state,
          uniqueID: "ET-"+Math.floor(Math.random() * 10000)
        };
        break;
        case "HIDE_POPUP":
        return {
          ...state,
          visible: false,
        };
        break;
        case "FORM_INSIDE":
            console.log("handleChange called",action.payload.target.value);
        return {
          ...state,
          [action.payload.target.name]:action.payload.target.value
        };
        break;
        
      case "DEL_EVENT":
        return {
          ...state,
          history: newState.history.filter((el)=> el.id !== action.id )
        }
        break;
    }
    return newState;
  };
  
  export default reducer;