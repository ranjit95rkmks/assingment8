import IncomeComponent from "../component/IncomeComponent.jsx";
import Layout from "../layout/Layout.jsx";

function IncomePage() {
  return (
    <Layout title="ইনকাম">
      {
        <IncomeComponent />
      }
     
    </Layout>
    
  );
}

export default IncomePage;