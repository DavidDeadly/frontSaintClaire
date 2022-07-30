export var createStatusE;
(function (createStatusE) {
    createStatusE["specialty"] = "SPECIALTY";
    createStatusE["patient"] = "PATIENT";
})(createStatusE || (createStatusE = {}));
const generateStatusApp = () => {
    let createStatus;
    return {
        setStatus(newStatus) {
            createStatus = newStatus;
            return createStatus;
        },
        getStatus: () => createStatus
    };
};
export default generateStatusApp;
