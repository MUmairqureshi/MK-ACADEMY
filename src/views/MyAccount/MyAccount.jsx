import React, { useState } from 'react';
import { UserLayout } from '../Layout';

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState('v-pills-home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <UserLayout>
      <section className="my_account_section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a
                  className={`nav-link ${activeTab === 'v-pills-home' ? 'active show' : ''}`}
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected={activeTab === 'v-pills-home'}
                  onClick={() => handleTabClick('v-pills-home')}
                >
                  Profile
                </a>
                <a
                  className={`nav-link ${activeTab === 'v-pills-order' ? 'active show' : ''}`}
                  id="v-pills-order-tab"
                  data-toggle="pill"
                  href="#v-pills-order"
                  role="tab"
                  aria-controls="v-pills-order"
                  aria-selected={activeTab === 'v-pills-order'}
                  onClick={() => handleTabClick('v-pills-order')}
                >
                  Order
                </a>
                <a
                  className={`nav-link ${activeTab === 'v-pills-books' ? 'active show' : ''}`}
                  id="v-pills-books-tab"
                  data-toggle="pill"
                  href="#v-pills-books"
                  role="tab"
                  aria-controls="v-pills-books"
                  aria-selected={activeTab === 'v-pills-books'}
                  onClick={() => handleTabClick('v-pills-books')}
                >
                  Books
                </a>
                <a
                  className={`nav-link ${activeTab === 'v-pills-courses' ? 'active show' : ''}`}
                  id="v-pills-courses-tab"
                  data-toggle="pill"
                  href="#v-pills-courses"
                  role="tab"
                  aria-controls="v-pills-courses"
                  aria-selected={activeTab === 'v-pills-courses'}
                  onClick={() => handleTabClick('v-pills-courses')}
                >
                  Courses
                </a>
              </div>
            </div>
            <div className="col-md-10">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade ${activeTab === 'v-pills-home' ? 'active show' : ''}`}
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <h1 className="mb-3">user</h1>
                  <h4>user@gmail.com</h4>
                  <p></p>
                  <div className="actionBtn my-5">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#editProfile">Edit Profile</button>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === 'v-pills-order' ? 'active show' : ''}`}
                  id="v-pills-order"
                  role="tabpanel"
                  aria-labelledby="v-pills-order-tab"
                >
                  <h1>All Orders</h1>
                  <p></p>
                  <div className="row">
                    <div className="col-md-12 mt-5">
                      <div id="myTableOrders_wrapper" className="dataTables_wrapper no-footer">
                        <div className="dataTables_length" id="myTableOrders_length">
                          <label>Show
                            <select name="myTableOrders_length" aria-controls="myTableOrders" className="">
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select> entries
                          </label>
                        </div>
                        <div id="myTableOrders_filter" className="dataTables_filter">
                          <label>Search:
                            <input type="search" className="" placeholder="" aria-controls="myTableOrders" />
                          </label>
                        </div>
                        <table className="table dataTable no-footer" id="myTableOrders" aria-describedby="myTableOrders_info">
                          <thead>
                            <tr>
                              <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="myTableOrders" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="#: activate to sort column descending" style={{ width: '0px' }}>#</th>
                              <th scope="col" className="sorting" tabIndex="0" aria-controls="myTableOrders" rowSpan="1" colSpan="1" aria-label="Order Id: activate to sort column ascending" style={{ width: '0px' }}>Order Id</th>
                              <th scope="col" className="sorting" tabIndex="0" aria-controls="myTableOrders" rowSpan="1" colSpan="1" aria-label="Order Date: activate to sort column ascending" style={{ width: '0px' }}>Order Date</th>
                              <th scope="col" className="sorting" tabIndex="0" aria-controls="myTableOrders" rowSpan="1" colSpan="1" aria-label="Total Amount: activate to sort column ascending" style={{ width: '0px' }}>Total Amount</th>
                              <th scope="col" className="sorting" tabIndex="0" aria-controls="myTableOrders" rowSpan="1" colSpan="1" aria-label="Action: activate to sort column ascending" style={{ width: '0px' }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td valign="top" colSpan="5" className="dataTables_empty">No data available in table</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="dataTables_info" id="myTableOrders_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                        <div className="dataTables_paginate paging_simple_numbers" id="myTableOrders_paginate">
                          <a className="paginate_button previous disabled" aria-controls="myTableOrders" aria-disabled="true" role="link" data-dt-idx="previous" tabIndex="-1" id="myTableOrders_previous">Previous</a>
                          <span></span>
                          <a className="paginate_button next disabled" aria-controls="myTableOrders" aria-disabled="true" role="link" data-dt-idx="next" tabIndex="-1" id="myTableOrders_next">Next</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === 'v-pills-books' ? 'active show' : ''}`}
                  id="v-pills-books"
                  role="tabpanel"
                  aria-labelledby="v-pills-books-tab"
                >
                  <h1>All Books</h1>
                  <p></p>
                  <div className="row">
                    <div className="col-md-12 mt-5">
                      <div id="myTableBooks_wrapper" className="dataTables_wrapper no-footer">
                        <div className="dataTables_length" id="myTableBooks_length">
                          <label>Show
                            <select name="myTableBooks_length" aria-controls="myTableBooks" className="">
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select> entries
                          </label>
                        </div>
                        <div id="myTableBooks_filter" className="dataTables_filter">
                          <label>Search:
                            <input type="search" className="" placeholder="" aria-controls="myTableBooks" />
                          </label>
                        </div>
                        <table className="table dataTable no-footer" id="myTableBooks" aria-describedby="myTableBooks_info">
                          <thead>
                            <tr>
                              <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="myTableBooks" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="#: activate to sort column descending" style={{ width: '0px' }}>#</th>
                              <th scope="col" className="sorting" tabIndex="0" aria-controls="myTableBooks" rowSpan="1" colSpan="1" aria-label="Book Name: activate to sort column ascending" style={{ width: '0px' }}>Book Name</th>
                              <th scope="col" className="sorting" tabIndex="0" aria-controls="myTableBooks" rowSpan="1" colSpan="1" aria-label="Image: activate to sort column ascending" style={{ width: '0px' }}>Image</th>
                              <th scope="col" className="sorting" tabIndex="0" aria-controls="myTableBooks" rowSpan="1" colSpan="1" aria-label="Action: activate to sort column ascending" style={{ width: '0px' }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td valign="top" colSpan="4" className="dataTables_empty">No data available in table</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="dataTables_info" id="myTableBooks_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                        <div className="dataTables_paginate paging_simple_numbers" id="myTableBooks_paginate">
                          <a className="paginate_button previous disabled" aria-controls="myTableBooks" aria-disabled="true" role="link" data-dt-idx="previous" tabIndex="-1" id="myTableBooks_previous">Previous</a>
                          <span></span>
                          <a className="paginate_button next disabled" aria-controls="myTableBooks" aria-disabled="true" role="link" data-dt-idx="next" tabIndex="-1" id="myTableBooks_next">Next</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === 'v-pills-courses' ? 'active show' : ''}`}
                  id="v-pills-courses"
                  role="tabpanel"
                  aria-labelledby="v-pills-courses-tab"
                >
                  <h1>All courses</h1>
                  <p></p>
                  <div className="row">
                    <div className="col-md-12 mt-5">
                      <div id="myTableCourses_wrapper" className="dataTables_wrapper no-footer">
                        <div className="dataTables_length" id="myTableCourses_length">
                          <label>Show
                            <select name="myTableCourses_length" aria-controls="myTableCourses" className="">
                              <option value="10">10</option>
                              <option value="25">25</option>
                              <option value="50">50</option>
                              <option value="100">100</option>
                            </select> entries
                          </label>
                        </div>
                        <div id="myTableCourses_filter" className="dataTables_filter">
                          <label>Search:
                            <input type="search" className="" placeholder="" aria-controls="myTableCourses" />
                          </label>
                        </div>
                        <table className="table dataTable no-footer" id="myTableCourses" aria-describedby="myTableCourses_info">
                          <thead>
                            <tr>
                              <th scope="col" className="sorting sorting_asc" tabIndex="0" aria-controls="myTableCourses" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="#: activate to sort column descending" style={{ width: '0px' }}>#</th>
                              <th scope="col" className="sorting" tabIndex="0" aria-controls="myTableCourses" rowSpan="1" colSpan="1" aria-label="Course Name: activate to sort column ascending" style={{ width: '0px' }}>Course Name</th>
                              <th scope="col" className="sorting" tabIndex="0" aria-controls="myTableCourses" rowSpan="1" colSpan="1" aria-label="Image: activate to sort column ascending" style={{ width: '0px' }}>Image</th>
                              <th scope="col" className="sorting" tabIndex="0" aria-controls="myTableCourses" rowSpan="1" colSpan="1" aria-label="Zoom Link: activate to sort column ascending" style={{ width: '0px' }}>Zoom Link</th>
                              <th scope="col" className="sorting" tabIndex="0" aria-controls="myTableCourses" rowSpan="1" colSpan="1" aria-label="Action: activate to sort column ascending" style={{ width: '0px' }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td valign="top" colSpan="5" className="dataTables_empty">No data available in table</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="dataTables_info" id="myTableCourses_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
                        <div className="dataTables_paginate paging_simple_numbers" id="myTableCourses_paginate">
                          <a className="paginate_button previous disabled" aria-controls="myTableCourses" aria-disabled="true" role="link" data-dt-idx="previous" tabIndex="-1" id="myTableCourses_previous">Previous</a>
                          <span></span>
                          <a className="paginate_button next disabled" aria-controls="myTableCourses" aria-disabled="true" role="link" data-dt-idx="next" tabIndex="-1" id="myTableCourses_next">Next</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </UserLayout>
  );
};

export default MyAccount;
