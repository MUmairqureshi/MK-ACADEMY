import React from "react";
import { UserLayout } from "../Layout";
import "./index.css";
import { useSelector } from "react-redux";
const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart);
  const { shipping, sub_total, total } = cartItems?.items?.summary || {};
  console.log("cartItezzzms", cartItems);
  return (
    <UserLayout>
      <div className="container pt-5 ">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mb-3">Billing Information</h1>
          </div>
          <div className="col-md-8">
            <div className="checkout_detail">
              <form method="post" id="billingForm">
                <input
                  type="hidden"
                  name="_token"
                  value="Aytoc830geigO5oqH4DkgfWEPOsPlBpgF1rLI6YF"
                  autocomplete="off"
                />{" "}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="">
                      First name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control error"
                      required=""
                      id="first_name"
                      name="first_name"
                    />
                    <span className="invalid-feedback"></span>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="">
                      Last name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control error"
                      required=""
                      id="last_name"
                      name="last_name"
                    />
                    <span className="invalid-feedback"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label for="">Company name (optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="company_name"
                      id="company_name"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label for="">
                      Country / Region <span className="text-danger">*</span>
                    </label>

                    <select
                      name="country_id"
                      className="form-control error"
                      required=""
                      id="country"
                    >
                      <option value="">Select</option>
                      <option value="1">Afghanistan</option>
                      <option value="2">Albania</option>
                      <option value="3">Algeria</option>
                      <option value="4">American Samoa</option>
                      <option value="5">Andorra</option>
                      <option value="6">Angola</option>
                      <option value="7">Anguilla</option>
                      <option value="8">Antarctica</option>
                      <option value="9">Antigua And Barbuda</option>
                      <option value="10">Argentina</option>
                      <option value="11">Armenia</option>
                      <option value="12">Aruba</option>
                      <option value="13">Australia</option>
                      <option value="14">Austria</option>
                      <option value="15">Azerbaijan</option>
                      <option value="16">Bahamas The</option>
                      <option value="17">Bahrain</option>
                      <option value="18">Bangladesh</option>
                      <option value="19">Barbados</option>
                      <option value="20">Belarus</option>
                      <option value="21">Belgium</option>
                      <option value="22">Belize</option>
                      <option value="23">Benin</option>
                      <option value="24">Bermuda</option>
                      <option value="25">Bhutan</option>
                      <option value="26">Bolivia</option>
                      <option value="27">Bosnia and Herzegovina</option>
                      <option value="28">Botswana</option>
                      <option value="29">Bouvet Island</option>
                      <option value="30">Brazil</option>
                      <option value="31">British Indian Ocean Territory</option>
                      <option value="32">Brunei</option>
                      <option value="33">Bulgaria</option>
                      <option value="34">Burkina Faso</option>
                      <option value="35">Burundi</option>
                      <option value="36">Cambodia</option>
                      <option value="37">Cameroon</option>
                      <option value="38">Canada</option>
                      <option value="39">Cape Verde</option>
                      <option value="40">Cayman Islands</option>
                      <option value="41">Central African Republic</option>
                      <option value="42">Chad</option>
                      <option value="43">Chile</option>
                      <option value="44">China</option>
                      <option value="45">Christmas Island</option>
                      <option value="46">Cocos (Keeling) Islands</option>
                      <option value="47">Colombia</option>
                      <option value="48">Comoros</option>
                      <option value="49">Cook Islands</option>
                      <option value="50">Costa Rica</option>
                      <option value="51">Cote D</option>
                      <option value="52">Croatia (Hrvatska)</option>
                      <option value="53">Cuba</option>
                      <option value="54">Cyprus</option>
                      <option value="55">Czech Republic</option>
                      <option value="56">
                        Democratic Republic Of The Congo
                      </option>
                      <option value="57">Denmark</option>
                      <option value="58">Djibouti</option>
                      <option value="59">Dominica</option>
                      <option value="60">Dominican Republic</option>
                      <option value="61">East Timor</option>
                      <option value="62">Ecuador</option>
                      <option value="63">Egypt</option>
                      <option value="64">El Salvador</option>
                      <option value="65">Equatorial Guinea</option>
                      <option value="66">Eritrea</option>
                      <option value="67">Estonia</option>
                      <option value="68">Ethiopia</option>
                      <option value="69">Falkland Islands</option>
                      <option value="70">Faroe Islands</option>
                      <option value="71">Fiji Islands</option>
                      <option value="72">Finland</option>
                      <option value="73">France</option>
                      <option value="74">French Guiana</option>
                      <option value="75">French Polynesia</option>
                      <option value="76">French Southern Territories</option>
                      <option value="77">Gabon</option>
                      <option value="78">Gambia The</option>
                      <option value="79">Georgia</option>
                      <option value="80">Germany</option>
                      <option value="81">Ghana</option>
                      <option value="82">Gibraltar</option>
                      <option value="83">Greece</option>
                      <option value="84">Greenland</option>
                      <option value="85">Grenada</option>
                      <option value="86">Guadeloupe</option>
                      <option value="87">Guam</option>
                      <option value="88">Guatemala</option>
                      <option value="89">Guernsey and Alderney</option>
                      <option value="90">Guinea</option>
                      <option value="91">Guinea-Bissau</option>
                      <option value="92">Guyana</option>
                      <option value="93">Haiti</option>
                      <option value="94">Heard and McDonald Islands</option>
                      <option value="95">Honduras</option>
                      <option value="96">Hong Kong S.A.R.</option>
                      <option value="97">Hungary</option>
                      <option value="98">Iceland</option>
                      <option value="99">India</option>
                      <option value="100">Indonesia</option>
                      <option value="101">Iran</option>
                      <option value="102">Iraq</option>
                      <option value="103">Ireland</option>
                      <option value="104">Israel</option>
                      <option value="105">Italy</option>
                      <option value="106">Jamaica</option>
                      <option value="107">Japan</option>
                      <option value="108">Jersey</option>
                      <option value="109">Jordan</option>
                      <option value="110">Kazakhstan</option>
                      <option value="111">Kenya</option>
                      <option value="112">Kiribati</option>
                      <option value="113">Korea North</option>
                      <option value="114">Korea South</option>
                      <option value="115">Kuwait</option>
                      <option value="116">Kyrgyzstan</option>
                      <option value="117">Laos</option>
                      <option value="118">Latvia</option>
                      <option value="119">Lebanon</option>
                      <option value="120">Lesotho</option>
                      <option value="121">Liberia</option>
                      <option value="122">Libya</option>
                      <option value="123">Liechtenstein</option>
                      <option value="124">Lithuania</option>
                      <option value="125">Luxembourg</option>
                      <option value="126">Macau S.A.R.</option>
                      <option value="127">Macedonia</option>
                      <option value="128">Madagascar</option>
                      <option value="129">Malawi</option>
                      <option value="130">Malaysia</option>
                      <option value="131">Maldives</option>
                      <option value="132">Mali</option>
                      <option value="133">Malta</option>
                      <option value="134">Man (Isle of)</option>
                      <option value="135">Marshall Islands</option>
                      <option value="136">Martinique</option>
                      <option value="137">Mauritania</option>
                      <option value="138">Mauritius</option>
                      <option value="139">Mayotte</option>
                      <option value="140">Mexico</option>
                      <option value="141">Micronesia</option>
                      <option value="142">Moldova</option>
                      <option value="143">Monaco</option>
                      <option value="144">Mongolia</option>
                      <option value="145">Montserrat</option>
                      <option value="146">Morocco</option>
                      <option value="147">Mozambique</option>
                      <option value="148">Myanmar</option>
                      <option value="149">Namibia</option>
                      <option value="150">Nauru</option>
                      <option value="151">Nepal</option>
                      <option value="152">Netherlands Antilles</option>
                      <option value="153">Netherlands The</option>
                      <option value="154">New Caledonia</option>
                      <option value="155">New Zealand</option>
                      <option value="156">Nicaragua</option>
                      <option value="157">Niger</option>
                      <option value="158">Nigeria</option>
                      <option value="159">Niue</option>
                      <option value="160">Norfolk Island</option>
                      <option value="161">Northern Mariana Islands</option>
                      <option value="162">Norway</option>
                      <option value="163">Oman</option>
                      <option value="164">Pakistan</option>
                      <option value="165">Palau</option>
                      <option value="166">
                        Palestinian Territory Occupied
                      </option>
                      <option value="167">Panama</option>
                      <option value="168">Papua new Guinea</option>
                      <option value="169">Paraguay</option>
                      <option value="170">Peru</option>
                      <option value="171">Philippines</option>
                      <option value="172">Pitcairn Island</option>
                      <option value="173">Poland</option>
                      <option value="174">Portugal</option>
                      <option value="175">Puerto Rico</option>
                      <option value="176">Qatar</option>
                      <option value="177">Republic Of The Congo</option>
                      <option value="178">Reunion</option>
                      <option value="179">Romania</option>
                      <option value="180">Russia</option>
                      <option value="181">Rwanda</option>
                      <option value="182">Saint Helena</option>
                      <option value="183">Saint Kitts And Nevis</option>
                      <option value="184">Saint Lucia</option>
                      <option value="185">Saint Pierre and Miquelon</option>
                      <option value="186">
                        Saint Vincent And The Grenadines
                      </option>
                      <option value="187">Samoa</option>
                      <option value="188">San Marino</option>
                      <option value="189">Sao Tome and Principe</option>
                      <option value="190">Saudi Arabia</option>
                      <option value="191">Senegal</option>
                      <option value="192">Serbia</option>
                      <option value="193">Seychelles</option>
                      <option value="194">Sierra Leone</option>
                      <option value="195">Singapore</option>
                      <option value="196">Slovakia</option>
                      <option value="197">Slovenia</option>
                      <option value="198">Smaller Territories of the UK</option>
                      <option value="199">Solomon Islands</option>
                      <option value="200">Somalia</option>
                      <option value="201">South Africa</option>
                      <option value="202">South Georgia</option>
                      <option value="203">South Sudan</option>
                      <option value="204">Spain</option>
                      <option value="205">Sri Lanka</option>
                      <option value="206">Sudan</option>
                      <option value="207">Suriname</option>
                      <option value="208">
                        Svalbard And Jan Mayen Islands
                      </option>
                      <option value="209">Swaziland</option>
                      <option value="210">Sweden</option>
                      <option value="211">Switzerland</option>
                      <option value="212">Syria</option>
                      <option value="213">Taiwan</option>
                      <option value="214">Tajikistan</option>
                      <option value="215">Tanzania</option>
                      <option value="216">Thailand</option>
                      <option value="217">Togo</option>
                      <option value="218">Tokelau</option>
                      <option value="219">Tonga</option>
                      <option value="220">Trinidad And Tobago</option>
                      <option value="221">Tunisia</option>
                      <option value="222">Turkey</option>
                      <option value="223">Turkmenistan</option>
                      <option value="224">Turks And Caicos Islands</option>
                      <option value="225">Tuvalu</option>
                      <option value="226">Uganda</option>
                      <option value="227">Ukraine</option>
                      <option value="228">United Arab Emirates</option>
                      <option value="229">United Kingdom</option>
                      <option value="230">United States</option>
                      <option value="231">
                        United States Minor Outlying Islands
                      </option>
                      <option value="232">Uruguay</option>
                      <option value="233">Uzbekistan</option>
                      <option value="234">Vanuatu</option>
                      <option value="235">Vatican City State (Holy See)</option>
                      <option value="236">Venezuela</option>
                      <option value="237">Vietnam</option>
                      <option value="238">Virgin Islands (British)</option>
                      <option value="239">Virgin Islands (US)</option>
                      <option value="240">Wallis And Futuna Islands</option>
                      <option value="241">Western Sahara</option>
                      <option value="242">Yemen</option>
                      <option value="243">Yugoslavia</option>
                      <option value="244">Zambia</option>
                      <option value="245">Zimbabwe</option>
                    </select>
                    <span className="invalid-feedback"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label for="">
                      Street address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="address1"
                      required=""
                      className="form-control error"
                      placeholder="House number and street name"
                      id="address1"
                    />
                    <span className="invalid-feedback"></span>

                    <input
                      type="text"
                      className="form-control"
                      name="address2"
                      placeholder="Apartment, suite, unit, etc. (optional)"
                      id="address2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label for="">
                      Town / City <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control error"
                      required=""
                      name="town"
                      id="town"
                    />
                    <span className="invalid-feedback"></span>
                  </div>

                  <div className="col mb-3">
                    <label for="">
                      State / County <span className="text-danger">*</span>
                    </label>

                    <select
                      name="state_id"
                      className="form-control error"
                      required=""
                      id="state"
                    >
                      <option value="">Select</option>
                    </select>
                    <span className="invalid-feedback"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label for="">
                      Postcode / ZIP <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control error"
                      required=""
                      name="postcode"
                      id="postcode"
                    />
                    <span className="invalid-feedback"></span>
                  </div>

                  <div className="col mb-3">
                    <label for="">
                      Phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control error"
                      required=""
                      name="phone"
                      id="phone"
                    />
                    <span className="invalid-feedback"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col mb-3">
                    <label for="">
                      Email address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control error"
                      required=""
                      name="email"
                      id="email"
                    />
                    <span className="invalid-feedback"></span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label for="">Order notes (optional)</label>
                    <textarea
                      cols="30"
                      className="form-control"
                      rows="5"
                      name="order_note"
                      id="order_note"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-4">
            <div className="summary_main">
              <div className="product_summary" id="cart_id_53">
                <div className="sum_content d-flex gap-20">
                  <div>
                    <img
                      src="https://custom3.mystagingserver.site/gowri_vemuri/public/images/bookimages/1701357800.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h4>Dr. Alexanne Boyer</h4>
                    <span> X 1</span>
                    <p className="getPrice">$32.99</p>
                    <input type="hidden" value="1" />
                  </div>
                </div>
                <div className="product_delete_btn">
                  <span className="delete_button" data-qty="1" data-id="53">
                    <i className="fa-solid fa-xmark"></i>
                  </span>
                </div>
              </div>

              <h2>Summary</h2>
              <div className="summary_heading_price">
                <p>Sub Total</p>
                <p className="total_amount" id="product_price">
                  ${sub_total}
                </p>
              </div>

              <div className="summary_heading_price">
                <p>Shipping</p>
                <p>${shipping}</p>
              </div>

              <div
                className="summary_heading_price"
                //   style="border-top:1px solid #333"
              >
                <div>
                  <h6>Total amount </h6>
                  <h6>(including VAT)</h6>
                </div>
                <h6 className="total_amount">${total}</h6>
              </div>

              <a href="https://custom3.mystagingserver.site/gowri_vemuri/public/user-login">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default CheckOut;
