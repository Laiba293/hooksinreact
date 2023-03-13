import React from "react";

const UseEffectAPI = () => {
  return (
    <>
      <h2>LIST OF GITHUB USERS</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          <div className="col-10 col-md-4 mt-5">
            <div className="card p-2">
              <div className="d-flex align-items-center">
                <div className="image">
                  <img src="" class="rounded" width="155" />
                </div>
                <div className="ml-3 w-100">
                  <h4 class="mb-0 mt-0 textleft">laiba</h4>
                  <span className="textleft">mern development</span>
                  <div class="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column">
                      <span class="articles">Articles</span>
                      <span class="number1">38</span>
                    </div>
                    <div class="d-flex flex-column">
                      <span class="folowers">folowers</span>
                      <span class="number2">980</span>
                    </div>
                    <div class="d-flex flex-column">
                      <span class="rating">rating</span>
                      <span class="number3">8.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffectAPI;
