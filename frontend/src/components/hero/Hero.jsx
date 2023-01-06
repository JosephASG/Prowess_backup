import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='landing'>
        {/* <div className="slider-col">
            <img src="./assets/images/others/slider.png" alt="" />
        </div>
        <div className="slider-col">
            <h2>The largest online market in the Balkans with the largest number of products and sellers.</h2>
            <Link to="/shop"><FontAwesomeIcon icon={faEye} /> View More</Link>
        </div> */}

        <div class="ctn-wrapper-landing"  >
                <div class="ctn-land-hero">
                    <div class="ctn-text-1">
                        <span>Productos agrícolas <span class="text-percent">100%</span> naturales y frescos</span>
                    </div>
                    <div class="ctn-text-2">
                        <span>De la mata a la olla 🍎</span>
                    </div>
                    <Link to="/shop">
                      <div class="ctn-btn-buy">
                        <FontAwesomeIcon icon={faEye} /><span>Comprar ahora</span>
                      </div>
                    </Link>
                </div>
                 <div class="ctn-images-hero">
                    <div class="ctn-img-bg-1">
                        <img class="first" src="./assets/images/others/corn.png" alt="" />
                    </div>
                    <div class="ctn-img-bg-2">
                        <img class="second" src="./assets/images/others/broco.png" alt="" />
                    </div>
                    <div class="ctn-img-bg-3">
                        <img class="third" src="./assets/images/others/horia.png" alt="" />
                    </div>
                    <div class="ctn-img-bg-4">
                        <img class="fourth" src="./assets/images/others/tomate_2.png" alt="" />
                    </div>
                    <svg class="rotating-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 771 771"><defs><filter x="-3.5%" y="-3.5%" width="107%" height="107%" filterUnits="objectBoundingBox" id="filter-bm-58z8e9r-1"><feGaussianBlur stdDeviation="9" in="SourceGraphic"></feGaussianBlur></filter></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity=".65"><g id="Home" transform="translate(-526 -192)" fill="#FFF"><path id="Star" filter="url(#filter-bm-58z8e9r-1)" d="m911.5 701.893-21.167 252.513 7.239-253.296-49.306 248.556 35.554-250.892-76.825 241.472 63.421-245.334-103.379 231.353 90.491-236.691-128.632 218.323 116.423-225.071-152.267 202.548 140.89-210.62L659.954 858.98l163.587-193.521L630.02 829.046l184.226-173.988-210.62 140.89 202.548-152.267-225.071 116.423 218.323-128.632-236.691 90.491 231.353-103.379-245.334 63.421 241.472-76.825-250.892 35.554 248.556-49.306-253.296 7.239L787.107 577.5l-252.513-21.167 253.296 7.239-248.556-49.306 250.892 35.554-241.472-76.825 245.334 63.421-231.353-103.379 236.691 90.491-218.323-128.632 225.071 116.423-202.548-152.267 210.62 140.89L630.02 325.954l193.521 163.587L659.954 296.02l173.988 184.226-140.89-210.62 152.267 202.548-116.423-225.071 128.632 218.323-90.491-236.691 103.379 231.353-63.421-245.334 76.825 241.472-35.554-250.892 49.306 248.556-7.239-253.296L911.5 453.107l21.167-252.513-7.239 253.296 49.306-248.556-35.554 250.892 76.825-241.472-63.421 245.334 103.379-231.353-90.491 236.691 128.632-218.323-116.423 225.071 152.267-202.548-140.89 210.62 173.988-184.226-163.587 193.521 193.521-163.587-184.226 173.988 210.62-140.89-202.548 152.267 225.071-116.423-218.323 128.632 236.691-90.491-231.353 103.379 245.334-63.421-241.472 76.825 250.892-35.554-248.556 49.306 253.296-7.239-252.513 21.167 252.513 21.167-253.296-7.239 248.556 49.306-250.892-35.554 241.472 76.825-245.334-63.421 231.353 103.379-236.691-90.491 218.323 128.632-225.071-116.423 202.548 152.267-210.62-140.89 184.226 173.988-193.521-163.587 163.587 193.521-173.988-184.226 140.89 210.62-152.267-202.548 116.423 225.071-128.632-218.323 90.491 236.691-103.379-231.353 63.421 245.334-76.825-241.472 35.554 250.892-49.306-248.556 7.239 253.296z"></path></g></g></svg>
                </div>
            </div>

    </div>
  )
}

export default Hero
