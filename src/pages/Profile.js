import MyTransaction from "../components/MyTransaction";
import NavBar from "../components/NavBar";

export default function Profile() {
  var transactions = JSON.parse(localStorage.getItem("transactions"));
  var user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <NavBar page="profile" />
      <div className="mx-5 d-flex justify-content-center">
        {/* L */}
        <div className="me-1">
          <div className="fw-bold fs-4 primary-color-text">My Profile</div>
          <div className="d-flex mt-4 align-items-start">
            {/* L */}
            <div className="me-4">
              <img
                src="https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="profilePicture"
                style={{ height: "370px", width: "275px", objectFit: "cover" }}
              ></img>
            </div>
            {/* R */}
            <div className="text-light fw-light">
              <div className="mb-3">
                <div className="primary-color-text">Name</div>
                <div>{user.name}</div>
              </div>
              <div className="mb-3">
                <div className="primary-color-text">Email</div>
                <div>{user.email}</div>
              </div>
              <div className="mb-3">
                <div className="primary-color-text">Phone</div>
                <div>{user.phone}</div>
              </div>
              <div className="mb-3">
                <div className="primary-color-text">Gender</div>
                <div>{user.gender}</div>
              </div>
              <div>
                <div className="primary-color-text">Address</div>
                <div id="p_wrap">{user.address}</div>
              </div>
            </div>
          </div>
        </div>
        {/* R */}
        <div style={{ width: "55%" }}>
          <div className="fw-bold fs-4 primary-color-text mb-4">
            My Transaction
          </div>
          {transactions.map((transaction, index) => (
            <MyTransaction key={index} transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  );
}
