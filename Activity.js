import React from 'react';
import { render } from '@testing-library/react';
import {Button,Table,Form,Container,Row,Col,Modal} from 'react-bootstrap';
import axios from 'axios';
import { connect } from "react-redux";

class ActivityComp extends React.Component{
    constructor() {
        super();
        
    }
    componentDidMount(){
        axios.get(`https://restcountries.eu/rest/v2/all`)
          .then(res => {
            this.props.handleAllCountriesInital(res.data);

          })
        
       
        
    }
    
    
    render() {
        return(
            <React.Fragment>
           <Button variant="primary" type="button" onClick={this.props.handleAllCountries}>Get All Countries</Button>
           <br/>
           <br/>
           <label >Choose a Region:</label>
        <select onChange={this.props.handleCountriesByRegion} name="sortfilter">
           <option value=" ">Select a Region</option>
           { this.props.AllCountries.map(Country => (  
            <option key={Math.random()} value={Country.region}>
             {Country.region}
            </option>
          ))}
        </select>
                
                    {this.props.GetByRegion ? <ul>
        { this.props.countries.map(Country => <li>{Country}</li>)}
      </ul>:<p></p>}
      {this.props.GetAll ?
      
             <Table striped bordered hover >
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>CIOC</th>
                            <th>CAPITAL</th>
                            <th>CURRENCY NAME</th>
                            <th>LANGUAGE NAME</th>
                            <th>REGION</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    { this.props.AllCountries.map(Country => (
                        <tr
                        key={Math.random()}>
                            <td>{Country.name}</td>
                            <td>{Country.cioc}</td>
                            <td>{Country.capital}</td>
                            <td>{Country.currencies.map(el=> <p key={Math.random()}>{el.name}</p>)}</td>
                            <td>{Country.languages.map(el=> <p key={Math.random()}>{el.name}</p>)}</td>
                            <td>{Country.region}</td>
                               
                        </tr>
                         ))}
                    </tbody>
                    </Table> 
                    :<p></p>}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
       
        AllCountries:state.AllCountries,
        countries:state.countries,
        GetAll:state.GetAll,
        GetByRegion:state.GetByRegion
    
    }
  };
  
  const mapDispachToProps = dispatch => {
    return {
        handleAllCountries: () => dispatch({ type: "All_COUNTRIES", payload:"1" }),
        handleAllCountriesInital: (e) => dispatch({ type: "All_COUNTRIES_INITIAL", payload:e }),
        handleCountriesByRegion: (e) => dispatch({ type: "COUNTRY_BY_REGION", payload:e }),
     
    };
  };
  export default connect(
    mapStateToProps,
    mapDispachToProps
  )(ActivityComp);


