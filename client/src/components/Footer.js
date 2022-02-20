import React from 'react'

const Footer = () => {
  return (
    <footer className='md:flex justify-between md:mx-4 md:my-2 text-center'>
      <div className="mr-l">
        <p className="copyright_nomargin md:mx-auto">&copy; <a href="https://github.com/TannerGs">Tanner Simpkins 2022</a></p>
      </div>
      <div className='md:flex' >
          <p className='md:mr-4 text-center md:flex hidden'><a href='https://github.com/TannerGS' target='_blank' rel='noreferrer'>Github: https://github.com/TannerGS</a></p>
          <p className='md:text-center md:flex hidden' >Email: tannersimpkins@gmail.com</p>
      </div>
    </footer>
  )
}

  export default Footer;