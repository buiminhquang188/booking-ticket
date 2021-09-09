import React, { Component } from "react";

export default class MovieList extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="my-5">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item pr-2" role="presentation">
              <a
                className="nav-link active btn btn-secondary"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Phim Sắp Chiếu
              </a>
            </li>
            <li className="nav-item pr-2" role="presentation">
              <a
                className="nav-link btn btn-secondary"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Phim Đang Chiếu
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link btn btn-secondary"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Phim Hot Nhất
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              API Phim Sắp Chiếu
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              API Phim Đang Chiếu
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              API Phim Hot Nhất
            </div>
          </div>
        </div>
      </div>
    );
  }
}
