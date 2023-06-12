import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md 5 d-flex justify-content-center">
            <img src="/assets/contact/Image.png" alt="Contact Us" height="400px" width="400px" />
          </div>
          <div className="col-md-6">
            <form>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Full Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" placeholder='John Lennon' aria-describedby="emailHelp"/>
                    <div id="exampleForm" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder='johnlennon@example' aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Text Area</label>
                  <textarea type="textArea" class="form-control" id="exampleInputEmail1" rows="5" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text"></div>
                </div>
                <button type="submit" class="btn btn-outline-primary">Send Message</button>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact