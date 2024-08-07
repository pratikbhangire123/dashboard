import {
  Activity,
  CustomerFeedback,
  Header,
  Information,
  NetProfit,
  RecentOrders,
  Sidebar,
  Totals,
} from "./components/index";

function App() {
  return (
    <>
      <div className="d-flex">
        <Sidebar />

        <div>
          <Header />

          <div className="p-3 bg-secondary">
            <h2 className="my-4 fs-4 fw-bold text-neutral">Dashboard</h2>

            <div className="container">
              <div className="row mb-4 g-4">
                <div className="col-9 col-md-8">
                  <Totals />
                </div>

                <div className="col-9 col-md-4">
                  <NetProfit />
                </div>
              </div>

              <div className="row mb-4 g-4">
                <div className="col-9 col-md-8">
                  <Activity />
                </div>

                <div className="col-9 col-md-4">
                  <Information />
                </div>
              </div>

              <div className="row mb-4 g-4">
                <div className="col-9 col-md-8">
                  <RecentOrders />
                </div>

                <div className="col-9 col-md-4">
                  <CustomerFeedback />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
