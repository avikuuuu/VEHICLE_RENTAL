import axios from "axios";
const urlTestimonial = process.env.REACT_APP_HOST + "/testimonial";

export const listTestimonialHome = (params) => {
  console.log("urlTestimonial",urlTestimonial)
  const urlTestimonialHome =
    urlTestimonial + `?limit=${params.limit}&page=${params.page}`;
  return axios.get(urlTestimonialHome);
};
