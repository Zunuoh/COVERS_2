import React, {useReducer, createContext, useMemo, useEffect} from 'react';
import AppReduce from '../context/AppReduce';
import {LogSymptoms} from '../components/vitalComponents/logSymptoms'


const initialState = {
    reports: [],
    symptoms:[],
    userVitals: [],
    phoneNumber: [],
  };

  export const GlobalContext = createContext(initialState);

  export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReduce, initialState);

    function removeCaseReport(id) {
        dispatch({
          type: 'REMOVE_CASE',
          payload: id,
        });
      }
    
      function makeCaseReport(report) {
        dispatch({
          type: 'MAKE_CASE',
          payload: report,
        });
      }
    
      function addPhoneNumber(phone) {
        dispatch({
          type: 'ADD_PHONE',
          payload: phone,
        });
      }
      function deletePhoneNumber(phone){
        dispatch({
          type:'DELETE_PHONE',
          payload:phone
        })
      }
      function submitSymptom(symptom) {
        dispatch({
          type: 'SUBMIT_REPORT',
          payload: symptom,
        });
      }
    
      return (
        <GlobalContext.Provider
          value={{
            reports: state.reports,
            symptoms: state.symptoms,
            phoneNumber: state.phoneNumber,
            userVitals: state.userVitals, 
            removeCaseReport,
            makeCaseReport,
            addPhoneNumber,
            deletePhoneNumber,
            submitSymptom,
          }}>
          {children}
        </GlobalContext.Provider>
      );
    };