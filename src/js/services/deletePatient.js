var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const deletePatient = (id) => fetch(`http://localhost:8080/patient/${id}`, { method: 'DELETE' })
    .then((r) => __awaiter(void 0, void 0, void 0, function* () {
    const json = yield r.json();
    if (r.status >= 400)
        throw new Error(json.msg);
    return json;
}))
    .catch((err) => {
    alert(err);
    console.error(err);
});
export default deletePatient;
