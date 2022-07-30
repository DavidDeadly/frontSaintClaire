export enum createStatusE {
  specialty = 'SPECIALTY',
  patient = 'PATIENT'
}

export type CreateStatus = 'SPECIALTY' | 'PATIENT' | null;

const generateStatusApp = () => {
  let createStatus: CreateStatus;

  return {
    setStatus(newStatus: CreateStatus) {
      createStatus = newStatus;
      return createStatus;
    },
    getStatus: () => createStatus
  };
};

export default generateStatusApp;
