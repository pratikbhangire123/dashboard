import { orders } from "../data.json";
import { CardContainer, H3 } from "./index";

export default function RecentOrders() {
  return (
    <CardContainer aria-label="recent-orders-card">
      <H3>Recent Orders</H3>

      <div className="table-responsive mt-3">
        <table className="table table-hover table-no-divider-last">
          <thead>
            <tr>
              <th>Customer</th>

              <th>Order No.</th>

              <th>Amount</th>

              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.orderNo}>
                <td className="d-flex py-3 align-items-center gap-2">
                  <img
                    src={order.customerPhoto}
                    alt={`${order.customerName}'s photo`}
                    width={25}
                    height={25}
                    className="rounded-circle object-fit-fill"
                  />

                  <p className="m-0">{order.customerName}</p>
                </td>

                <td className="py-3">
                  <p className="m-0">{order.orderNo}</p>
                </td>

                <td className="py-3">
                  <p className="m-0">{order.amount}</p>
                </td>

                <td className="py-3">
                  <p
                    className={`m-0 px-2 py-1 text-center fw-semibold rounded-5 ${
                      order.status === "Delieverd"
                        ? " text-success bg-success bg-opacity-25"
                        : "text-danger bg-danger bg-opacity-25"
                    }`}
                  >
                    {order.status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardContainer>
  );
}
