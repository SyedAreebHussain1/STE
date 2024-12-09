import axios, { AxiosResponse } from "axios";
import { Authorization } from "../../../utils/storage";
import { ENDPOINT } from "../../../utils/endpoints";
import {
  resumeScraping,
  resumeScrapingSuccess,
  resumeScrapingFailure,
} from "../../slices/Recruitment/ResumeScraping/ResumeScrapingSlice";
interface ApiResponse<T> {
  data: any;
  status: number;
  statusText: string;
}
export const resumeScrapingApi = async <T>(dispatch: any, payload: any) => {
  try {
    resumeScraping(dispatch);
    const response = await axios.post(`${ENDPOINT.recruitment.resume_scraping}`, payload);
   dispatch( resumeScrapingSuccess(response.data));  
  } catch (error) {
    resumeScrapingFailure(error);
  }
};
