import React, { useState } from "react";
import img1 from "../../components/images/inventory.jpg";
import img2 from "../../components/images/staff.jpg";
import img3 from "../../components/images/commision.jpg";
import img4 from "../../components/images/calculator.jpg";

const MoreVideos = () => {
  const inventory = (
    <div style={{ marginTop: "2%" }}>
      <h4 style={{ color: "#27A3A3" }}>Inventory Management :</h4>
      <p>
        The inventory management option on our app enables you to:
        <ul>
          <li>
            Add a project with the specified information; including name of the
            builder and project, its location, categories, sizes, prices and,
            most importantly, if its NOC has been approved. A project can also
            be eliminated.
          </li>

          <li>
            Give staff members instructions while assigning or removing
            projects.
          </li>

          <li>
            Eliminate a property from inventory when sold out, figure out the
            commission and revenue, and choose whether to accept a full cash
            payment or a down payment.
          </li>
        </ul>
      </p>
    </div>
  );
  const staff = (
    <div style={{ marginTop: "2%" }}>
      <h4 style={{ color: "#27A3A3" }}>STAFF MANAGEMENT :</h4>
      <p>
        <ul>
          <li>
            The staff management feature has 3 kinds of accesses. The agency
            owner (super admin) will have access to everything. He/She will be
            able to add, delete, or update staff, communicate with their team,
            and monitor all commission and revenue including any leads
            generated. The manager(admin), on the other hand, has access to
            their team, monitoring their commissions and revenue generated from
            each. Additionally, they can add or distribute leads among the
            employees, and can contact the agency owner and staff. The staff has
            access to add leads, inspect inventory, and add booking requests for
            projects, but they can communicate only with the manager.
          </li>

          <li>
            New employees can be added with their names, phone numbers, emails,
            CNIC, addresses, and salaries. They can also be deleted, when
            needed.
          </li>

          <li>
            To share media or inventory, managers and admins can communicate via
            chat.
          </li>
          <li>
            Acquire monthly reports on the agency's overall sales. This includes
            sales for each project, sales by each manager and staff, total
            income brought in, and total profit earned.
          </li>
        </ul>
      </p>
    </div>
  );
  const commissionmanagement = (
    <div style={{ marginTop: "2%" }}>
      <h4 style={{ color: "#27A3A3" }}>COMISSION MANAGEMENT :</h4>
      <p>
        The commission management option on our app enables you to:
        <ul>
          <li>
            Set manager's and staff's commission rates according to each
            category's sales.
          </li>

          <li>
            Get to know your company’s overall profit. It can be sought by
            subtracting the amount of commission that is paid out to the staff
            and managers from the total amount of commission earned from each
            sale.
          </li>

          <li>
            Keep records of the commissions paid to the agents as well as the
            property they sold. This can also let you know the amount of money
            each employee brings in.
          </li>
        </ul>
      </p>
    </div>
  );
  const paymentplan = (
    <div style={{ marginTop: "2%" }}>
      <h4 style={{ color: "#27A3A3" }}>PAYMENT PLAN CREATOR :</h4>
      <p>
        The payment plan creator on our app enables you to:
        <ul>
          <li>
            Create your payment plan by adding the following information to your
            payment schedule: client's name, project's name, its logo, the
            agency's name, the overall cost of the order, and your preferred %
            of down payment. You can also add the plot number, the total number
            of payment months, the possession value, and the discount with a
            choice of where to indicate the discount adjustment.
          </li>

          <li>This payment schedule can be downloaded in a PDF format.</li>
        </ul>
      </p>
    </div>
  );
  const data = [
    {
      key: 1,
      video: (
        <div
          style={{ width: "100%", height: "274px" }}
          className="ltn__video-img ltn__animation-pulse1"
        >
          <img
            style={{ width: "100%", height: "274px", objectFit: "cover" }}
            src={img1}
            alt="video popup bg image"
          />
          <a
            className="ltn__video-icon-2 ltn__video-icon-2-border---"
            href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
            data-rel="lightcase:myCollection"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      ),
      content: inventory,
    },
    {
      key: 2,
      video: (
        <div
          style={{ width: "100%", height: "274px" }}
          className="ltn__video-img ltn__animation-pulse1"
        >
          <img
            style={{ width: "100%", height: "274px", objectFit: "cover" }}
            src={img2}
            alt="video popup bg image"
          />
          <a
            className="ltn__video-icon-2 ltn__video-icon-2-border---"
            href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
            data-rel="lightcase:myCollection"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      ),
      content: staff,
    },
    {
      key: 3,
      video: (
        <div
          style={{ width: "100%", height: "274px" }}
          className="ltn__video-img ltn__animation-pulse1"
        >
          <img
            style={{ width: "100%", height: "274px", objectFit: "cover" }}
            src={img3}
            alt="video popup bg image"
          />
          <a
            className="ltn__video-icon-2 ltn__video-icon-2-border---"
            href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
            data-rel="lightcase:myCollection"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      ),
      content: commissionmanagement,
    },
    {
      key: 4,
      video: (
        <div
          style={{ width: "100%", height: "274px" }}
          className="ltn__video-img ltn__animation-pulse1"
        >
          <img
            style={{ width: "100%", height: "274px", objectFit: "cover" }}
            src={img4}
            alt="video popup bg image"
          />
          <a
            className="ltn__video-icon-2 ltn__video-icon-2-border---"
            href="https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0"
            data-rel="lightcase:myCollection"
          >
            <i className="fa fa-play" />
          </a>
        </div>
      ),
      content: paymentplan,
    },
  ];
  const [active, setActive] = useState(0);
  const change = (value) => {
    if (value === 0) {
      setActive(0);
    } else if (value === 1) {
      setActive(1);
    } else if (value === 2) {
      setActive(2);
    } else if (value === 3) {
      setActive(3);
    } else if (value === 4) {
      setActive(4);
    } else if (value === 5) {
      setActive(5);
    } else if (value === 6) {
      setActive(6);
    } else if (value === 7) {
      setActive(7);
    }
  };
  return (
    <>
      <div
        className="para-service"
        style={{ marginTop: "-5%", marginLeft: "5%", marginRight: "5%" }}
      >
        <p style={{ color: "#27A3A3", fontSize: "20px" }}>
          Property Wallet is pleased to offer you a platform which will
          contribute to your property business success through fostering
          collaboration between agents. All our services are free of cost and
          available at all hours so you never miss an update about your
          business. With this app, you won't need to carry along your hefty
          documents any more. Property Wallet will keep you informed about your
          business operations and team. Avail our services to manage your
          property business at your convenience.
        </p>
      </div>
      {/* Second section */}
      <div
        style={{
          marginLeft: "5%",
          marginRight: "8%",
          marginBottom: "2%",
          marginTop: "3%",
        }}
      >
        <div className="row">
          <div className="col-lg-6">
            {/* <img
              src={data[active].img}
              style={{ width: "100%", height: "274px", objectFit: "cover" }}
            /> */}
            {data[active].video}
          </div>
          <div className="col-lg-6 services_content">
            <div
              onClick={() => change(0)}
              className="row hovservice"
              style={
                active === 0
                  ? { backgroundColor: "#27A3A3", padding: "10px" }
                  : { backgroundColor: "#a6a8ab", padding: "10px" }
              }
            >
              <div className="col-10 mt-1">
                <span style={{ color: "white", fontWeight: "800" }}>
                  INVENTORY MANAGEMENT
                </span>
              </div>
              <div className="col-2 mt-1">
                <i
                  style={{
                    float: "right",
                    color: "white",
                    fontSize: "20px",
                  }}
                  className="flaticon-hospital"
                />
              </div>
            </div>
            <div
              onClick={() => change(1)}
              className="row hovservice"
              style={
                active === 1
                  ? {
                      backgroundColor: "#27A3A3",
                      padding: "10px",
                      marginTop: "2%",
                    }
                  : {
                      backgroundColor: "#a6a8ab",
                      padding: "10px",
                      marginTop: "2%",
                    }
              }
            >
              <div className="col-10 mt-1">
                <span style={{ color: "white", fontWeight: "800" }}>
                  STAFF MANAGEMENT
                </span>
              </div>
              <div className="col-2 mt-1">
                <i
                  style={{
                    color: "white",
                    float: "right",
                    fontSize: "20px",
                  }}
                  className="flaticon-hospital"
                />
              </div>
            </div>
            <div
              onClick={() => change(2)}
              className="row hovservice"
              style={
                active === 2
                  ? {
                      backgroundColor: "#27A3A3",
                      padding: "10px",
                      marginTop: "2%",
                    }
                  : {
                      backgroundColor: "#a6a8ab",
                      padding: "10px",
                      marginTop: "2%",
                    }
              }
            >
              <div className="col-10 mt-1">
                <span style={{ color: "white", fontWeight: "800" }}>
                  COMMISSION MANAGEMENT
                </span>
              </div>
              <div className="col-2 mt-1">
                <i
                  style={{
                    color: "white",
                    float: "right",
                    fontSize: "20px",
                  }}
                  className="flaticon-hospital"
                />
              </div>
            </div>
            <div
              onClick={() => change(3)}
              className="row hovservice"
              style={
                active === 3
                  ? {
                      backgroundColor: "#27A3A3",
                      padding: "10px",
                      marginTop: "2%",
                    }
                  : {
                      backgroundColor: "#a6a8ab",
                      padding: "10px",
                      marginTop: "2%",
                    }
              }
            >
              <div className="col-10 mt-1">
                <span style={{ color: "white", fontWeight: "800" }}>
                  PAYMENT PLAN CREATOR
                </span>
              </div>
              <div className="col-2 mt-1">
                <i
                  style={{
                    color: "white",
                    float: "right",
                    fontSize: "20px",
                  }}
                  className="flaticon-hospital"
                />
              </div>
            </div>
          </div>
        </div>
        {/* CONTENT */}
        {data[active].content}
      </div>
    </>
  );
};

export default MoreVideos;
