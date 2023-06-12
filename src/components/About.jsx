import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className='text-primary fw-bold mb-4'>About Us</h1>
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora molestias beatae in natus obcaecati perferendis iusto suscipit dignissimos rem ipsum veritatis ab incidunt, amet sequi, voluptates laudantium neque? Sapiente, veniam.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae nostrum doloribus expedita atque, quasi, dolores est minus ipsa iste veritatis tenetur quam. Libero unde nulla assumenda quas voluptates omnis exercitationem.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam dolorum unde neque eum, ea consectetur temporibus vero est ab quos eveniet. Voluptatibus ad distinctio quae facilis asperiores. Labore, odit dolor!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sapiente odio illum dolore facere ab, voluptas saepe natus totam vel minus, voluptatem quaerat iusto, necessitatibus nisi dolor tenetur voluptatibus cum.
          </p>
          <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src="/assets/about/Image.png" alt="About Us" height="500px" width="500px" />
        </div>
      </div>
    </div>
    </>
  )
}

export default About