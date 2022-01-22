import axios from 'axios'

axios.defaults.baseURL = '/api/';
// axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');

export const uploadToCloudinary = (file) => {
    const preset = 'fy5uiwst'
    const fd = new FormData()
    fd.append('upload_preset', preset)
    fd.append('file', file)
    const data = axios.post('https://api.cloudinary.com/v1_1/de71dgq9l/upload', fd)
    console.log(data)
    return data
}

const APPLICANT_API_BASE_URL = '/api/applicants'

export const getApplicants = async () => {
    return axios.get(APPLICANT_API_BASE_URL);

}

// const APPLICANT_DELETE_URL = 'http://localhost:8080/api/applicant/'
// export const deleteApplicant = async () => {
//     return axios.delete(APPLICANT_DELETE_URL);
// }
// export default ApplicantService



