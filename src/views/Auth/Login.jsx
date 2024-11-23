import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { UserLayout } from "../Layout";
import { SubHeader } from "../../components/SubHeader";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleNavigate = () => {
    navigate("/company-registration");
  };

  useEffect(() => {
    document.title = "MATH KNOTs | Login";
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    event.preventDefault();

    const formDataMethod = new FormData();
    formDataMethod.append("email", formData.email);
    formDataMethod.append("password", formData.password);

    console.log(formDataMethod);

    const apiUrl =
      "https://custom3.mystagingserver.site/gowri_vemuri/public/api/user-login";

    try {
      const resp = await fetch(apiUrl, {
        method: "POST",
        body: formDataMethod,
      });

      // Convert the response to JSON
      const data = await resp.json();
      console.log("response data", data);

      if (resp.ok && data.success) {
        // Save the token in localStorage
        localStorage.setItem("token", data.data.token);
        // Handle successful login, e.g., save token and redirect
        console.log("User login successful:", data);
        navigate("/");
      } else {
        // Handle error response
        console.error("Error response:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      document.querySelector(".loaderBox").classList.add("d-none");
    }
  };

  return (
    <>
      <UserLayout>
        <SubHeader title="Login FORM"></SubHeader>
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <div className="bg-light formArea p-5 rounded-4 shadow">
                <form onSubmit={handleSubmit}>
                  <CustomInput
                    label="Email"
                    required
                    id="userEmail"
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    labelClass="mainLabel"
                    inputClass="mainInput"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  <CustomInput
                    label="Password"
                    required
                    id="pass"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    labelClass="mainLabel"
                    inputClass="mainInput"
                    onChange={handleChange}
                    value={formData.password}
                  />
                  <div className="d-flex align-items-baseline justify-content-between mt-1">
                    <div className="checkBox">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        className="me-1"
                      />
                      <label htmlFor="rememberMe" className="fw-semibold">
                        Remember Me
                      </label>
                    </div>
                    <Link
                      to={"/forget-password"}
                      className="text-dark text-decoration-underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="mt-4 text-center">
                    <CustomButton
                      variant="primaryButton"
                      text="Login"
                      type="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </UserLayout>
    </>
  );
};

export default Login;
