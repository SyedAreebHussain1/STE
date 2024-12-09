// import React,{useEffect} from "react"
// // import "./testimonials.css"
// import "../../Testimonials/testimonials.css"
// import iconns from '../../../images/iconn.png'
// import AOS from "aos";
// import "aos/dist/aos.css";
// const ReportTestimonial = () => {
//     const testImonialsHeading = 'Testimonials'
//     const testImonialsText = "There’s nothing better than seeing what happy clients have to say about our services!"

//     const items = [
//         {
//             key: "1",
//             heading: "David Gilmore",
//             work: "developer",
//             starIcon: <> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></>,
//             img: iconns,
//             content:
//                 "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
//         },
//         {
//             key: "2",
//             heading: "Susan Barkley",
//             work: "happy seller",
//             starIcon: <> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></>,

//             img: iconns,
//             content:
//                 "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
//         },
//         {
//             key: "3",
//             heading: "Lisa Simpson",
//             work: "happy buyer",
//             starIcon: <> <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i> </>,
//             img: iconns,
//             content:
//                 "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
//         }
//     ];
//     useEffect(() => {
//         AOS.init({
//             duration: 1000,
//         });
//     }, [])
//     return (
//         <div className=""
//             data-aos="fade-up"
//             style={{ border: '', marginBottom: '3%', marginLeft: "", marginRight: '' }}>
//             <div className="text-align-center">
//                 <div className=" bold text-skyblue font-size_1_7rem">{testImonialsHeading}</div>
//                 <div className="completeDesktopText bold" style={{ fontSize: '1rem' }}>{testImonialsText}</div>
//             </div>

//             <div className="row ltn__custom-gutter--- justify-content-center go-top" style={{ border: '', marginBottom: '', marginLeft: "1%", marginRight: '1%' }}>
//                 {
//                     items.map((itemv, i) => {
//                         return (
//                             <div key={i} className="col-lg-4 col-sm-8 col-12">
//                                 <div
//                                     className="ltn__feature-item bg-white box-shadow-1  features_v1_height"
//                                 >
//                                     <div className="ltn__feature-info">
//                                         <div className="flexs">
//                                             <img src={iconns} className="height-2_3rem" />
//                                             <div className=" marginTop--6px"><div className="bold font-size-L">{itemv.heading}</div><div className="marginTop--10px">{itemv.work}</div></div>
//                                         </div>
//                                         <div className="height-100px">{itemv.content}</div>
//                                     </div>
//                                     <div className="text-skyblue">{itemv.starIcon}</div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
// export default ReportTestimonial

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import "../../Testimonials/testimonials.css"

class ReportTestimonial extends Component {
	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <div className=" ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-65"
		 data-aos="fade-up"
		// data-bs-bg={publicUrl+"assets/img/bg/23.jpg"}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center---" style={{textAlign:"center"}}>
							<h6 className="section-subtitle section-subtitle-2--- bold text-skyblue font-size_1_7rem">Testimonial</h6>
							<h1 className="completeDesktopText bold " style={{ fontSize: '1rem',marginLeft:"auto",marginRight:"auto" }}>There’s nothing better than seeing what happy clients have to say about our services!</h1>
						</div>
					</div>
				</div>
				<div className="row ltn__testimonial-slider-6-active slick-arrow-3">
					<div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
							<div className="ltn__testimoni-info">
								<div className="ltn__testimoni-author-ratting">
									<div className="ltn__testimoni-info-inner">
										<div className="ltn__testimoni-img">
											<img src={publicUrl + "assets/img/testimonial/1.jpg"} alt="#" />
										</div>
										<div className="ltn__testimoni-name-designation">
											<h5>Jacob William</h5>
											<label>Selling Agents</label>
										</div>
									</div>
									<div className="ltn__testimoni-rating">
										<div className="product-ratting">
											<ul>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<p>
									Precious ipsum dolor sit amet
									consectetur adipisicing elit, sed dos
									mod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad min
									veniam, quis nostrud Precious ips
									um dolor sit amet, consecte</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
							<div className="ltn__testimoni-info">
								<div className="ltn__testimoni-author-ratting">
									<div className="ltn__testimoni-info-inner">
										<div className="ltn__testimoni-img">
											<img src={publicUrl + "assets/img/testimonial/2.jpg"} alt="#" />
										</div>
										<div className="ltn__testimoni-name-designation">
											<h5>Kelian Anderson</h5>
											<label>Selling Agents</label>
										</div>
									</div>
									<div className="ltn__testimoni-rating">
										<div className="product-ratting">
											<ul>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<p>
									Precious ipsum dolor sit amet
									consectetur adipisicing elit, sed dos
									mod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad min
									veniam, quis nostrud Precious ips
									um dolor sit amet, consecte</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
							<div className="ltn__testimoni-info">
								<div className="ltn__testimoni-author-ratting">
									<div className="ltn__testimoni-info-inner">
										<div className="ltn__testimoni-img">
											<img src={publicUrl + "assets/img/testimonial/3.jpg"} alt="#" />
										</div>
										<div className="ltn__testimoni-name-designation">
											<h5>Adam Joseph</h5>
											<label>Selling Agents</label>
										</div>
									</div>
									<div className="ltn__testimoni-rating">
										<div className="product-ratting">
											<ul>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<p>
									Precious ipsum dolor sit amet
									consectetur adipisicing elit, sed dos
									mod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad min
									veniam, quis nostrud Precious ips
									um dolor sit amet, consecte</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="ltn__testimonial-item ltn__testimonial-item-7 ltn__testimonial-item-8">
							<div className="ltn__testimoni-info">
								<div className="ltn__testimoni-author-ratting">
									<div className="ltn__testimoni-info-inner">
										<div className="ltn__testimoni-img">
											<img src={publicUrl + "assets/img/testimonial/4.jpg"} alt="#" />
										</div>
										<div className="ltn__testimoni-name-designation">
											<h5>James Carter</h5>
											<label>Selling Agents</label>
										</div>
									</div>
									<div className="ltn__testimoni-rating">
										<div className="product-ratting">
											<ul>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
											</ul>
										</div>
									</div>
								</div>
								<p>
									Precious ipsum dolor sit amet
									consectetur adipisicing elit, sed dos
									mod tempor incididunt ut labore et
									dolore magna aliqua. Ut enim ad min
									veniam, quis nostrud Precious ips
									um dolor sit amet, consecte</p>
							</div>
						</div>
					</div>
					{/*  */}
				</div>
			</div>
		</div>

	}
}

export default ReportTestimonial
