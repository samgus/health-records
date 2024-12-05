import React, { createContext, useState } from 'react';

export const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  const [patientsList, setPatientsList] = useState([
    { name: 'Daniel Radcliff', date: 'Today' },
    { name: 'Samuel L. Jackson', date: 'Oct 20, 2024' },
  ]);

  return (
    <PatientsContext.Provider value={{ patientsList, setPatientsList }}>
      {children}
    </PatientsContext.Provider>
  );
};
