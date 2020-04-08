
import axios from 'axios';
const initialState = {
    visible:false,
    visibleEdit:false,
    uniqueID:"",
    EventObject:{
        ID:"",
        Name:"",
        CreatedBy:"",
        Date:""
    },
    history: [],
    AllCountries: [],
    countries:[],
    GetAll:false,
    GetByRegion:false

  };
  
  const reducer = (state = initialState, action) => {
    const newState = { ...state };
  
    switch (action.type) {
      case "SAVE":
        axios.post(`http://localhost:8081/saveEvent`,state.EventObject)
        .then(res => {
          console.log(res.data);
        })
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
        case "EDIT":
          axios.post(`http://localhost:8081/editEvent/${state.EventObject.ID}`,state.EventObject)
        .then(res => {
          console.log(res.data);
        })
          return {
            ...state,
            visibleEdit: true,
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
        case "All_COUNTRIES":
          return {
            ...state,
            GetAll:true,
            GetByRegion:false
          };
          case "COUNTRY_BY_REGION":
            console.log("in region");
            var re = [action.payload.target.value]
        axios.get(`https://restcountries.eu/rest/v2/all/${re}`)
        .then(res => {
          const countries = res.data;
          this.setState({ countries });
        })
       
            return {
              ...state,
              GetAll:false,
              GetByRegion:true
            };
        break;
        case "All_COUNTRIES_INITIAL":
          console.log("in Initial")
            return {
              ...state,
              AllCountries:action.payload
             
            };
        break;
        case "FORM_INSIDE":
        var name=state.EventObject[action.payload.target.name]
            console.log("name",name)
            console.log("value",action.payload.target.value)
            console.log("qqd",state.EventObject.ID)
        return {
          ...state,
          // :action.payload.target.value
        };
        break;
        
      case "DEL_EVENT":
        axios.post(`http://localhost:8081/deleteEvent/${state.EventObject.ID}`)
        .then(res => {
          console.log(res.data);
        })
        return {
          ...state,
          history: newState.history.filter((el)=> el.id !== action.id )
        }
        break;
    }
    return newState;
  };
  
  export default reducer;
